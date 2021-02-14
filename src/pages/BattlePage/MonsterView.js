import React from 'react'
import HpBar from '../../common/ProgressBar/HpBar'
import MpBar from '../../common/ProgressBar/MpBar'
import sprite from '../../images/sprites/babynewt.png'
import { useGetBattle } from '../../common/hooks/useGetBattle'

const MonsterView = () => {
const battle = useGetBattle()
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ width: '40vw' }} src={sprite} alt="" />
            </div>
            <div>
                <HpBar />
                <MpBar />
            </div>
        </div>

    )
}

export default MonsterView
