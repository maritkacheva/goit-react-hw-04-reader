import React from "react";
import PropTypes from "prop-types";
import { StyledControl, StyledButton } from "./Controls.styles";

const Controls = ({ handleClick, currentPage, length }) => (
  <StyledControl>
    <StyledButton
      type="button"
      name="back"
      disabled={!currentPage}
      onClick={handleClick}
    >
      Назад
    </StyledButton>

    <StyledButton
      type="button"
      name="ahead"
      disabled={currentPage + 1 === length}
      onClick={handleClick}
    >
      Вперед
    </StyledButton>
  </StyledControl>
);

Controls.propTypes = {
  handleClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
};

export default Controls;
