import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import {CurrentUserContext} from "./CurrentUserContext";
import { useAuth0 } from "@auth0/auth0-react";


const HomeFeed = () => {
const { user, isAuthenticated, isLoading } = useAuth0();
const {toggle, setToggle} = useContext(CurrentUserContext)
const [value, setValue] = useState('');
const [painting, setPainting] = useState(null);
const [filteredPainting, setfilteredPainting] = useState([])


useEffect(() => {

    fetch("/api/get-paintings")
    .then(res => res.json())
        .then((data) => {
        setPainting(data.data);
        setfilteredPainting(data.data)
        
        })
    }, [toggle])
    const handleChange = (element) => {
        setValue(element.target.value)
        // const loggedIn = element.email
        const newPainting = painting.filter((art) => {
            console.log(element.target.value)
            console.log(art.paintName)
            return art.paintName.toLowerCase().includes(element.target.value.toLowerCase());
        })          
        setfilteredPainting(newPainting)
    }
    if (filteredPainting) {
        console.log(filteredPainting)
    }
    
    return (

    
        <Wrapper>
            <InputField
                type='text'
                value={value}
                onChange={handleChange}
                
            />
            <PaintingGrid>
                {filteredPainting.length && filteredPainting.map((element) => {
                return (
                    <PaintingContainer> 
                        
                        <>
                        <Painting img={`${element.paintSRC}`}> 
                            <p>{`${element.description}`}</p>
                        </Painting>

                        <Link
                            to={`/${element.email}`}
                            >
                            {element.name}
                        </Link>

                        <p>{`${element.paintName}`}</p>
                        {isAuthenticated && user.email === element.email && <Ratings/>}
                        </>
                        
                    </PaintingContainer>
                )
            })}
            </PaintingGrid>
        
        </Wrapper>
        
        )

}




const Wrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


` 
const PaintingGrid = styled.div`
display: grid;
grid-template-columns: auto auto auto;
`
const PaintingContainer = styled.div`
display: flex;
margin: 0 20px 20px 0;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Painting = styled.div`
height: 300px;
width: 300px;
background-image: url(${props => props.img});
background-size: cover;
border: 1px solid black;
p {
    display:none;
}
:hover {
    filter: brightness(25%);

}
:hover p{
    display:block;
    filter: brightness(auto);
    color: white;
}
`
const InputField = styled.input`
height: 50px;
width: 400px;
border-radius: 20px;
margin: 20px;
font-size: 30px;
font-weight: 100px;
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


export default HomeFeed;