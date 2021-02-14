import { useState, useEffect } from 'react'
import { getCollection } from '../../firebase'
import { battles } from '../../gameData/battles'
export const useGetBattle = () => {
    const [data, setdata] = useState({})
    async function getData(){
        const {current} = await getCollection(['DM', 'battles'])
        const battle = battles[current]
        setdata(battle)
    }
useEffect(() => {
    getData()
}, [])
return data || { battle: {}}
}

