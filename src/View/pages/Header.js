import React, { useState } from "react";
import Cart from "./Cart";
import "../../Redux/Reducer/reducer";
import { useSelector, useDispatch } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  //   const { id, price, title, description } = props.data;
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartreducer.carts);
  console.log( "cart",items);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
// Navbar
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container">
          <NavLink style={{textDecoration: 'none'}} to={`/product`}><a className="navbar-brand h4 text-white" color="none">Online Shopping Site</a></NavLink>
          <form className="form-inline">
            <Button
            >
              <NavLink to={`cart/${items.id}`} style={{textDecoration: 'none'}} className='text-primary'>MYCART</NavLink>
              &nbsp;
              <Badge badgeContent={items.length} color="primary">
                <BsFillCartCheckFill/>
              </Badge>
            </Button>
          </form>
        </div>
      </nav>
    </>
  );
}
