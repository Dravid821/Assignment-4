import React,{useState} from "react";
import "../Product";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { useDispatch,useSelector} from "react-redux";
import { Addtocart,removetocart } from "../Services/Actions/action";

export default function Productcard(props) {
 const { id, price, title, description } = props.data;
 const data = {
  id,
  price,
  title,
  description,
 }
 const items = useSelector((state) => state.cartreducer.carts);
 const dispatch = useDispatch();
 const sendcart = (data)=>{
  dispatch(Addtocart(data))
 }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <Card className="my-2">
            <CardBody>
              <div className="d-flex justify-content-between" >
              <CardTitle tag="h5" className="text-start" key={id}>{title}</CardTitle>
              <CardTitle tag='h5' className=" btn btn-dark">${price}</CardTitle>
              </div>
              <CardText className="d-flex text-muted">{description}</CardText>
              <button 
              onClick={()=>sendcart(data)}
              className="btn btn-outline-primary d-flex justify-content-end btn1">Add to Cart</button>
            </CardBody>
          </Card>
          </div>
        </div>
      </div>
    </>
  );
}
