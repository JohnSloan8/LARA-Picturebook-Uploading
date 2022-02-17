import { Button, Col } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { VariableContext } from "./Pages";

export default function Word(props) {
  const [buttonVariety, setButtonVariety] = useState("primary");
  const {
    confirmSelection,
    setConfirmSelection,
    clearSelection,
    setClearSelection,
    selectedWord,
    setSelectedWord,
    wordsData,
    setWordsData,
    mainImageUrl,
    canDraw,
    setCanDraw,
    clicks,
    setClicks,
    readyToSelect,
    setReadyToSelect,
    polyShowing,
    setPolyShowing
  } = useContext(VariableContext);

  useEffect(() => {
    if (readyToSelect) {
      setButtonVariety("warning");
    } else {
      if (props.word[1][0] === "") {
        setButtonVariety("secondary");
      } else {
        setButtonVariety("primary");
      }
    }
  }, [props, readyToSelect]);

  const showPolygon = (e) => {
    let coordArray = e.target.id.split("_");
    console.log("coordArray:", coordArray);
    let word = coordArray[0];
    setSelectedWord([word, props.sentID, props.wordID]);
    if (readyToSelect) {
      setReadyToSelect(false);
      drawPoly(clicks);
      setPolyShowing(true);
      console.log("showPolygon readyToSelect");
      wordsData[props.sentID][props.wordID] = [props.word[0]].concat(clicks);
      setWordsData(wordsData);
      //console.log('wordsData:', wordsData)
    } else {
      setClicks([]);
      //console.log('wordsData[coordArray[1]][coordArray[2]]:', wordsData[coordArray[1]][coordArray[2]])
      if (wordsData[coordArray[1]][coordArray[2]][1][0] !== "") {
        drawPoly(wordsData[coordArray[1]][coordArray[2]].slice(1));
        setClearSelection("visible");
        //setCanDraw(false);
        setPolyShowing(true);
      } else {
        setClearSelection("hidden");
        clearPoly();
        //setCanDraw(true);
        setPolyShowing(false);
      }
    }
  };

  const drawPoly = (coords) => {
    context.lineWidth = 2;
    context.clearRect(0, 0, canvas.current.width, canvas.current.height);
    context.beginPath();
    context.moveTo(coords[0][0], coords[0][1]);
    for (i of coords.reverse()) context.lineTo(i[0], i[1]);
    context.stroke();
  };
  window.drawPoly = drawPoly;

  const clearPoly = () => {
    context.clearRect(0, 0, canvas.current.width, canvas.current.height);
    // setWordsData[props.sentID][props.WordID]
    setClearSelection("hidden");
  };

  return (
    // {if ( props.word[1][0] === "" ) {
    <Col className="gx-1">
      <Button
        variant={buttonVariety}
        id={props.word[0] + "_" + props.sentID + "_" + props.wordID}
        onClick={showPolygon}
        className="mb-2"
      >
        {props.word[0]}
      </Button>
    </Col>
    // }}
  );
}
