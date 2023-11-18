import React, { createContext, useState } from 'react'

import { PlayerInfo } from '../views/PlayerInfo'
import { Game } from '../views/Game'
import { getItem } from '../utils/localStorage'

export const ViewsControllerContext = createContext(null)

export const ViewsController = () => {
  const [state, setState] = useState({
    view: 'game',
    playerInfo: {
      name: getItem('name') || '',
      code: getItem('code') || ''
    },
    turn: 'player'
  })

  if (!(state.playerInfo.name || state.playerInfo.code) && state.view !== 'playerInfo') {
    setState({ ...state, view: 'playerInfo' })
  }

  return (
    <ViewsControllerContext.Provider value={{ state, setState }}>
      {
        state.view === 'playerInfo' ? <PlayerInfo /> : <Game />
      }
    </ViewsControllerContext.Provider>
  )
}
