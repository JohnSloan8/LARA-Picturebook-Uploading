import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Sent from "./Sent";
import { VariableContext } from "./Pages";

export default function Words(props) {
  return (
    <>
      <Row xs="auto" className="mb-3">
        <Col>
          {props.wordsData.map((sent, s_i) => {
            return (
              <Sent
                sent={sent}
                //setEditorVisible={setEditorVisible}
                sentID={s_i}
              />
            );
          })}
        </Col>
      </Row>
    </>
  );
}
