import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, ModalHeader, ModalFooter, ModalText } from "reactstrap";
import { Addtocart, removetocart } from "../Services/Actions/action";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter,
  CardHeader,
} from "reactstrap";
export default function Cart() {
  const [price, setprice] = useState(0);
  const items = useSelector((state) => state.cartreducer.carts);
  console.log(items);
  const dispatch = useDispatch();
  const increment = (items) => {
    dispatch(Addtocart(items));
  };
  const decrement = (items) => {
    dispatch(removetocart(items));
  };
  const total = () => {
    let price = 0;
    items.map((items) => {
      price = items.price + price;
    });
    setprice(price);
  };
  useEffect(() => {
    total();
  }, [total]);
  return (
    <>
      <div>
        {items
          ? items.map((item) => {
              return (
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <Card
                      key={item.id}
                      className="my-2 bg-dark"
                      style={{
                        width: "20rem",
                      }}
                    >
                      <CardHeader className="text-white">
                        {item.title}
                      </CardHeader>
                      <CardBody>
                        <CardText className="btn btn-white">
                          <span className="btn-outline-secondary text-white">X:{item.qnty}</span>
                        </CardText>
                        <div className="d-flex justify-content-between">
                          <button
                            onClick={() => decrement(item)}
                            className="btn btn-info"
                          >
                            -
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={() => increment(item)}
                          >
                            +
                          </button>
                    <div className="btn btn-danger">total:${item.qnty * item.price}</div>
                          
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              );
            })
          : null}
          <h1>{}</h1>
      </div>
    </>
  );
}
