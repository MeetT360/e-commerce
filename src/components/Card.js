import React from "react";
import styled from 'styled-components';
import { UserContext } from "../UserContext";
import { useContext } from "react";
function Card(props) {
    const {user, setUser} = useContext(UserContext);
    const addToCart = () => {
        var temp = user.cartList
        temp.push({
            "id": props.id,
            "src" : props.src,
            "description" : props.description,
            "itemtype" : props.itemtype
        })

        setUser({
            loggedin : user.loggedin,
            cartList : temp
        })
    };
    const removefromCart = () => {
        var temp = user.cartList
        var index = temp.findIndex(function(o){
            return o.id === props.id;
       })
       if (index !== -1) temp.splice(index, 1);
        setUser({
            loggedin : user.loggedin,
            cartList : temp
        })
    };
    const Cardstyle = {
        display : "inline-grid",
        "border-color" : "black",
        "border-width" : "2px",
        "border-style" : "solid",
        padding: "10px",
        fontFamily: "Arial",
        width : "200px",
        height : "400px",
        margin : "10px"
      };
    const Itemimg = styled.div`
    width : inherit;
    height : 100px;
    background-image : url(${props.src});
    `
    const description = styled.p`
    font-family : "Times New Roman";
    width : inherit;
    `
    const Itemtype = styled.i`
    font-family : "Arial";
    width : inherit;
    `
    return(
        <div style={Cardstyle}>
        <Itemimg></Itemimg>
        <description>desc : {props.description}</description>
        <Itemtype>type : {props.itemtype}</Itemtype>
        {props.isCart === true ? <button onClick={removefromCart}>Remove from cart</button>:<button onClick={addToCart}>Add to cart</button>}
        
        </div>
    );
}

export default Card;