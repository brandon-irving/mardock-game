import { filter } from 'lodash'
import React from 'react'
import { getAllUsers } from '../../firebase'

export const useGetTargets = (excludeUser={}) => {
    const [targets, settargets] = React.useState([])
    const [loading, setloading] = React.useState(true)
async function onLoad(){
const targets = await getAllUsers()
settargets(filter(targets, target=> target.uid !== excludeUser.uid))
setloading(false)
}
React.useEffect(() => {
    onLoad()
}, [])

return [targets, loading]
}

