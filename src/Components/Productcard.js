import React,{useState} from "react";
import "./Product";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { useDispatch,useSelector} from "react-redux";
import { Addtocart,removetocart } from "../Redux/Actions/action";
import { width } from "@mui/system";

export default function Productcard(props) {
 const { id, price, title, description } = props.data;
 const data = {
  id,
  price,
  title,
  description,
 }
 //ADD_TO_CART Method Calling
 const items = useSelector((state) => state.cartreducer.carts);
 const dispatch = useDispatch();
 const sendcart = (data)=>{
  dispatch(Addtocart(data))
 }
//
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-4 pt-3">  
          <Card className="my-2 card pt-3 mt-3"
          style={{width:'30rem'}}>
            <CardBody className="pt-3">
              <div className="d-flex justify-content-between" >
              <CardTitle tag="h5" className="text-start" key={id}>{title}</CardTitle>
              <CardTitle tag='h5' className=" btn btn-dark">${price}</CardTitle>
              </div>
              <CardText className="d-flex text-muted">{description}</CardText>
              <button 
              onClick={()=>sendcart(data)}
              className="btn btn-outline-primary d-flex align-item-end btn1">Add to Cart</button>
            </CardBody>
          </Card>
          </div>
        </div>
    </>
  );
}
