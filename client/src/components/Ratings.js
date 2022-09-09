import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router";

const Ratings = ({_id}) => {

    // console.log(_id)
    // const { _id } = useParams()
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)


useEffect(() => {
    if (isAuthenticated) 
    {fetch(`/api/get-rating/${_id}/${user.email}`)
    .then(res => res.json())
    .then(data => setRating(data.data))}


    //New fetch for a get request

}, [isAuthenticated])

const handleRating = (ratingValue) => {
    setRating(ratingValue)

    fetch(`/api/set-rating/${_id}/${user.email}`, {
        method: 'POST',
        body: JSON.stringify({
            rating: ratingValue 
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        }).then(() => {
            // console.log("it's working")
    
        });

}
    return (
        <Wrapper>
        
            {[... Array(5)].map((start, i)=>{
                const ratingValue = i + 1;
                return <label>
                    <input type= "radio" 
                    name = "rating" 
                    value = {ratingValue} 
                    onClick = {() => handleRating(ratingValue)}
                    //post request
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

    

    