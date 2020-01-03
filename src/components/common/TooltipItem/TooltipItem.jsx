import React from 'react';
import { Tooltip } from 'reactstrap';
import PropTypes from 'prop-types';

export default class TooltipItem extends React.Component {
    state = {
      tooltipOpen: false
    };

    toggle = () => {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    };

    render() {
      const { id, placement, text } = this.props;
      return (
        <Tooltip
          placement={placement}
          isOpen={this.state.tooltipOpen}
          target={id}
          toggle={this.toggle}
        >
          {text}
        </Tooltip>
      );
    }
}

TooltipItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  placement: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

