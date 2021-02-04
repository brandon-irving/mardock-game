import React from 'react'
import { useContextState } from 'dynamic-context-provider'
import { updateDatabase, writeToDatabase, removeFromDatabase, readTableFromDatabase } from '../firebase/CRUD'
// import { signInWithGoogle } from '../firebase'
// import { signInWithEmailAndPasswordHandler } from '../firebase'

const CrudPage = () => {
    const { user, users, updateContextState } = useContextState()

    async function handleWrite(e){
        e.preventDefault()
        console.log('log: user', user)
        writeToDatabase(user)
    }

    async function handleUpdate(e){
        e.preventDefault()
        console.log('log: user', user)
        updateDatabase(user)
    }
    async function handleRemove(e){
        e.preventDefault()
        console.log('log: user', user)
        removeFromDatabase(user)
    }
    async function handleRead(e){
        e.preventDefault()
        readTableFromDatabase(updateContextState)

    }
    console.log('log: users', users)

    return (
        <div>
            <button onClick={handleRead}>Read</button>
            <button onClick={handleWrite}>Write</button>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default CrudPage
