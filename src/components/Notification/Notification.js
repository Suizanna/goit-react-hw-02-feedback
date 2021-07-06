import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message }) {
  return <p className={s.message}>{message}</p>;
}
Notification.prototype = {
  message: PropTypes.string.isrquired,
};

export default Notification;