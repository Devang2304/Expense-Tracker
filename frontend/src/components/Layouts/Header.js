import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import "../../styles/HeaderStyles.css";

const Header = () => {

  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userName"));
    if (user) {
      setLoginUser(user);
    }
  }, []);


  const logoutHandler =()=>{
    localStorage.removeItem("userName");
    message.success("Logout Successfully");
    navigate("/login");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand" >
        Expense Management
      </Link>
      <li className="nav-item">
                {" "}
                <h6 className="nav-link ">
                  <UserOutlined /> {loginUser && loginUser.name}
                </h6>{" "}
              </li>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/login" className="nav-link active" aria-current="page" onClick={logoutHandler}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

export default Header