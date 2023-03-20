import React from "react";
import "./Product";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export default function Productcard(props) {
 const {id, price, title, description} = props.data
  return (
    <>
      <div className="container">
        <div className="row">
        <Card className="my-2">
          <CardBody>
            <CardTitle tag="h5" className="text-start">Man Perfume</CardTitle>
            <CardText>
             {price}
            </CardText>
          </CardBody>
        </Card>
        <Card className="my-2">
          <CardBody>
            <CardTitle tag="h5" className="text-start"></CardTitle>
            <CardText>
              
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </div>
      </div>
    </>
  );
}
