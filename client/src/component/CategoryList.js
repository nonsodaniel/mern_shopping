import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import {
  viewCategory,
  addCategory,
  deleteCategory
} from "../actions/itemActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.viewCategory();
    console.log("Wunm", this.props);
  }
  handleDeleteCat = id => {
    // e.preventDefault();
    console.log(id);
    this.props.deleteCategory(id);
  };

  render() {
    let { categories } = this.props.category;
    return (
      <div className="border bg-light">
        <Container>
          <ListGroup>
            {categories.map(({ id, name }) => {
              return (
                <ListGroupItem key={id}>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.handleDeleteCat.bind(this, id)}
                  >
                    X
                  </Button>
                  {name}
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.category
  };
};

export default connect(mapStateToProps, {
  viewCategory,
  addCategory,
  deleteCategory
})(CategoryList);
