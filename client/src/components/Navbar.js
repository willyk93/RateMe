import React, { useState, useEffect } from 'react';
import {Button} from "@material-ui/core";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <Wrapper>
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' onClick={closeMobileMenu}>
            
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? FaTimes : FiMenu} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
                {<Link
                    to='/AboutUs'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    About Us
                </Link>}
                </li>

                <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
                
                </li>
                

                <li className='nav-item'>
                {isAuthenticated && <Link
                    to={`/${user.email}`}
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    Profile
                </Link>}
                </li>

            </ul>
            {! isAuthenticated && <Button onClick={() => loginWithRedirect()}>SIGN IN</Button>}
            {isAuthenticated && <Button onClick={() => logout({ returnTo: window.location.origin })}>SIGN OUT</Button>}
            </div>
        </nav>
        </Wrapper>
    );
}

export default Navbar;







const Wrapper = styled.div`

.navbar {
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    }

    .navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    max-width: 1500px;
    }


    .nav-menu {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
    }

    .nav-item {
    height: 80px;
    }

    .nav-links {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    }

    Button{
    width: 125px;
    height: 40px;
    margin: 60px 0 50px 0;
    border-radius: 25px;
    background-color: lightblue;
    color: #fff;

}


    .nav-links-mobile {
    display: none;
    }

    .menu-icon {
    display: none;
    }

    @media screen and (max-width: 960px) {
    .NavbarItems {
        position: relative;

            .desktop-nav {
        display: none;
    
        }  
        .mobile-nav {
            display:block;
        
        }
    }

    /* .nav-menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;
    } */
/* 
    .nav-menu.active {
        background: #242222;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
    } */

    /* .nav-links {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
    } */

    /* .nav-links:hover {
        background-color: #fff;
        color: #242424;
        border-radius: 0;
    } */

    /* .navbar-logo {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(25%, 50%);
    } */

    /* .menu-icon {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    } */


    /* .nav-links-mobile {
        display: block;
        text-align: center;
        margin: 2rem auto;
        border-radius: 4px;
        width: 80%;
        text-decoration: none;
        font-size: 1.5rem;
        background-color: transparent;
        color: #fff;
        padding: 14px 20px;
        border: 1px solid #fff;
        transition: all 0.3s ease-out;
    } */

    /* .nav-links-mobile:hover {
        background: #fff;
        color: #242424;
        transition: 250ms;
    } */

}
`










// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import {FiUser, FiBell, FiHome} from "react-icons/fi";
// import { useState } from "react";
// // import { useContext } from "react";
// // import {CurrentUserProvider} from './CurrentUserContext';
// import {Button} from "@material-ui/core";



// const Navbar = () => {
//     const [click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)
// // const {currentUser} = useContext(CurrentUserProvider);
//     return (
    
//     <Wrapper>
//         <nav>
//         <LinkContainer>
//             <NavLink exact={true} className ="linkstyle" to = "/">
//             <FiHome size = {20}/>
//             Home
//             </NavLink>

//             <NavLink className ="linkstyle" to = "/:profileId">
//             <FiBell size = {20}/>
//             Notifications
//             </NavLink>


//             <NavLink className ="linkstyle" to = "/profile">
//             <FiUser size = {20}/>
//             Profile
//             </NavLink>

            

//             <Button>Sign In</Button>

//             </LinkContainer>
//         </nav>
        

//     </Wrapper> 

//     );
//     }







// const Wrapper = styled.div`
// display: flex;
// margin-top: 50px;
// border-right: 1px solid grey;
// margin: 0 25px 0 0;

// `
// const LinkContainer = styled.div`
// display:flex;
// gap: 25px;
// padding: 0 50px 0 25px;



// Button{
//     width: 125px;
//     height: 40px;
//     margin: 0 0 50px 0;
//     border-radius: 25px;
//     background-color: #1DA1F2;
// }
// .NavLink{
// text-decoration: none;
// height: 20px;
// font-weight: bold;
// margin: 10px;
// }


//     :hover{
//         background-color: #1DA1F2;
//         border-radius: 30px;
//     }
// `
// export default Navbar;