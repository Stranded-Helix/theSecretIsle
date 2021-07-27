import React ,{useEffect, useState} from "react";
import axios from "axios"
import ContainerBig from '../components/ContainerBig/ContainerBig'
import Navbar from "../components/Navbar";
import StoryPrompt from '../components/StoryPrompt'
import Trivia from "../components/Trivia/Trivia";
import ChoiceBoxQuiz from "../components/ChoiceBoxQuiz/ChoiceBoxQuiz";
import { StoryProvider } from "../components/Story/StoryContext";
import { CharacterProvider } from "../components/Story/CharacterContext";



function Quiz() {
    const [questions, setQuestions]= useState({})
    const [riddle, setRiddle] = useState({})
    const [miniGame, setMiniGame] = useState({}) 
    const [trivia, setTrivia] = useState({})

    useEffect( () => {
        getQuizQuestions()
        getTrivia()
    },[])

    function getQuizQuestions() {
        axios.get("/api/story/")
            .then(res => {
                
                setQuestions(res.data)
              })
        
    }
    function getTrivia(){
        axios.get("https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=boolean")
        .then(res => {
          setTrivia(res.data.results)
          console.log("hehehuey", res.data.results)
        })
    }

      return(
        <ContainerBig>
            <Navbar />
            <StoryProvider>
                <CharacterProvider>
                    <StoryPrompt />
                    <Trivia a={trivia}/>
                    <ChoiceBoxQuiz />
                </CharacterProvider>
            </StoryProvider>
        </ContainerBig>
      )

}

export default Quiz;