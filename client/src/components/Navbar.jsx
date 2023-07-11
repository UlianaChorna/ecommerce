import React from 'react'
import styled from 'styled-components' 
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Container = styled.div`


`
const Wrapped = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
padding: 10px 20px;


`
const Left = styled.div`
flex:1;
display:flex;

`
const Language = styled.span`
font-size: 30px;
cursor:pointer;



`
const SearchComponent = styled.div`
 border: 0.5px solid lightgray;
 display:flex;
 align-items:center;
 margin-left:25px;
padding:5px;
height: 20px
`
const Input = styled.input`
border:none;


`
const Center = styled.div`
flex:1;
text-alight:center;
`


const Logo = styled.h1`
font-weight:bold;
font-size:70px;
display:flex;
justify-content:center;

`

const Right = styled.div`
flex:1;
display:flex;
align-item:center;
justify-content:flex-end;


`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:20px
`



const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
 
  return (
    <Container>
      <Wrapped>
<Left>
  <Language>
    EG
  </Language>
  <SearchComponent>
    <Input/> 
    <SearchIcon/>
  </SearchComponent>
</Left>
<Center>
  
  <Link to="/" style={{"textDecoration": "none","color": "black"}}> 
  <Logo>BLACK.</Logo>
  </Link>
  
 
</Center>
<Right>
<Link to="/register" style={{"textDecoration": "none","color": "black"}}> 

 <MenuItem>REGISTER</MenuItem></Link>
 <Link to="/login" style={{"textDecoration": "none","color": "black"}}> 
 <MenuItem>SING IN</MenuItem></Link>
 <Link to="/cart">
 <MenuItem>
 <Badge badgeContent={quantity} color="primary">
      <ShoppingCartOutlinedIcon/>
    </Badge>
 </MenuItem>
 </Link>
</Right>
      </Wrapped>
      
    </Container>
  )
}

export default Navbar;