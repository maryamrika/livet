import React from 'react';
import { Media } from 'reactstrap';
import {
  MdDone,
  MdVolumeDown
} from 'react-icons/lib/md';


import PropTypes from '../utils/propTypes';

const Notifications = ({ notificationsData }) => {
  return (
    notificationsData &&
    notificationsData.length &&
    notificationsData.map(({ id, feedback, message, date }) => (
      <Media key={id} className="pb-2">
        <Media left className="align-self-center pr-3">
          {feedback
           ? <MdVolumeDown />
           : <MdDone />
          }
        </Media>
        <Media body middle className="align-self-center">
          {message}
        </Media>
        <Media right className="align-self-center">
          <small className="text-muted">{date}</small>
        </Media>
      </Media>
    ))
  );
};

Notifications.propTypes = {
  notificationsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      feedback: PropTypes.Boolean,
      message: PropTypes.node,
      date: PropTypes.date,
    })
  ),
};

Notifications.defaultProps = {
  notificationsData: [],
};

export default Notifications;
