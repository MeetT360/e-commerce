import React from "react";
import styled from 'styled-components';
import { useContext } from "react";
import { UserContext } from '../UserContext';
import { UserProvider } from '../UserContext';
import { UserConsumer } from '../UserContext';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";

function Navbar(props) {  
    const [title, setTitle] = useState('E-commerce')
    const Login = styled.button`
    height : 20px;
    background-color : white;`
    return (
            // <UserProvider value = {
            //     {loggedin : props.loggedin,
            //     cart : props.cart}}>
                <NavContainer toggleLogin = {props.toggleLogin} setCart = {props.setCart}></NavContainer>
            // </UserProvider>
    );
}

function NavContainer(props) {
    const navigate = useNavigate();
    const {user, setUser}  = useContext(UserContext);

    const NavContainerStyle = {
    "height" : "50px",
    "background-color" : "#F47C7C"}
    

    const LoginButton = styled.button`
    height : 20px;`

    const handleAuth = () => {
        if (user.loggedin){
            console.log(user)
            setUser(
                {loggedin : false,
                cartList : user.cartList}
            )
        }else {
            setUser(
                {loggedin : true,
                cartList : user.cartList}
            )
        }
    }

const gotoCart = () => {
    if (user.loggedin) {
        navigate('/home/cart');
    }
}

const [title, setTitle] = useState('E-commerce')
const Title = styled.div`
display : inline-block;
color : white;
height : 20px;
font-size : 25px;
padding : 5px;
`

const LanguageButton = styled.button`
background-color : #FFF2F2;
border-style : solid;
border-color: white;
border-radius : 5px;
margin : 4px;`

const CartMenu = styled.div`
display : inline-block;
position : absolute;
right : 20px;
top : 10px;
color : white;`

    return(
        <div style = {NavContainerStyle}>
            <Title>
                {title}
                <LanguageButton onClick={() => setTitle('ई-व्यापार')}>Hindi</LanguageButton>
                <LanguageButton onClick={() => setTitle('ઈ-વાણિજ્ય')}>Gujrati</LanguageButton>
                <LanguageButton onClick={() => setTitle('ई-वाणिज्य')}>Marathi</LanguageButton>
                <LanguageButton onClick={() => setTitle('E-commerce')}>English</LanguageButton>
            </Title>
            <CartMenu>
            {user.loggedin ? 
            <div>
                <span>Hi Meet, has {user.cartList.length} items</span>
                <button onClick={gotoCart}>Cart</button>
                <LoginButton onClick={handleAuth}>Logout</LoginButton>
            </div> : 
            <div>
                <span>Cart has {user.cartList.length} items</span>
                <LoginButton onClick={handleAuth}>Login</LoginButton>
            </div>
                }
            </CartMenu>
        </div>
    )
}


export default Navbar