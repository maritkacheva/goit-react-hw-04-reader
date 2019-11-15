import queryString from "query-string";

const itemsParsed = props =>
  Number(queryString.parse(props.location.search).item);

export default itemsParsed;
