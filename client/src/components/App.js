import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeFeed from "./HomeFeed";
import Profile from "./Profile";
import styled from 'styled-components';
import Navbar from "./Navbar";
import Postpage from "./Postpage";
import AboutUs from "./AboutUs";
import EditProfile from "./EditProfile";
import EditProfileUser from "./EditProfileUser"

// import GlobalStyles from "./GlobalStyles";
// import Typeahead from "./Typeahead";
// import { users } from "./data";


const App = () => {


  return ( 
    <Wrapper>
    <BrowserRouter>
    
    <Navbar/>
    
    <Routes>
      <Route exact path ='/'element={<HomeFeed/>}/>
      <Route exact path ='/postpage'element={<Postpage/>}/>
      <Route exact path ='/:profile'element={<Profile/>}/>
      <Route exact path ='/AboutUs'element={<AboutUs/>}/>
      <Route exact path ='/profile/:profileId/:paintingId'element={<EditProfile/>}/>
      <Route exact path ='/profile/:_id'element={<EditProfileUser/>}/>       
    </Routes>

    </BrowserRouter>

    {/* <GlobalStyles />
      <Typeahead
      suggestions = {users.Paintings}
      handleSelect = {(suggestion) => {
      window.alert(suggestion)
      }}
      /> */}
    </Wrapper>
  
  );
}

const Wrapper = styled.div`
background-image: url("./background1.jpg");
width: 100%;
height: 100%;
margin: 0;
background-position: center;
background-repeat: no-repeat;
opacity: 1;

`

export default App;

