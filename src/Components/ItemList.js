import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleDelete }) => (
  <ul>
    {items.map((item) => (
      <LineItem
        key={item.id}
        item={item}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    ))}
  </ul>
);

export default ItemList;
