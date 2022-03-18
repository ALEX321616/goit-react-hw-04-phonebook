import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

export default function ContactItem({ contacts, onDeleteContact }) {
  return contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name} : {number}
      <button
        className={s.buttonList}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  ));
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
