import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";
import useAuth from '../../Hooks/useAuth';



const Registration = () => {
    const { signInUsingGoogle } = useAuth();
    const auth = getAuth();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setLogin] = useState(false);


    const handleRegistration = (e) => {
        e.preventDefault();

        const registerNewUser = (userEmail, userPassword) => {
            createUserWithEmailAndPassword(auth, userEmail, userPassword)
                .then(result => {
                    const user = result.user;
                    setError("");
                    verifyEmail();
                    console.log(user)
                })
                .catch(error => {
                    setError(error.message)
                })
        }

        const processLogin = (userEmail, userPassword) => {
            signInWithEmailAndPassword(auth, userEmail, userPassword)
                .then(result => {
                    const user = result.user;
                    setError("");
                    console.log(user)
                })
                .catch(error => {
                    setError(error.massage)
                })
        }

        if (userPassword.length < 6) {
            setError("Password must be 6 chracter")
            return;
        }
        if (!/(?=.*[a-z].*[A-Z])/.test(userPassword)) {
            setError("Must use 2 upper case");
            return;
        }
        // isLogin ? processLogin(userEmail, userPassword) : createNewUser(userEmail, userPassword);

        // }
        if (isLogin) {
            processLogin(userEmail, userPassword)
        }
        else {
            registerNewUser(userEmail, userPassword);
        }

    }

    const handleEmailChange = e => {
        setUserEmail(e.target.value)
    }

    const handlePassword = e => {
        setUserPassword(e.target.value)
    }

    const toggleLogin = e => {
        setLogin(e.target.checked)
    }

    const verifyEmail = () => {
        sendSignInLinkToEmail(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div>
            <h2 className="btn btn-success">Please{isLogin ? "Login" : " register"}</h2>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggleLogin} type="checkbox" label="Registration" />
                </Form.Group>
                <h4 className="text-danger">{error}</h4>
                <Button variant="primary" type="submit">
                    {isLogin ? "Login" : "Register"}
                </Button>
                <br />
                <button onClick={signInUsingGoogle} className="btn btn-success">google Sign in</button>
            </Form>
            {/* <Link to="/logIn">Already Register?</Link> */}
        </div>
    );
};

export default Registration;