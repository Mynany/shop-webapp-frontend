import React from 'react'

import './signin-and-signup.style.scss'

import Signin from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SigninandSignupPage = () => (
    <div className="signin-and-signup">
        <Signin />
        <SignUp />
    </div>
)

export default SigninandSignupPage;