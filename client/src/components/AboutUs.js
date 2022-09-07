import React from "react";
import styled from "styled-components";

const AboutUs = () => {
    return (
        <Wrapper>
            <h1>AboutUs</h1>
            <Painting src = "./banner.jpg" />
        </Wrapper>
    );
}

export default AboutUs;

const Wrapper = styled.div`
height: 100%;
width: 100%;

`
const Painting = styled.img`
height: 800px;
width: 800px;
display: flex;
justify-content: space-around;
align-items: center;
margin: 0 25% 0 25%;
`