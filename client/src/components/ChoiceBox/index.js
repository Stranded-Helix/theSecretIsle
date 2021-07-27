import React, { useEffect, useState } from 'react';
import Choice from '../Choice';
import {useStory} from '../Story/StoryContext';
import './style.css'

export default function ChoiceBox() {
    const story = useStory();

    return (
        <div>
            <Choice mod={story.right}>{story.answer1}</Choice>
            <Choice mod={story.wrong}>{story.answer2}</Choice>
        </div>
    )
}