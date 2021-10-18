import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <h2>Please register</h2>
            <form>
                <input type="Name" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="" />
            </form>
            <Link to="/logIn">Already Register?</Link>
        </div>
    );
};

export default Registration;