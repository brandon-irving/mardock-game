import { useState, useEffect } from 'react'
import { getCollection } from '../../firebase'

export const useGetBattle = () => {
    const [data, setdata] = useState({})
    async function getData(){
        const data = await getCollection(['DM', 'battle'])
        setdata(data)
    }
useEffect(() => {
    getData()
}, [])
return data
}

