import React from "react";
import styled from 'styled-components';
import {useState} from "react";

function getFilterRow(value, filter, setFilter){
    const FilterRow = styled.div`
    height : 30px; `
    const RadioButton = styled.input`
    color : blue;`
    const handleSelectChange = event => {
        const value = event.target.value;
        setFilter(value);
      };
      return (
    <FilterRow><RadioButton
        type = "radio"
        value = {value}
        name = "filter-button"
        onChange={event => handleSelectChange(event)}
        checked = {filter === value}></RadioButton>
        {value}</FilterRow>)
}
function Filter(props) {

    const FilterContainer = styled.div`
    display : inline-block;
    position : sticky;
    left : 10px;
    top : 10px;
    border-style: solid;
    border-radius: 10px;
    border-width: 2.5px;
    border-color: white;
    background-color : #F47C7C;
    color: white;
    padding: 10px;`

    return(
        <FilterContainer>
        <h1>Filter</h1>
        {getFilterRow("all", props.filter, props.setFilter)}
        {getFilterRow("mobile", props.filter, props.setFilter)}
        {getFilterRow("toys", props.filter, props.setFilter)}
        {getFilterRow("bottle", props.filter, props.setFilter)}
        </FilterContainer>
        
    );
}
export default Filter;