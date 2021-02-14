import { useState, useEffect } from 'react'
import { battles } from '../../gameData/battles'
export const useGetBattle = (battleName="") => {
    const [data, setdata] = useState({})
    async function getData(){
        const battle = battles[battleName]
        setdata(battle)
    }
useEffect(() => {
    getData()
}, [])
return data || { battle: {}}
}

