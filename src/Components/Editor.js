import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { VariableContext } from "./Pages";

export default function Editor(props) {
  const {
    confirmSelection,
    clearSelection,
    selectedWord,
    setSelectedWord,
    wordsData,
    setWordsData,
    mainImageUrl,
    setClearSelection,
    setClicks,
    setReadyToSelect,
    pointColor,
    setPointColor,
    pointChangeButtonVisible
  } = useContext(VariableContext);

  const removePoly = () => {
    console.log("selectedWord:", selectedWord);
    context.clearRect(0, 0, canvas.current.width, canvas.current.height);
    console.log("wordsData:", wordsData);

    //let coordsData = wordsData[selectedWord[1]][selectedWord[2]].slice(1)
    //console.log('corrdsData:', coordsData)
    if (selectedWord.length !== 0) {
      wordsData[selectedWord[1]][selectedWord[2]] = [
        selectedWord[0],
        ["", ""],
        ["", ""]
      ];
    } else {
      setReadyToSelect(false);
    }
    setClearSelection("hidden");
    setWordsData(wordsData);
    setClicks([]);
  };

  const changeColorOfPoint = () => {
    if (pointColor === "black") {
      setPointColor("white");
    } else {
      setPointColor("black");
    }
  };

  return (
    <Container>
      <Row className="m-1">
        <Col>
          <Button
            variant="danger"
            onClick={removePoly}
            className="m-2"
            size="lg"
            style={{ visibility: clearSelection }}
          >
            Clear Selection
          </Button>
          <Button
            variant={pointColor === "black" ? "light" : "dark"}
            className="m-2"
            size=""
            onClick={changeColorOfPoint}
            style={{ visibility: pointChangeButtonVisible }}
          >
            Change point colour
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
