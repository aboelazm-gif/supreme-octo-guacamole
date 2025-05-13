import React from 'react'
import { Member } from '../components/HighBoard'
import { Heads } from '../components/Heads'
//import carbg from "../assets/images/car-bg.png" This image isn't used and the import should be removed

export const TeamPage = () => {
  return (
    <>
    <h1 className="accordion-title">Team Board:</h1>
    <div className="team-hierarchy">
      <Member />
      <Heads />
    </div>
    </>
  )
}
