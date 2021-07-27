import React, { useEffect, useState } from 'react';
import { useStory } from '../Story/StoryContext';
import './style.css';

export default function Trivia(props) {
    
   console.log("questions",props.questions)
    return (
        <div className="minigame mt-3 mb-5">
            <h3> {props.a[0].question} </h3>
        </div>
    )
}
