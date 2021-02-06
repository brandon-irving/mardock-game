import React, { useState } from 'react'
import { createUserWithEmailAndPasswordHandler } from '../firebase'

const SignUpPage = () => {
    const [email, setemail] = useState('')
    const [displayName, setdisplayName] = useState('')
    const [password, setpassword] = useState('')
    async function handleSubmit(e){
        const user = await createUserWithEmailAndPasswordHandler(e, {displayName, email, password})
        console.log('log: Manual User Signup', user)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Display Name</label>
                <input value={displayName} type="text" onChange={e=>setdisplayName(e.target.value)}/>
                </div>
                <div>
                <label>email</label>
                <input value={email} type="email" onChange={e=>setemail(e.target.value)}/>
                </div>
                <div>
                <label>Password</label>
                <input value={password} type="password" onChange={e=>setpassword(e.target.value)}/>
                </div>
            <button type="submit">Submit</button>
            </form>
           
        </div>
    )
}

export default SignUpPage