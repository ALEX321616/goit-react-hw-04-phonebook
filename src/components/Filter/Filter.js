import s from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ onChange }) {
  return (
    <label>
      Find contacts by name
      <input className={s.input} type="text" onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
