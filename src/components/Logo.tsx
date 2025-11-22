import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img className="h-22" src="../public/Logo.png" alt="Logo" />
    </Link>
  );
}

export default Logo;
