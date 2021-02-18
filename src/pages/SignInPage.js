import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useContextState } from 'dynamic-context-provider'
import { signInWithGoogle } from '../firebase'
import { signInWithEmailAndPasswordHandler } from '../firebase'
import { MuiFormGenerator } from 'mui-form-generator'
import theme from '../core/theme';
import { useHistory } from 'react-router-dom';
import BasicRoot from '../common/BasicRoot';
import SignUpPage from './SignUpPage'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const BluePrint = () => {
    return ({
        Rows: [
            {
                Cols: [
                    {
                        Input: {
                            id: 'email',
                            name: 'email',
                            type: 'email',
                            label: 'Email',
                            variant: 'filled',

                        }
                    },
                ]
            },
            {
                Cols: [
                    {
                        Input: {
                            id: 'password',
                            name: 'password',
                            type: 'password',
                            label: 'Password',
                            variant: 'filled',

                        }
                    },
                ]
            },
            {
                Cols: [
                    {
                        Button: {
                            id: 'submit',
                            name: 'submit',
                            type: 'submit',
                            label: 'Sign in',
                            fullWidth: true,
                            disabled: false,
                            variant: 'outlined',
                        }
                    },
                ]
            },
           

        ]
    })
}
function validate(values) {
    const errors = {}
    Object.keys(values).forEach(field => {
        const isEmpty = (!values[field]) || (typeof values[field] === 'string' && !values[field].length)
        if (isEmpty) {
            errors[field] = 'required'
        }
    })
    return errors
}
export default function SignIn() {
    const { updateContextState } = useContextState()
    const history = useHistory()
    const classes = useStyles();
    const initialValues = { email: '', password: '' }
    const [signUp, setsignUp] = useState(false)
    async function handleSubmit(values) {
        updateContextState({globalLoading: true})
        const user = await signInWithEmailAndPasswordHandler(values.email, values.password)
        const route = user.character ? '/' : 'create'
        history.replace(route)
        updateContextState({globalLoading: false})

    }
    async function handleGoogleSignIn(e) {
        updateContextState({globalLoading: true})
        const user = await signInWithGoogle()
        const route = user.character ? '/' : 'create'
        console.log('log: route', route)
        history.replace(route)
        updateContextState({globalLoading: false})

    }
    function goToSignUp(){
        setsignUp(true)
    }
    function goToSignIn(){
        setsignUp(false)
    }
    if(signUp){
        return <SignUpPage goToSignIn={goToSignIn} />
    }
    return (
        <BasicRoot>
               <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
            </div>
            <Typography align="center" component="h1" variant="h5">
                Sign In
            </Typography>
        
        <MuiFormGenerator
            theme={theme}
            manualValidate={validate}
            blueprint={BluePrint({ handleGoogleSignIn })}
            initialValues={initialValues}
            handleSubmit={handleSubmit}
        />
     <Grid container>
    <Grid item xs>
        <Button onClick={handleGoogleSignIn}>
        Google sign in
        </Button>
    
    </Grid>
    <Grid item>
    <Button onClick={goToSignUp}>
        Sign Up
        </Button>
     
    </Grid>
  </Grid>
    </BasicRoot>
    );
}