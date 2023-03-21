import React, { useState } from "react";
import Cart from "./Cart";
import "../Services/Reducer/reducer";
import { useSelector, useDispatch } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Badge } from "reactstrap";

export default function Navbar(props) {
  //   const { id, price, title, description } = props.data;
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.cartItems);
  console.log(items.id);
  return (
    <>
      <Cart show={modal} onHide={() => setModal(false)} data={items} />

      <nav className="navbar navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand h4 text-white">Online Shopping Site</a>
          <form className="form-inline">
            <button className="btn btn-primary" onClick={() => setModal(true)}>
              Mycart &nbsp;
              <Badge bg="dark">2</Badge>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
