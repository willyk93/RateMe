import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState, useContext } from "react";
import Postpage from "./Postpage";
import { useParams } from "react-router";
import Ratings from "./Ratings";
import {CurrentUserContext} from "./CurrentUserContext";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";



const Profile = () => {
    const {toggle, setToggle} = useContext(CurrentUserContext)
    const [userData, setuserData] = useState(null) 
    // const { user, isAuthenticated, isLoading } = useAuth0();
    // console.log(user)
    const { profile } = useParams()

    useEffect(() => {
        // if (isAuthenticated) 
        {fetch(`/api/get-user/${profile}`)
        .then(res => res.json())
        .then(data => setuserData(data.data))}

        //New fetch for a get request

    }, [toggle])



    // if (isAuthenticated) {
        // console.log(userData)
    // }
    return (
    
    <Wrapper>
    { userData && <>
    
    <Header>
            <Banner alt ='profile banner' src = {userData.bannerSRC}/>
            <Propfilepic>
                <img alt ='profile avatar' src = {userData.avatarSRC}/>
            </Propfilepic>

            <Name className="displayname">
                <div>{userData.name}</div>
            </Name>
            <p> {userData.bio} </p>
            <Link to = {`/profile/${userData._id}`}>
                <Button>Edit</Button>
            </Link>
    </Header>
    <Postpage/> 
    
    {userData.Paintings.map((element,index) => {
    console.log(userData)
            return (
            <PaintingContainer> 
                        {element.paintSRC ? 
                    <PaintingPost>
                        <PaintingColumn>
                            <Painting src = {`${element.paintSRC}`}/>
                            <p>{`${element.paintName}`}</p>
                        </PaintingColumn>

                        <PaintingColumn>
                            <h3>{`${element.description}`}</h3>
                            {element.paintSRC && userData && <p>the Average rating is :<strong>{userData.rateArray[index][element._id]} </strong></p>}
                            {/* <Ratings/> */}
                            <Link to = {`/profile/${userData._id}/${element._id}`}>
                            <Button>Edit</Button>
                            </Link>
                        </PaintingColumn>
                        

                    </PaintingPost>
                        : 
                    <PaintingPost>
                        <PaintingColumn>
                            <DescriptionContainer>
                                <p>{`${element.paintName}`}</p> 
                            </DescriptionContainer>
                        
                            <p>{`${element.paintName}`}</p>
                        </PaintingColumn>

                        <PaintingColumn>
                            <h3>{`${element.description}`}</h3>
                            <p>Average rating: <strong>{userData.rateArray[index]}</strong></p>
                            {/* <Ratings/> */}
                            <Link to = {`/profile/${userData._id}/${element._id}`}>
                            <Button>Edit</Button>
                            </Link>
                        </PaintingColumn>
                    </PaintingPost> 
                        }
            </PaintingContainer>
                )
            })}

    </>}
    
    </Wrapper>
    
    )}
    
const Wrapper = styled.div`
height: 100%;
width: 100%;
`

const Header = styled.header`


`
const Banner = styled.img`
height: 400px;
width: 100%;

`

const Propfilepic = styled.div`
display: flex;
gap: 650px;


img{
width: 200px;
height: 200px;
border-radius: 50%;
margin: -100px 0 0 20px;
}
`
const Name = styled.div`
display: flex;
flex-direction: column;

div{
font-weight: bold;
font-size: 25px;
}
`
const PaintingContainer = styled.div`
display: flex;
margin: 0 50% 0 0;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Painting = styled.img`
height: 300px;
width: 300px;
margin: 0 80% 0 0;
`
const DescriptionContainer = styled.div`
height: 300px;
width: 300px;
background-color: black;
p {
    font-size: 30px;
    color:white;

}
`

const PaintingPost = styled.div`
display: flex;
flex-direction: row;
`

const PaintingColumn = styled.div`
display: flex;
flex-direction: column;

Button{
    width: 125px;
    height: 40px;
    margin: 25px 0 50px 0;
    border-radius: 25px;
    background-color: #1DA1F2;
    margin-left: 20px;
}
`
    
    export default Profile;