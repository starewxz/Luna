

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full  flex justify-center items-center px-4 py-2">
      <p>Created by Stanislav Revasevych ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
