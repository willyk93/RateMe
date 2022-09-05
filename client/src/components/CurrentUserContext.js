import React from "react";
import {createContext, useState} from "react";
import { useEffect } from "react";

export const CurrentUserContext = createContext();
export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = useState('loading');

    // useEffect (() => {
    //     fetch('/api/me/profile')
    //     .then(res => res.json())

    //     .catch((error) => {
    //         console.log(error)
    //         setStatus("error")
    //     })
    //     }, [])
    
        return (
        <CurrentUserContext.Provider 
        value={{ 
            currentUser, 
            status,
            setStatus 
            }}>
            {children}
        </CurrentUserContext.Provider>
        );
    };

    export default CurrentUserContext
