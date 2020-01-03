import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, ButtonGroup, PopoverBody } from 'reactstrap';
import TextWithLabel from '../../common/TextWithLabel/TextWithLabel';

class CallInfo extends React.Component {
    state = {
      popoverOpen: false
    };
    toggle=() => {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    };

    render() {
      const { className = '' } = this.props;
      return (
        <div className={`d-flex align-items-center justify-content-between ${className}`} >
          <i className="icon icon--phone mr-2" />
          <TextWithLabel label="1hr 28m 55s" text="Nick John Frank" />
          <Button color="transparent" id="Popover1" className="border ml-2 square-box p-0 btn-none" onClick={this.toggle}>
            <i className="icon icon--caret-down-grey d-flex align-items-center justify-content-center" />
          </Button>
          <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            <PopoverBody className="bg-grey-f0">
              <ButtonGroup className="bg-grey-f0" vertical>
                <Button color="transparent" className="text-left font-size--12 color--grey-5d btn-none">Quick add</Button>
                <Button color="transparent" className="text-left font-size--12 color--grey-5d btn-none">Quick edit</Button>
              </ButtonGroup>
            </PopoverBody>
          </Popover>
        </div>
      );
    }
}

CallInfo.propTypes = {
  className: PropTypes.string
};

export default CallInfo;
