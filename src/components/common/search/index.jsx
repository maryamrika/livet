import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import isFunction from 'lodash/isFunction';
import SearchButton from '../searchButtton/SearchButton';
import './_search.scss';

class Search extends Component {
    state = {
      search: ''
    };

    onClick = () => {
      const { onClick } = this.props;
      const { search } = this.state;
      if (isFunction(onClick)) {
        onClick(search);
      }
    };

    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    render() {
      const { className = '', placeholder = 'Search' } = this.props;
      const { search } = this.state;
      return (
        <div className={`search input-wrapper bg-white d-flex p-1 ${className}`}>
          <Input
            type="text"
            className="input-blank"
            name="search"
            onChange={this.handleInputChange}
            value={search}
            placeholder={placeholder}
          />
          <SearchButton onClick={this.onClick} />
        </div>
      );
    }
}

Search.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func
};

export default Search;
