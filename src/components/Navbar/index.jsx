import React from 'react'
import styled from 'styled-components'


const HeaderContent = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px 0px;
   z-index: 1;
`;
const Container = styled.div`
  width: 90%;
  margin: auto;
`;
const AnchorLink = styled.a`
   padding: 15px;
   display: block;
   font-weight: normal;
   color: inherit;
   text-decoration: none;
   margin-left: 10px;

`;
const UnorderList = styled.ul`
   list-style: none;
   display: flex;
`;
const HeaderTitle = styled.h2`
  font-style: italic;
`;
const ListItem = styled.li`
  font-size: 1.2rem;
  font-weight: normal;
`;

const Header = styled.div`

  z-index: 4;
  box-shadow: -14px 10px 15px -3px rgba(0,0,0,0.1);

`;
const Navbar = () => {
  return (
    <Header>
        <Container>
           <HeaderContent>
            <HeaderTitle>Portfolio</HeaderTitle>
            <UnorderList>
              <ListItem><AnchorLink href='#'>Home</AnchorLink></ListItem>
              <ListItem><AnchorLink href='#about'>About</AnchorLink></ListItem>
              <ListItem><AnchorLink href='#'>Skills</AnchorLink></ListItem>
              <ListItem><AnchorLink href='#'>Projects</AnchorLink></ListItem>
              <ListItem><AnchorLink href='#'>Resume</AnchorLink></ListItem>
              <ListItem><AnchorLink href='#'>Contact</AnchorLink></ListItem>
            </UnorderList>
           </HeaderContent> 
        </Container>
    </Header>
  )
}

export default Navbar
