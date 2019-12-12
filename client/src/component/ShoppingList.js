import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
class ShoppingList extends Component {
  state = {};

  componentDidMount() {
    this.props.getItems();
  }
  handleDelete = id => {
    this.props.deleteItem(id);
  };
  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          {items.map(({ id, name }) => {
            return (
              <ListGroupItem key={items.id}>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.handleDelete.bind(this, id)}
                >
                  X
                </Button>
                {name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
