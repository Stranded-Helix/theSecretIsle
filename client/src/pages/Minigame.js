import React from "react";
import Container from "../components/Container";
import ContainerBig from '../components/ContainerBig/ContainerBig'
import Navbar from "../components/Navbar";
import StoryPrompt from '../components/StoryPrompt'
import Minigame from '../components/Minigame/Minigame'
import { StoryProvider } from "../components/Story/StoryContext";
import { CharacterProvider } from "../components/Story/CharacterContext";
import Timer from "../components/Timer"
import MemoryGame from "../components/Minigame/MemoryGame";



function Story() {
    return (
      <ContainerBig>
          <Navbar />
          <StoryProvider>
                <CharacterProvider>
                    <Minigame>
                        ...Loading
                    </Minigame>
                    <Timer />
                </CharacterProvider>
            </StoryProvider>
      </ContainerBig>
    )
}

export default Story