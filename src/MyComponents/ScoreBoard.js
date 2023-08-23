import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({scores,xPlaying}) => {
      const {xScores,oScores}=scores;
  return (
    <div className='scoreboard'>
      <span className={`scores x-scores ${!xPlaying && "inactive"}`}>X - {xScores}</span>
      <span className={`scores o-scores ${xPlaying && "inactive"}`}>O - {oScores}</span>
    </div>
  )
}
