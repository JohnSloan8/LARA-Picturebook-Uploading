// import { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import Word from "./Word";

export default function Sent(props) {
  // useEffect(() => {
  //   // console.log("props.sent:", props.sent);
  // }, [props]);

  return (
    <Container>
      <Row xs="auto" className="mt-4">
        {props.sent.map((word, w_i) => {
          if (w_i < props.sent.length - 2) {
            let coords = [];
            word.map((w, j) => {
              if (j < w.lwngth && j !== 0) {
                coords.push(w[j]);
              }
            });
            return (
              <Word
                word={word}
                coords={coords}
                sentID={props.sentID}
                wordID={w_i}
              />
            );
          }
        })}
      </Row>
    </Container>
  );
}
