import { Component } from 'react';
// import api from '../Api';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleInputChange = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.changeRequestInMainState(this.state.searchValue);
    this.setState({
      searchValue: '',
    });
  };

  render() {
    // console.log(this.state);
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
