import React, { useState } from "react";
import Link from 'next/link'
import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import withoutAuth from '../../hocs/withoutAuth';
import { useAuth } from '../../hocs/Auth';
import gql from 'graphql-tag'
import s from './auth.module.scss';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)  {
      token
    }
  }
`

const Login = () => {

    const [email, setEmail] = useState('testuser1@email.com')
    const [password, setPassword] = useState('abcd1234')

    const { setAuthenticated } = useAuth();
  
    const [ login, {loading, error} ] = useMutation(LOGIN, {
      onCompleted: (data) => {
        const token = data.login.token
        localStorage.setItem('token', token)
        setAuthenticated(true);
      }
    })
  
    const submit = async (event) => {
      event.preventDefault()
  
      login({ variables: { email, password } })
    }

    if (loading) return <div>Loading</div>

    if (error) return <div>Error</div>

    return (
        <div className={s["auth-wrapper"]}>
            <div className={s["auth-inner"]}>
                <form onSubmit={submit}>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input autoComplete="new-password" type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <div style={{display: 'flex', flex: 1, justifyContent: "space-between"}}>
                        <p className={s["forgot-password"]}>
                            Forgot <a href="#">password?</a>
                        </p>
                        <p className={s["forgot-password"]}>
                            Switch to <Link href="/auth/signup"><a>SignUp</a></Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withoutAuth(Login);