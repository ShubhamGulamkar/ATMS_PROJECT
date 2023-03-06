import { useReducer, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { json, useNavigate } from 'react-router-dom';
import { login} from './slice';
export default function LoginComp(){

    const init={

        user_name : " ",
        password:" "
    }
    const reducer =(state,action)=>{

        switch(action.type)
        {
            case 'update':
                return {...state,[action.fld]:action.val}
            case 'reset':
                return init;
        }
    }
    const [info,dispatch]=useReducer(reducer,init);
    const [msg,setMsg]=useState("");
    const navigate=useNavigate();
    const reduxAction=useDispatch();

    const sendData=(e)=>{

        e.preventDefault();
        const reqOptions={

            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)
        }
        fetch("http://localhost:8080/checkLogin",reqOptions)
        .then(resp=>{
            if(resp.ok)
            {
                return resp.text();

            }
            else{
                throw new Error("server error");

            }
        })
        .then(text=>text.length?JSON.parse(text):{})
        .then(obj=>{
            if(Object.keys(obj).length===0)
                    {
                        console.log(Object.keys(obj).length)
                        setMsg("wrong uername/password")
                    }
            else
            {
                localStorage.setItem("loggedUser",JSON.stringify(obj));
                if(obj.status===0)
                {
                    alert("req has not been approved");
                    //localStorage.setItem("status",JSON.stringify(obj.status));
                    


                }
                else
                {

                    reduxAction(login());
                    console.log(obj);
                   // localStorage.setItem("loggedUser",JSON.stringify(obj));
                    if(obj.user_type_id.user_type_id===1)
                    {
                        navigate("/participant_home");
                    }
                    else if(obj.user_type_id.user_type_id===2)
                    {
                        navigate("/organizer_home");
                    }
                    else if(obj.user_type_id.user_type_id===3)
                    {
                        navigate("/admin_home");
                    }
                }
            }



        })
    .catch((error)=>alert("server error try after some time"));
       
    }

return(
    <div>
    <h1>Login page</h1>
    <form action="" method="post"> 
        <Form.Group className="mb-3" controlId="user_name" name="user_name" value={info.user_name}>
            <Form.Label>Userid:</Form.Label>
            <Form.Control type="text" placeholder="Enter uername" 
            onChange={(e)=>{dispatch({type:'update',fld:'user_name',val:e.target.value})}}
            />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="password" name="password" value={info.password}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
             onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}
            />
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={(e)=>{sendData(e)}}>
            Login
        </Button>
        <Button variant="primary" type="reset" onClick={()=>{dispatch({type:'reset'})}}>
            Clear
        </Button>
    </form>
    <p>{JSON.stringify(info)}</p>
    <p>{msg}</p>
    </div>
)

}