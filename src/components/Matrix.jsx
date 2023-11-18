import React, { useContext, useState } from 'react'

import { ViewsControllerContext } from '../context/ViewsController'
import '../assets/css/components/Matrix.css'

const Matrix = () => {
  const { state, setState } = useContext(ViewsControllerContext)
  const [selectedRows, setSelectedRows] = useState(new Set())
  const rows = ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', 'a3', 'b3', 'c3']

  const onLaunchCpuThinking = () => {
    console.log('thinking...')
  }

  const onSwitchTurn = () => {
    if (state.turn === 'player') {
      onLaunchCpuThinking()
      setState({ ...state, turn: 'cpu' })
    } else {
      setState({ ...state, turn: 'player' })
    }
  }

  const onSelectRow = (row) => {
    const $row = document.getElementById(row)
    if ($row.textContent) return
    if (state.turn !== 'player') return
    onSwitchTurn()
    setSelectedRows((previousState) => new Set([...previousState, `${state.turn[0]}-${row}`]))
  }

  return (
    <ul className="matrix">
      {rows.map((row, index) => (
        <li className="matrix__row" onClick={() => onSelectRow(row)} key={index} id={row}>
          {selectedRows.has(`c-${row}`) ? 'O' : selectedRows.has(`p-${row}`) ? 'X' : ''}
        </li>
      ))}
    </ul>
  )
}

export { Matrix }
