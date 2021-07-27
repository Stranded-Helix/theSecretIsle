import React from 'react';
import { StoryProvider } from './StoryContext';
import { CharacterProvider } from './CharacterContext';
import StoryPrompt from '../StoryPrompt';
import ChoiceBox from '../ChoiceBox';

export default function Story() {

    return (
        <div>
            <CharacterProvider>
                <StoryProvider>
                    <StoryPrompt />
                    <ChoiceBox />
                </StoryProvider>
            </CharacterProvider>
        </div>
    )
}