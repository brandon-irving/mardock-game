import { useContextState } from 'dynamic-context-provider'
import { useState, useEffect } from 'react'
import { battles } from '../../gameData/battles'
export const useGetBattle = (battleName="") => {
    const { updateContextState } = useContextState()  
    const [data, setdata] = useState({})
    async function getData(){
        updateContextState({globalLoading: true})
        const battle = battles[battleName]
        setdata(battle)
        updateContextState({globalLoading: false})

    }
useEffect(() => {
    getData()
}, [])
const desiredReturnObj = data && data.monsters ? data : { monsters: []}
return desiredReturnObj
}

