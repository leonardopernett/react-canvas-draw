import React, { Fragment , useRef} from "react";
import CanvasDraw from "react-canvas-draw";

import "./App.css";

function App() {

  const firstCanvas = useRef(null);
  const secondCanvas = useRef(null);

   const handlerClick = ()=>{
   const data = firstCanvas.current.getSaveData(); 
   secondCanvas.current.loadSaveData(data)
  }

  const canvasClear = ()=>{
     firstCanvas.current.clear()
     secondCanvas.current.clear()

  }
  const canvaUndo = ()=>{
    firstCanvas.current.undo()
  }

  return (
    <Fragment>
      <div className="draw">
        <h1>leonarod pernett</h1>
        <button onClick={handlerClick}>save</button>
        <button onClick={canvasClear}>clean</button>
        <button onClick={canvaUndo}>undo</button>
        <CanvasDraw
          brushRadius={1}
          brushColor="#000"
          catenaryColor="#000"
          ref={firstCanvas}
          style={{ border: "1px solid #000" }}
        />
        <CanvasDraw 
         ref={secondCanvas}
         hideGrid={true}
         disabled={true}
        />
      </div>
    </Fragment>
  );
}

export default App;
