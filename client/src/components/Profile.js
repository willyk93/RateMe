import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Postpage from "./Postpage";


const Profile = () => {
    
    const [userData, setuserData] = useState(null) 
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user)

    useEffect(() => {
        if (isAuthenticated) 
        {fetch(`/api/get-user/${user.email}`)
        .then(res => res.json())
        .then(data => setuserData(data.data))}
    }, [isAuthenticated])

    if (isAuthenticated) {
        console.log(userData)
    }
    return (
    
    <Wrapper>
    { userData && <>
    <h1>Profile</h1>
    <Postpage/>
    <p> {userData.bio} </p>
            <img alt ='profile banner' src = {userData.bannerSRC}/>
                
            <img alt ='profile avatar' src = {userData.avatarSRC}/>
    </>}
    </Wrapper>
    
    )}
    
    const Wrapper = styled.div`
    
    p{
        color: red;
    }
    `
    
    export default Profile;