const Footer = ({ length }) => (
  <footer>
    <p>
      {length} List {length === 1 ? 'item' : 'items'}
    </p>
  </footer>
);

export default Footer;
