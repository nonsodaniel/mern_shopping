import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import uuid from "uuid";

class ItemModal extends Component {
  state = { modal: false, name: "" };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: this.state.name
    };
    //add item action
    this.props.addItem(newItem);

    //close modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to shopping list</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Add shopping item"
                    onChange={this.handleChange}
                  />
                </Label>
                <Button
                  color="dark"
                  style={{ marginTop: "2rem" }}
                  block
                  onClick={this.handleSubmit}
                >
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);
