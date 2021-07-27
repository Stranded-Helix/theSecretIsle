import React, { useEffect, useState } from 'react';
import styles from './componentStyle/component.module.css'

export default function Tile() {
    const [content, setContent] = useState();

    return (
        <Tile classname={[styles.tileOn, styles.tile]}>
            {content}
        </Tile>
    )
}