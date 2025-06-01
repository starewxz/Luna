

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Created by Stanislav Revasevych ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
