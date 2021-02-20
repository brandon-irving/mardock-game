import { useContextState } from 'dynamic-context-provider'
import { useState, useEffect } from 'react'
import { getCollection } from '../../firebase'

export const useGetBattle = (battleName="") => {
    const { updateContextState } = useContextState()  
    const [data, setdata] = useState({})
   async function getData(){
        
        const battles = await getCollection(['DM', 'battles'])
        const battle = battles.current
        console.log('log: battle',battle)
        setdata(battle)

    }
useEffect(() => {
    getData()
}, [])
const desiredReturnObj = data && data.monsters ? data : { monsters: []}
return desiredReturnObj
}

