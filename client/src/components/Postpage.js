import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "@material-ui/core";
import { useState, useEffect, useContext } from "react";
import {CurrentUserContext} from "./CurrentUserContext";



const Postpage = () => {
const { user, isAuthenticated, isLoading } = useAuth0();
const [status, setStatus] = useState(null)
const [status2, setStatus2] = useState(null)
const {toggle, setToggle} = useContext(CurrentUserContext)
// console.log(toggle)
const onChange = (e) => {
    setStatus(e.target.value)
    console.log(status)
}
const onChange2 = (e) => {
    setStatus2(e.target.value)
    console.log(status)
}
const onSubmit = (e) => {
    e.preventDefault()

    fetch(`/api/addpost/${user.email}`, {
        method: 'POST',
        body: JSON.stringify({
            status: status,
            status2: status2, 
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        }).then(() => {
            console.log("it's working")
            console.log(status)
            setStatus('')
            setStatus2('')
            setToggle(!toggle)
        });
    
}

    return (
    <Wrapper>
<form onSubmit = {onSubmit}>
    <div>
    <input required value = {status} onChange = {onChange} placeholder="What's your inspiration" type= "text"></input>
    <input required value = {status2} onChange = {onChange2} placeholder="Give it a name" type= "text"></input>
    </div>
    <Button type = "submit">Post</Button>
</form>
    </Wrapper>
    );
}



const Wrapper = styled.div`
margin: 0;

Button{
    width: 125px;
    height: 40px;
    margin: 25px 0 50px 0;
    border-radius: 25px;
    background-color: #1DA1F2;
    margin-left: 20px;
}

input {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: 1;
    border-radius: 25px;
    height: 60px;
    width: 400px;

}
`
export default Postpage;