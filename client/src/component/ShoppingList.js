import React, { Component } from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import uuid from 'uuid'

export default class ShoppingList extends Component {
    state = {
        items: [
            {id:uuid(), name: "eggs"},
            {id:uuid(), name: "yam"},
            {id:uuid(), name: "potato"},
            {id:uuid(), name: "beans"},
        ]
    }
    render() {
        const {items} = this.state
        return (
           <Container>
               <Button
                color="dark" style={{marginBottom: "2rem"}}
                onClick={() => {
                    const name = prompt("Enter your name")
                    if(name){
                        this.setState(state => ({
                            items: [...this.state.items, {id: uuid(), name}]
                        }))
                    }
                }}
               >

               </Button>
           </Container>
        )
    }
}
