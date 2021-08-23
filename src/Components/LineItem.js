import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => (
  <li className='item'>
    <input
      id={item.id}
      type='checkbox'
      onChange={() => handleCheck(item.id)}
      checked={item.checked}
    />
    <label
      htmlFor={item.id}
      style={item.checked ? { textDecoration: 'line-through' } : null}
    >
      {item.item}
    </label>

    <FaTrashAlt
      onClick={() => handleDelete(item.id)}
      role='button'
      tabIndex='0'
      aria-label={`Delete ${item.item}`}
    />
  </li>
);

export default LineItem;
