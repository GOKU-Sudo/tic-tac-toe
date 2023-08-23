import {useState} from "react";

import './App.css';



import {Board} from "./MyComponents/Board.js"
import { ScoreBoard } from "./MyComponents/ScoreBoard.js";
import { ResetButton } from "./MyComponents/ResetButton";

function App() {

  const winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  // const board=["X","X","X","X","X","X","X","X","X"];
  const [board, setboard] = useState(Array(9).fill(null));

  const [xPlaying, setxPlaying] = useState(true);

  const [scores, setscores] = useState({xScores:0,oScores:0});

  const [gameOver, setgameOver] = useState(false);

  const handleClicked=(boxId)=>{

    const updateBoard=board.map((value,idx)=>{
      if(boxId===idx){
        return xPlaying===true?"X":"O";
      }
      else{
        return value;
      }
    });

    const winner=checkWinner(updateBoard);

    if(winner){
      if(winner==="X"){
        let {xScores}=scores;
        xScores++;
        setscores({...scores,xScores});
      }
      else{
        let {oScores}=scores;
        oScores++;
        setscores({...scores,oScores});
      }
    }
    console.log(scores);
    setboard(updateBoard);
    setxPlaying(!xPlaying);
  }

 const checkWinner=(board)=>{
    for(let i=0;i<winConditions.length;i++){
      const [x,y,z]=winConditions[i];

      if(board[x]&& board[x]==board[y] && board[y]==board[z]){
        console.log(board[x]);
        setgameOver(true);
        return board[x];
      }

    }
  }

  const resetBoard=()=>{
    setgameOver(false);
    setboard(Array(9).fill(null));
  }


  return (
    <div className="App container">
      <ScoreBoard scores={scores} xPlaying={xPlaying}/>
      <Board board={board} onClick={ gameOver? resetBoard: handleClicked}/>
      <ResetButton resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
