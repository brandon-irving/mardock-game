import { useContextState } from 'dynamic-context-provider'
import { useState, useEffect } from 'react'
import { getCollection } from '../../firebase'

export const useGetBattle = () => {
    const { battle } = useContextState()
    const [loading, setloading] = useState(true)
    const [data, setdata] = useState({})
   async function getData(){ 
        const battles = await getCollection(['DM', 'battles'])
        const battle = battles.current.monsters ? battles.current : null
        setdata(battle)
        setloading(false)
    }

useEffect(() => {
    getData()
}, [])
useEffect(() => {
    setdata(battle?.monsters ? battle : null)
}, [battle])

return [data, loading]
}

