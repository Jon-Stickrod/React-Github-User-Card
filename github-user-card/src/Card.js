import React from 'react';
import styled from 'styled-components';

const Main = styled.section`
display: flex;
margin: auto 0%;
flex-direction: column;
align-items: center;

`

const Box = styled.div`
align-items:center;
color:#00263b;
max-width: 50%;
height: auto;
padding: 2%;
background-color: #00a1ab;
border-radius: 8px;
box-sizing: border-box;
margin: 20px 0;
display: flex;
flex-direction: column;
allign-items: center;
`
const Img = styled.img`
width: 10rem;
height: auto;
`
export default function Card(props){
    return(
        <Main className="Main">
            <Box>
                <Img src = {props.userImg}/>
                <h1>{props.name}</h1>
                <h2>{props.username}</h2>
                <a href = "https://github.com/Jon-Stickrod">{props.profile}</a>
                <h4>Followers {props.followers}</h4>
                <h4>Folowing  {props.following}</h4>
                <p>{props.bio}</p>
            </Box>
        </Main>

    )
}