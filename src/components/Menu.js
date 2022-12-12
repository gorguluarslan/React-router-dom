import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="menu">
        <li>
          <a href="/" onClick={() => navigate(-1)}>
            Geri
          </a>
        </li>

        {/* <li>
          <a href="/">Home Page(test)</a>
        </li> */}
        <li>
          <Link to="/">Home Page</Link>
        </li>

        <li>
          <Link to="users">Users</Link>
        </li>

        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
