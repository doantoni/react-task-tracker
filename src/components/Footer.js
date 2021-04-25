import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="/react-task-tracker/about">About</Link>
    </footer>
  );
};

export default Footer;
