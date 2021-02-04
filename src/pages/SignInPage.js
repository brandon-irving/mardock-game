import { useContextState } from 'dynamic-context-provider'
import React, { useState } from 'react'
import { signInWithGoogle } from '../firebase'
import { signInWithEmailAndPasswordHandler } from '../firebase'

const SignInPage = () => {
    const { user } = useContextState()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    async function handleSubmit(e){
        await signInWithEmailAndPasswordHandler(e, email, password)
        console.log('log: user', user)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Email</label>
                <input value={email} type="email" onChange={e=>setemail(e.target.value)}/>
                </div>
                <div>
                <label>Password</label>
                <input value={password} type="password" onChange={e=>setpassword(e.target.value)}/>
                </div>
            <button type="submit">Submit</button>
            </form>      
            <p>Or sign in with google</p>     
            <button onClick={signInWithGoogle}>Google</button>
        </div>
    )
}

export default SignInPage
