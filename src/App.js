import './App.css';
import {useContext, useState} from "react";
import Card from './components/Card';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import styled from "styled-components";
import { UserContext } from './UserContext';
import { UserProvider } from './UserContext';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
export {UserContext};

const mydata = require("./data/data.json");
let mycart = require("./data/cart.json");
function CardSelection(filter, items) {
  let cardlist = []
  items.data.forEach(element => {
    if (filter !== "all") {
      if (element.itemtype === filter){
        cardlist.push(<Card id = {element.id} src = {element.src} description = {element.description} itemtype = {element.itemtype}></Card>);
      }
    } else {
      cardlist.push(<Card id = {element.id} src = {element.src} description = {element.description} itemtype = {element.itemtype}></Card>);
    }
})
return cardlist
}
function App() {

  function MainPage() {
    return (
      <AppContainer>
            <FilterGutter><Filter setFilter = {setFilter} filter = {filter}></Filter></FilterGutter>
            <CardsContainer>{CardSelection(filter, mydata)}</CardsContainer>
      </AppContainer>
    );
  
  }
  function CartPage() {
    const {user, setUSer}  = useContext(UserContext);
    let cartCards = []
    user.cartList.forEach(element => {
      cartCards.push(<Card isCart = {true} id = {element.id} src = {element.src} description = {element.description} itemtype = {element.itemtype}></Card>);
    })
    if (user.loggedin) {
      return (
        <AppContainer>
            <CardsContainer >{cartCards}</CardsContainer>
      </AppContainer>
      );
    } else {
      alert("login please")
      return (
        <Navigate to = '/'/>
      )
    }
  
  }

  const [filter,setFilter] = useState("all");
  const [loggedin, toggleLogin] = useState(false)
  const [cart, setCart] = useState(mycart.data)


  const AppContainer = styled.div`
  display : flex;`
  const FilterGutter = styled.div`
  flex : 1;
  background-color : #FFF2F2;`
  const CardsContainer = styled.div`
  flex : 9;`

  return (
    <UserProvider>
    <div className="App" >
    <HashRouter>
    <Navbar setCart = {setCart} toggleLogin = {toggleLogin}></Navbar>
    <Routes>
      <Route path = '/' element={<MainPage/>}>
      </Route>
      <Route path='/cart' element={<CartPage/>}>
      </Route>
    </Routes>
    </HashRouter>
    </div>
    </UserProvider>
  );
}
export default App;
