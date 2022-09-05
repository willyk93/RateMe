import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeFeed from "./HomeFeed";
import Profile from "./Profile";
import styled from 'styled-components';
import Navbar from "./Navbar";
import Postpage from "./Postpage";
// import GlobalStyles from "./GlobalStyles";
// import Typeahead from "./Typeahead";


const App = () => {


  return ( 
    <Wrapper>
    <BrowserRouter>
    
    <Navbar/>
    
    <Routes>
      <Route exact path ='/'element={<HomeFeed/>}/>
      <Route exact path ='/postpage'element={<Postpage/>}/>
      <Route exact path ='/:profile'element={<Profile/>}/>   
    </Routes>

    </BrowserRouter>

    {/* <GlobalStyles />
      <Typeahead
      suggestions = {data.books}
      handleSelect = {(suggestion) => {
      window.alert(suggestion)
      }}
      /> */}
    </Wrapper>
  
  );
}

const Wrapper = styled.div`
background-image: url("./background1.jpg");
width: 100vw;
height: 100vh;
margin: 0;
background-position: center;
opacity: 1;

`

export default App;

