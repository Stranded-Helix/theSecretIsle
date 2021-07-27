import Axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';

const CharacterContext = React.createContext();
const CharacterContextUpdater = React.createContext();

const fakePlayer = {
    characterScore: 15,
    lastQuestion: 1
}

export function useCharacter() {
    return useContext(CharacterContext);
}

export function useCharacterUpdater() {
    return useContext(CharacterContextUpdater);
}

export function CharacterProvider({children}) {
    const [characterContext, setCharacterContext] = useState(fakePlayer);

    useEffect( () => {
        fetch('api/user/question')
        .then(res => res.json())
        .then(data =>{
            setCharacterContext(data);
        })            
    }, [])

    //TODO: finish the update Character method
    const updateCharacter = async (number) => {
        //const updatedChar = await fetch(`api/user/update/${questionNumber}`)
        setCharacterContext({...characterContext, lastQuestion: number});
    } 

    const restartCharacter = async () => {
        updateCharacter(1);
    }

    return (
        <CharacterContext.Provider value={characterContext}>
            <CharacterContextUpdater.Provider value={updateCharacter}>
            {children}
            </CharacterContextUpdater.Provider>
        </CharacterContext.Provider>
    )
}