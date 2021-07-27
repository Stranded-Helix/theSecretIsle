import React, { useEffect, useState, useRef, useReducer } from 'react';
import TimerBlock from '../TimerBlock';
import "./style.css";

export default function Timer() {
    const numberOfBlocks = 12;

    const [timerStarted, setTimerStarted] = useState(false);

    const renderTimerBlocks = (blockCount) => {
        let blockArray = [];
        for (let i = 0; i < blockCount; i++) {
            blockArray.push(<TimerBlock key={i} />);
        }
        return blockArray;
    }

    const reduceTimerBlocks = (state, action) => {

        if (state.number >= 0) {
            
            return ({ components: renderTimerBlocks(state.number - 1), number: state.number - 1 });
        } else {
            
            return state;
        }
    }

    const [timerBlocks, dispatch] = useReducer(reduceTimerBlocks, { number: numberOfBlocks, components: renderTimerBlocks(numberOfBlocks) });

    const startTimerOnFirstClick = () => {
        if (!timerStarted) {
            setTimerStarted(true);
            
        }
    }

    useEffect(() => {
        
        if (timerStarted && timerBlocks.number > 0) {
            
            const timer = setInterval(() => {
                dispatch();
            }, 3000);
            
            return () => {
                clearInterval(timer)
            };
        }
        

    }, [timerStarted])

    return (
        <div>
            <button className="col-2 btn btn-primary" onClick={startTimerOnFirstClick}>Start</button>
            <div className="row timer">
                {timerBlocks.components}
            </div>
        </div>

    )
}

