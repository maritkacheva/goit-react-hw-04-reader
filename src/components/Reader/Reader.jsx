import React, { Component } from "react";
import PropTypes from "prop-types";
import Publication from "../Publication/Publication";
import publications from "../../assets/publications.json";
import Controls from "../Controls/Controls";
import Counter from "../Counter/Counter";
import itemsParsed from "../../helpers/UrlParse";
import styles from "./Reader.css";

export default class Reader extends Component {
  state = {
    currentPage: 0
  };

  componentDidMount() {
    const { history, location } = this.props;
    const itemNumber = itemsParsed(this.props);

    if (!itemNumber) {
      return history.replace({
        pathname: location.pathname,
        // search: `item=${itemNumber}`
        search: "item=1"
      });
    }
    return this.setState({ currentPage: itemNumber - 1 });
  }

  componentDidUpdate(prevProps) {
    const itemNumber = itemsParsed(this.props);
    const prevItemNumber = itemsParsed(prevProps);

    if (itemNumber !== prevItemNumber) {
      this.setState({
        currentPage: itemNumber - 1
      });
    }
  }

  handleClick = event => {
    const { name } = event.target;
    const { history, location } = this.props;

    const navigate = () => {
      history.replace({
        ...location,
        pathname: location.pathname,
        search: `item=${this.state.currentPage + 1}`
      });
    };
    this.setState(
      prevState => ({
        currentPage:
          name === "back"
            ? prevState.currentPage - 1
            : prevState.currentPage + 1
      }),
      navigate
    );
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className={styles.reader}>
        <Controls
          handleClick={this.handleClick}
          currentPage={currentPage}
          length={publications.length}
        />
        <Counter currentPage={currentPage} length={publications.length} />
        <Publication item={publications[currentPage]} />
      </div>
    );
  }
}

Reader.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};
