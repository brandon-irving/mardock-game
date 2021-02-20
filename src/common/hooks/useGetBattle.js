import { useContextState } from 'dynamic-context-provider'
import { filter, find } from 'lodash'
import { useState, useEffect } from 'react'
import { getCollection } from '../../firebase'
function filterMonstersInSight(user, monsters){
    const filteredMons = filter(monsters, monster=>{
        const isInView = find(user.character?.inView, { name: monster.name}) ? true : false
        
        return isInView
    })
    
    return filteredMons
}
export const useGetBattle = (user=null) => {
    const { battle } = useContextState()
    const [loading, setloading] = useState(true)
    const [data, setdata] = useState(null)
   async function getData(){ 
        const battles = await getCollection(['DM', 'battles'])
        let battle = null
        if(battles.current.monsters){
            battle = battles.current
            if(user){
                battle.monsters = filterMonstersInSight(user, battle.monsters)
            }
        }
        setdata(battle)
        setloading(false)
    }

useEffect(() => {
    getData()
}, [])
useEffect(() => {
    if(user) {
        getData()
    }else if(battle?.monsters){
        setdata(battle)
    }
}, [battle, user])

return [data, loading]
}

