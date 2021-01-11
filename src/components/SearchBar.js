import React from 'react';

class SearchBar extends React.Component {
  //default value
  state = { term: '' };

  //
  onInputChange = (event) => {
  this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    //avoid page reload
    event.preventDefault();
    //new value on form submit - onFormSubmit from app.js
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
