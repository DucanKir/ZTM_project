import React from 'react';

import './sign-in-and-sign-up.styles.scss';
import SingnIn from '../../components/sign-in/sign-in.component';
import SingnUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SingnIn />
        <SingnUp />
    </div>
)

export default SignInAndSignUpPage;