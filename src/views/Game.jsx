import React from 'react'

import { Board } from '../components/Board'
import { Turn } from '../components/Turn'
import { Matrix } from '../components/Matrix'

const Game = () => {
  return <section className="game">
    <Board />
    <Matrix />
    <Turn />
  </section>
}

export { Game }
