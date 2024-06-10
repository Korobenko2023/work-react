import React, { Component } from "react";
import { Header } from "./Header/Header";
import { Counter } from "./Counter/Counter";
import { Modal } from "./Modal/Modal";

export class App extends Component {
  state = {
    isShowModal: false,
  }

  showModal = () => {
    this.setState({isShowModal: true})  
  }

  clouseModal = () => {
    this.setState({isShowModal: false})
  }

  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <Counter />
        {this.state.isShowModal && <Modal clouseModal={this.clouseModal}>Some</Modal>}
      </div>
    )
  }
}
  


