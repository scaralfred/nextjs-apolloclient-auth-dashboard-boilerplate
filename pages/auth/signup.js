import React, { Component } from "react";
import Link from 'next/link'
import s from './auth.module.scss';

const SignUp = () => {

    return (
        <div className={s["auth-wrapper"]}>
            <div className={s["auth-inner"]}>
                <form>
                    <h3>Sign Up</h3>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className={s["forgot-password"]}>
                        Already registered <Link href="/auth/login"><a>sign in?</a></Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;