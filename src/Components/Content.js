import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
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
                role='button'
                tabIndex='0'
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}> Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
