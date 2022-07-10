import React, {useEffect, useState} from 'react';
export const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const defaultValues = {
        loggedin : false,
        cartList : []
    }
    const localUserStored = JSON.parse(window.localStorage.getItem("user"))
    if (localUserStored !== null) {
        defaultValues.loggedin = localUserStored.loggedin
        defaultValues.cartList = localUserStored.cartList
    }
    const[user, setUser] = useState(defaultValues)
    useEffect(()=>{
        return () => {window.localStorage.setItem("user", JSON.stringify(user))}
    }, [user])
    return(
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
};

export const UserConsumer = UserContext.Consumer;