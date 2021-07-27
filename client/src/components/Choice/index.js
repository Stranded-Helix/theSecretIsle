import React, { Children, useEffect, useState } from 'react';
import {useStory, useStoryUpdater} from '../Story/StoryContext'
import { useCharacterUpdater } from '../Story/CharacterContext'

export default function Choice(props) {
    const processChoice = useStoryUpdater();
    const updateCharacter = useCharacterUpdater();
    //TODO: change to button that on click run charScore calcs and gets new question/puzzle

    const buttonEle = document.querySelector('button');

    const functionCalls = () => {
        processChoice(props.mod);
        //updateCharacter();
    }



    return (
        <div className="d-grid gap-2 col mx-auto mt-5">
            <button className="btn btn-light" onClick={functionCalls}>
                {props.children}
            </button>
        </div>
    )
}