import { Row, Col, Container, Button } from "react-bootstrap";
import { useEffect, useContext } from "react";
import { VariableContext } from "./Pages";

export default function Submit(props) {
  const { wordsData } = useContext(VariableContext);

  const submitData = () => {
    console.log("props.pages:", props.pages);
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(props.pages)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <Container>
      <Row className="m-1">
        <Col>
          <Button
            variant="success"
            //onClick={removePoly}
            className={props.showHideImage}
            onClick={submitData}
            size="lg"
          >
            Download
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
