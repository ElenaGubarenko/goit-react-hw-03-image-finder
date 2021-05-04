import { Component } from 'react';
import api from '../Api';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import NewLoader from '../Loader';
import Button from '../Button';
import Modal from '../Modal';

class ImageFinder extends Component {
  state = {
    apiImages: [],
    request: '',
    error: null,
    page: 1,
    isLoading: false,
    modalIsOpen: false,
    bigUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.request !== this.state.request) {
      this.searchImages();
    }
  }

  changeRequestInMainState = value => {
    this.setState({
      request: value,
    });

    if (this.state.apiImages !== '') {
      this.setState({
        apiImages: [],
        page: 1,
      });
    }
  };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  changeModalIsOpen = e => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  };

  closeModal = data => {
    this.setState({
      modalIsOpen: data,
    });
  };

  bigImageSrc = e => {
    this.setState({
      bigUrl: e.target.id,
    });
  };

  searchImages = () => {
    this.setState({
      isLoading: true,
    });
    api(this.state.request, this.state.page)
      .then(answer => {
        // console.log(answer);
        this.setState(prevState => ({
          apiImages: [...prevState.apiImages, ...answer],
          page: prevState.page + 1,
        }));
        this.scrollTo();
      })
      .catch(error =>
        this.setState({
          error: error,
        }),
      )
      .finally(() =>
        this.setState({
          isLoading: false,
        }),
      );
  };

  render() {
    return (
      <div className="App">
        <Searchbar changeRequestInMainState={this.changeRequestInMainState} />
        <ImageGallery
          stateApiImages={this.state.apiImages}
          changeModalIsOpen={this.changeModalIsOpen}
          bigImageSrc={this.bigImageSrc}
        />

        {this.state.isLoading ? <NewLoader /> : null}

        {this.state.apiImages.length > 0 ? (
          <Button searchImages={this.searchImages} type="button" />
        ) : null}

        {this.state.modalIsOpen && (
          <Modal
            closeModal={this.closeModal}
            mainStateBigUrl={this.state.bigUrl}
          />
        )}
      </div>
    );
  }
}

export default ImageFinder;
