import React, { useState } from "react";
import Cart from "./Cart";
import "../Services/Reducer/reducer";
import { useSelector, useDispatch } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";

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

  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand h4 text-white">Online Shopping Site</a>
          <form className="form-inline">
            <Button
              className="btn btn-primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            > MYCART
              <Badge badgeContent={items.length} color="primary">
                <BsFillCartCheckFill/>
              </Badge>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
            </Menu>
          </form>
        </div>
      </nav>
    </>
  );
}
