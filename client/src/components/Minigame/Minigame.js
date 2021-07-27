import React, { useEffect, useState } from 'react';
import './style.css'

export default function StoryPrompt(props) {
    return (
        <div className="minigame">
            {props.children}
        </div>
    )
}