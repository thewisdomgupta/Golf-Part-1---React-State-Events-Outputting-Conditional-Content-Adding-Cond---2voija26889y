import React, { useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
    const [renderBall, setRenderBall] = useState(false);
    const [posi, setPosi] = useState(0);
    const [ballPosition, setBallPosition] = useState({ left: 0, top: 0 });

    useEffect(() => {
        const keyListener = document.addEventListener("keydown", (event) => {
           console.log(event.key, renderBall, ballPosition);
            switch(event.key) {
                case "ArrowRight"://right
                    setBallPosition((ballPosition) => {
                        return {
                        left: ballPosition.left + 5,
                        top: ballPosition.top,
                        }
                    });
                    break;
                case "ArrowDown"://down
                    setBallPosition((ballPosition) => {
                        return {
                        left: ballPosition.left,
                        top: ballPosition.top + 5,
                        }
                    });
                    break;
                case "ArrowLeft"://left
                    setBallPosition((ballPosition) => {
                        return {
                        left: ballPosition.left - 5,
                        top: ballPosition.top,
                        }
                    });
                    break;
                case "ArrowUp"://up
                    setBallPosition((ballPosition) => {
                        return {
                        left: ballPosition.left,
                        top: ballPosition.top - 5,
                        }
                    });
                    break;
            }
        });
        
        return () => document.removeEventListener("keydown", keyListener);
    }, []);

    const buttonClickHandler = () => {
        setRenderBall(true);
    };
    const renderBallOrButton = () => {
		if (renderBall) {
		    return <div 
            className="ball" 
            style={{
                position: "absolute",
                left: ballPosition.left + "px",
                top: ballPosition.top + "px",
            }}
            ></div>
		} else {
		    return <button onClick={buttonClickHandler} >Click For One Ball</button>
		}
    }

    // bind ArrowRight KeyboardEvent.codedown event
    

    return <div className="playground">{renderBallOrButton()}</div>;
}

export default App;
