import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";



import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./slice";
const init = {

    user_name: "",
    password: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.val }
        case 'reset':
            return init;
    }
}






function LoginFrom() {
        
const [user, dispatch] = useReducer(reducer, init);
const [msg,setMsg] = useState("");
const navigate = useNavigate();
const reduxAction = useDispatch();

const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(user)
            // user_name: user.user_name,
            // password: user.password
        

    }

    fetch("http://localhost:8080/checkLogin", reqOptions)
    //.then(res => console.log(res))
    //.then(resp => console.log(resp))
    .then(resp => resp.text())
    .then(text => text.length ? JSON.parse(text) : {})
    .then(obj => {
        if(Object.keys(obj).length === 0)
        {
            setMsg("Wrong UID/PWD");
        }
        else{
            if(obj.status === false)
           {
                // alert("Request has not been approved");
                setMsg("Request has not been approved")
                navigate('/')
            }
           else{
               reduxAction(login())
               localStorage.setItem("loggedUser",JSON.stringify(obj));
                if(obj.user_type_id.user_type_id === 1)
                {
                    
                    navigate("/participant_home");
                }
                else if(obj.user_type_id.user_type_id === 2)
                {
                    navigate("/organizer_home");
                }
                else if(obj.user_type_id.user_type_id === 3)
                {
                    navigate("/admin_home");
                }
                
           }
        }
    })
}

    // .then(resp => resp.text())
    


    return (
        <div className="container">
            <h3>Login Page</h3>
            <Form action="/checkLogin">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Enter user name" value={user.user_name}
                        onChange={(e) => { dispatch({ type: 'update', fld: 'user_name', val: e.target.value }) }} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password" value={user.password}
                        onChange={(e) => { dispatch({ type: 'update', fld: 'password', val: e.target.value }) }} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={(e)=>{sendData(e)}}>
                    Submit
                </Button>
                <Button variant="primary" type="reset" onClick={()=>{dispatch({type:'reset'})}} >
                    Reset
                </Button>
            </Form>

            <p>{JSON.stringify(user)}</p>
            <p>{msg}</p>

            

        </div>

    )

     }

export default LoginFrom;