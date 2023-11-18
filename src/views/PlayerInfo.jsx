import React, { useContext, useState } from 'react'

import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { setItem } from '../utils/localStorage'
import { ViewsControllerContext } from '../context/ViewsController'

const PlayerInfo = () => {
  const { state, setState } = useContext(ViewsControllerContext)
  const [localState, setLocalState] = useState({
    code: '',
    name: ''
  })
  const onChange = (target) => setLocalState({ ...localState, [target.name]: target.value })
  const onContinue = (event) => {
    event.preventDefault()
    const { code, name } = localState

    setItem('code', code)
    setItem('name', name)
    setState({ ...state, playerInfo: { name, code }, view: 'game' })
  }

  return (
    <section className="player-info">
      <form className="player-info-form" onSubmit={onContinue}>
        <InputBox
          required
          label="Código"
          value={localState.code}
          name="code"
          minLength="3"
          onChange={onChange}
          type="text"
          className="player-info-form__code"
        />
        <InputBox
          required
          minLength="3"
          label="Nombre"
          value={localState.name}
          onChange={onChange}
          name="name"
          type="text"
          className="player-info-form__name"
        />
        <Button type="submit" variant="btn-primary">Continuar</Button>
      </form>
    </section>
  )
}

export { PlayerInfo }
