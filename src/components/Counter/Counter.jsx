import React from "react";
import PropTypes from "prop-types";
import StyledCounter from "./Counter.styles";

const Counter = ({ currentPage, length }) => (
    <div>
      <StyledCounter>
        {currentPage + 1}/{length}
      </StyledCounter>
    </div>
);

Counter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
};

export default Counter;
