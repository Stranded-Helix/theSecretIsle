import React, { useEffect, useState } from 'react';
import { useStory } from '../Story/StoryContext';
import './style.css';

export default function StoryPrompt() {
    const story = useStory();

    return (
        <div className="prompt">
            {story.storyChunk}
        </div>
    )
}