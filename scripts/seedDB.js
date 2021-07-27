const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/secretIsleGame");

const PromptSeed = [
    {
      promptNum:1,
      
      storyChunk: "Its the age of the pirates and you have arived at the secret isle and your crew is ready to explore the taverns. you and and you right hand man Zoro go out togeather seprate from the rest of your crew, you and Zoro joined the crew togeather and worked your way on to the ship you both have great memories togeather. The two of you arive at the tavern and have been drinking heavy  for about a few hours. Zoro has to relive him self and ask oyu to come around back with him to watch his back what do you? ",

      answer1: "Get up and walk outside with him.",

      answer2:"Stay in the tavern and keep drinking.",

      right: 2,

      wrong: 3,

    },
    {
        promptNum:2,
        
        storyChunk: "you both head out the back door Zoro goes left and you go right to give him his privacy. All of a sudden you you hear Zoro sream your name but you black out some how. You wake up in the ally with a sore head and a headache from hell, Zoro is also gone and no where in the tavern!",
  
        answer1: " Start walking around and do some investigating ",
  
        answer2:"become worried and lash out at the tavern ",
  
        right: 4,
  
        wrong: 5
      },
      {
        promptNum:3,
        
        storyChunk: "you Continue to drink and conversate with the lad next to you and end up passing out. You wake up with a headache from hell, Zoro is also gone and no where in the tavern!",
  
        answer1: "Head out the tavern and see whats going on",
  
        answer2:"start waking everyone up asking what happen",
  
       right: 4,
  
        wrong: 5
      },
      {
        promptNum: 4,
        
        storyChunk: " You walk out and see a kid that you and zoro bumped into at the tavern, you run up tp him and ask, What happen to my frined Zoro? hes missing I know you didnt have a drop of boose help me out! The kid says he knows what heppen and says he'll tell you for a shikel. How do you respond?",

        answer1: "you flip him a coin and are ready to listen",

        answer2: "you beat the info out of him ",

        right: 6,

        wrong: 7
      },
      {
        promptNum:5,
        
        storyChunk: "As your waking everyone up, you wake up the wrong person.... He wakes up and challenges you to a brawl. How do you respond?",

        answer1: "pridfully decline and get to the matter at hand, as you walk out you find a kid with some information",

        answer2: " Brawl it out. Thats what your best at, your your a pirate!",

        right:6,

        wrong:7
      },
      {
          promptNum:6,

          storyChunk: " As you talk it out he tells you everything you need to know. Zoro was taken to be sacraficed by a ancent indeginos people of the secret isle, in their past they fought pirates off the island but their profecy says that their greatest worrior was in a eternal rest and the only way for him to be risen is to sacrafice pirates and so you need to save him quickly. whats your reaction?",

          answer1:" go get the crew and prepare them for a fight ", 
          
          answer2: " go there and save him your self ",

          right:8,

          wrong:9
      },
      {
        promptNum: 7,

        storyChunk: " you have ended up in jail for a week, your crew left you because they didnt know where you were and none of them could go to the jail because they all are wanted. whe you get out you learn that Zoro was sacraficed by the indeginouse people of the secret isle and you slip into a depression and never leave the island.... the end. ",

        answer1:"",

        answer2:"",

        right: 0,

        wrong:0
      },
      {
        promptNum: 8,

        storychunk: " you all make it to soro in time and fight your way to him in a epic battle for the ages and battle so enormous its remebered in pirate history forever. You make it out with all of your lives and set sail away from the secret isle to continue the exploration of the world, together",

        answer1: "",

        answer2: "",

        right: 0,

        wrong:0
      },
      {
        promptNum:9,

        storyChunk: " you sneak into the lands of the indignous but your caught and sacrificed with Zoro.",

        answer1: "",

        answer2: "",

        right: 0,

        wrong:0

      }
]

const UserSeed = [
    {
        Name: "sherry berry",
        userName: "sherryB@gmail.com",
        password:"bigSherr34",
        lastQuestion:7,
        Score:45
    }
]

db.Prompt.deleteMany({})
  .then(() => db.Prompt.insertMany(PromptSeed))
  .then(data => {
    process.exit(0);    
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.result.n + " records inserted! user");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });