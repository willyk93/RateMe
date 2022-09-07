import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa"

const Ratings = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
        <Wrapper>
        
            {[... Array(5)].map((start, i)=>{
                const ratingValue = i + 1;
                return <label>
                    <input type= "radio" 
                    name = "rating" 
                    value = {ratingValue} 
                    onClick = {() => setRating(ratingValue)}
                    />
                    <FaStar className="star" size = {20} 
                    color= {ratingValue <= (hover || rating) ? "#ffc107" : "#888888"}
                    onMouseEnter =  {() => setHover(ratingValue)}
                    onMouseLeave =  {() => setHover(null)}
                    />
                        </label>
            })}
            <p>the rating is {rating}</p>
        </Wrapper>
    );
}

export default Ratings;

const Wrapper = styled.div`
height: 100%;
width: 100%;

input[type = "radio"] {
    display: none;
}

.star {
    cursor: pointer;
    transition: color 200ms;
}

`















    // const [status, setStatus] = useState(null)

    
    // const onSubmit = (e) => {
    //     e.preventDefault()
    
    //     fetch(`/api/addRating/${user.email}`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             status: status,
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         }).then(() => {
    //             console.log("it's working")
    //             console.log(status)
    //             setStatus('')
    //         });
        
    // }

    

    