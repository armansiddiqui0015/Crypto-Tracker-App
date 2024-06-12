import React, { useContext } from "react";
import { CoinContext } from "../store/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
      case "inr": {
        setCurrency({
          name: "inr",
          symbol: " ₹",
        });
        break;
      }
      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      }
      default: {
        setCurrency({
          name: "usd",
          symbol: "",
        });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg bg-body-tansparent navpad">
        <Link to="/" className="container-fluid">
          <img src="/logo.png" alt="" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                style={{ color: "white" }}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                style={{ color: "white", marginLeft: "20px" }}
                className="nav-link"
                href="#"
              >
                Futures
              </a>
            </li>
            <li className="nav-item dropdown"></li>
            <li className="nav-item">
              <a
                style={{ color: "white", marginLeft: "20px" }}
                className="nav-link disabled"
                aria-disabled="true"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="usd">
          <form className="d-flex" role="search">
            <select className="pricing" onChange={currencyHandler}>
              <option style={{ color: "black" }} value="usd">
                USD
              </option>
              <option style={{ color: "black" }} value="inr">
                INR
              </option>
              <option style={{ color: "black" }} value="eur">
                EUR
              </option>
            </select>
            <button className="navbtn" type="submit">
              SignUp <img className="navbtnimg" src="/arrow_icon.png" alt="" />
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
