import React, { useEffect, useState } from 'react';
import Tile from '../Tile';

export default function LightPuzzle() {
    const [content, setContent] = useState();

    return (
        <LightPuzzle>
            <div>
            <Tile/>
            <Tile/>
            <Tile/>
            </div>
            <div>
            <Tile/>
            <Tile/>
            <Tile/>
            </div>
            <div>
            <Tile/>
            <Tile/>
            <Tile/>
            </div>
        </LightPuzzle>
    )
}