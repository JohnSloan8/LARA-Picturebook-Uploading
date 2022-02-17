import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useRef, useContext } from "react";
import { VariableContext } from "./Pages";

export default function Page(props) {
  const [imageURL, setImageURL] = useState("");
  const [imageID, setImageID] = useState("");
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
    setReadyToSelect,
    polyShowing,
    setPolyShowing,
    setDrawDot,
    drawDot,
    pointColor,
    setPointChangeButtonVisible
  } = useContext(VariableContext);

  canvas = useRef(); // ADDED

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    window.context = context;
    setImageURL(props.url);
    setImageID(props.name);
    //console.log("props.url:", props.url);
    if (props.url) {
      var rawImg = new Image();
      rawImg.src = props.url;
      // imageDiv = document.getElementById("imageID");
      // imageDiv.innerHTML = "";
      // if (imageDiv !== null) {
      rawImg.onload = () => {
        canvas.current.style.backgroundImage = "url(" + props.url + ")";
        resize(canvas.current, rawImg.height, rawImg.width);
      };
      window.canvas = canvas.current;
      setClearSelection("hidden");
      setClicks([]);
      setPointChangeButtonVisible("visible");

      // canvas.addEventListener("click", (evt) => {
      //   // if (polyShowing) {
      //   //   setClearSelection("hidden");
      //   //   setClicks([]);
      //   //   setReadyToSelect(false);
      //   // }
      //   setDrawDot([evt.offsetX, evt.offsetY])
      //   // if (polyShowing) {
      //   //   setClicks((clicks) => [...clicks, [evt.offsetX, evt.offsetY]]);
      //   //   drawDot(evt.offsetX, evt.offsetY);
      //   // }
      //   // console.log("clicks in click:", clicks);
      // });
    }
  }, [props.url]);

  const dealWithClick = (evt) => {
    //console.log('evt.offsetX', evt.offsetX)
    if (polyShowing) {
      context.clearRect(0, 0, canvas.current.width, canvas.current.height);
      setClearSelection("hidden");
      setClicks([]);
      setPolyShowing(false);
    }
    setDrawDot((drawDot) => [evt.nativeEvent.offsetX, evt.nativeEvent.offsetY]);
  };

  useEffect(() => {
    //console.log('drawDot:', drawDot)
    setClicks((clicks) => [...clicks, drawDot]);
    drawDotOnCanvas(drawDot[0], drawDot[1]);
  }, [drawDot]);

  const resize = (thisCanvas, x, y) => {
    thisCanvas.height = x;
    thisCanvas.width = y;
    let canvasContainer = document.getElementById("imageCol");
    canvasContainer.style.width = y.toString() + "px";
  };

  const drawDotOnCanvas = (x, y) => {
    //console.log("canDraw in drawDot if:", canDraw)
    context.beginPath();
    context.arc(x, y, 4, 0, 2 * Math.PI);
    context.fillStyle = pointColor;
    context.fill();
  };
  //window.drawDot = drawDot;

  // const dealWithClick = (evt) => {
  //   setClickPoints(clickPoints.push([evt.offsetX, evt.offsetY]));
  //   // drawDot(evt.offsetX, evt.offsetY)
  //   console.log("clickPoints:", clickPoints);
  // };

  return (
    <div id="imageID">
      <canvas ref={canvas} onClick={dealWithClick} />
    </div>
  );
}
