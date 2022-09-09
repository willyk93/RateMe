import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";



const PaintsDetails = () => {

const [userData, setuserData] = useState(null) 
const { profileId } = useParams()
useEffect(() => {
    // if (isAuthenticated) 
    {fetch(`/api/get-painting/${profileId}`)
    .then(res => res.json())
    .then(data => setuserData(data.data))}


    //New fetch for a get request

}, [])

console.log(userData)

// if (isAuthenticated) {
//     console.log(userData)
// }
return (

<Wrapper>

<Painting src = {`${userData.paintSRC}`}/>


</Wrapper>
)
    };


const Wrapper = styled.div`
`
const Painting = styled.img`
height: 300px;
width: 300px;
margin: 0 80% 0 0;
`

export default PaintsDetails;






