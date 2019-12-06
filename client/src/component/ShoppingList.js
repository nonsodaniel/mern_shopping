import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import uuid from "uuid";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
class ShoppingList extends Component {
  state = {};

  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter your name");
            if (name) {
              this.setState(state => ({
                items: [...this.state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add Item
        </Button>

        <ListGroup>
          {items.map(({ id, name }) => {
            return (
              <ListGroupItem key={items.id}>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    this.setState(state => ({
                      items: state.items.filter(item => item.id !== id)
                    }));
                  }}
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

export default connect(mapStateToProps, { getItems })(ShoppingList);
