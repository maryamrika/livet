import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const SearchButton = (props) => {
  const { onClick } = props;
  return (
    <Button color="green" className="d-flex align-items-center" onClick={onClick}>
      <i className="icon icon--search mr-1 d-flex align-items-center" />
            Search
    </Button>
  );
};

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SearchButton;
