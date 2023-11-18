import React, { useContext } from 'react'

import { ViewsControllerContext } from '../context/ViewsController'

const Board = () => {
  const { state: { playerInfo } } = useContext(ViewsControllerContext)

  return (
    <div className="board">
      <div className="total total-played">
        <p className="total-label">Partidas jugadas en total</p>
      </div>
      <div className="total total-player-wins">
        <p className="total-label">Partidas ganadas por el jugador: {playerInfo.name}</p>
      </div>
      <div className="total total-cpu-wins">
        <p className="total-label">Partidas ganadas por la CPU</p>
      </div>
    </div>
  )
}

export { Board }
