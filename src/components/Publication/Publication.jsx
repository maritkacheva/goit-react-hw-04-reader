import React from "react";
import PropTypes from "prop-types";
import {
  StyledPublication,
  StyledPublicationTitle,
  StyledPublicationText
} from "./Publication.styles";

const Publication = ({ item }) => {
  const { id, title, text } = item;

  return (
    <StyledPublication id={id}>
      <StyledPublicationTitle>{title}</StyledPublicationTitle>
      <StyledPublicationText>{text}</StyledPublicationText>
    </StyledPublication>
  );
};

Publication.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Publication;
