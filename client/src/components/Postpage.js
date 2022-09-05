import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "@material-ui/core";
import { useState, useEffect } from "react";



const Postpage = () => {
const { user, isAuthenticated, isLoading } = useAuth0();
const [status, setStatus] = useState(null)
const onChange = (e) => {
    setStatus(e.target.value)
    console.log(status)
}
const onSubmit = (e) => {
    e.preventDefault()

    fetch(`/api/addpost/${user.email}`, {
        method: 'POST',
        body: JSON.stringify({
            status,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        }).then(() => {
            console.log("it's working")
            console.log(status)
            setStatus('')
        });
    
}

    return (
    <Wrapper>
<form onSubmit = {onSubmit}>
    <div>
    <input value = {status} onChange = {onChange} placeholder="What's your inspiration" type= "text"></input>
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
    border: none;

}
`
export default Postpage;