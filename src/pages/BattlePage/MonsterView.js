import React from 'react'
import HpBar from '../../common/ProgressBar/HpBar'
import MpBar from '../../common/ProgressBar/MpBar'
import sprite from '../../images/sprites/babynewt.png'
import { Button, Typography } from '@material-ui/core'
import { find } from 'lodash'
import { ArrowBack } from '@material-ui/icons'

const MonsterView = ({monsterName, battle, close}) => {
    const monster = find(battle?.monsters, {name: monsterName})
    return (
        <div>
            <Button
                onClick={close}
                startIcon={<ArrowBack />}
            >{monster.name}</Button>
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
