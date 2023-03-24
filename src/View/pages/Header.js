import React from "react";
import "../../Redux/Reducer/reducer";
import { useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
export default function Navbar(props) {
  const items = useSelector((state) => state.cartreducer.carts);
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container">
          <NavLink style={{ textDecoration: "none" }} to={`/product`}>
            <a className="navbar-brand h4 text-white" color="none">
              Online Shopping Site
            </a>
          </NavLink>
          <form className="form-inline">
            <Button>
              <NavLink
                to={`cart`}
                style={{ textDecoration: "none" }}
                className="text-primary"
              >
                MYCART
              </NavLink>
              &nbsp;
              <Badge badgeContent={items.length} color="primary">
                <BsFillCartCheckFill />
              </Badge>
            </Button>
          </form>
        </div>
      </nav>
    </>
  );
}
