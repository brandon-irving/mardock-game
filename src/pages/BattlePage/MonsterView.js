import React from 'react'
import HpBar from '../../common/ProgressBar/HpBar'
import MpBar from '../../common/ProgressBar/MpBar'
import sprite from '../../images/sprites/babynewt.png'
import { Typography } from '@material-ui/core'
import { useContextState } from 'dynamic-context-provider'
import { find } from 'lodash'

const MonsterView = ({monsterName}) => {
    const {battle} = useContextState()
    const monster = find(battle.monsters, {name: monsterName})
    return (
        <div>
            <Typography>{monster.name}</Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ width: '40vw' }} src={sprite} alt="" />
            </div>
            <div>
                <HpBar monster={monster} />
                <MpBar monster={monster} />
            </div>
        </div>

    )
}

export default MonsterView
