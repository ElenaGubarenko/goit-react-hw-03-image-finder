import { Component } from 'react';

// const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByEsc);
  }
  // openModal = (e, id) => {
  //   console.log(e);
  //   this.setState({
  //     modalIsOpen: true,
  //   });
  // };

  closeModalByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal(false);
      window.removeEventListener('keydown', this.closeModalByEsc);
    }
  };

  closeModalByBackdrope = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal(false);
    }
  };

  render() {
    return (
      <div
        onKeyDown={this.closeModalByEsc}
        onClick={this.closeModalByBackdrope}
        className="Overlay"
      >
        <div className="Modal">
          <img src={this.props.mainStateBigUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
