import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <h1>Log In</h1>
            <form>
                <input type="email" name="" id="" placeholder="Email" required />
                <br />
                <input type="password" name="" id="" placeholder="password" required />
                <br />
                <br />
                <button className="btn btn-success">google Sign in</button>
                <br />
                <Link to="/registration">New User?</Link>
            </form>
        </div>
    );
};

export default SignIn;