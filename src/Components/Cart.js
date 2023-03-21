import React from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
export default function Cart(props) {
  return (
    <>
      <Modal {...props}>
        <ModalHeader closeButton>Edit Page</ModalHeader>
        <ModalBody>
          <Card
            className="my-2"
            style={{
              width: "18rem",
            }}
          >
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="primary">Go somewhere</Button>
          </Card>
        </ModalBody>
      </Modal>
    </>
  );
}
