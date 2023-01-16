import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const HeaderContent = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    align-items:center;
    justify-content: center;

`;
const HeaderFirstParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.25rem;
  color: gray;
  font-weight: normal;
  text-transform: uppercase;
`;
const HeaderFirstTitle = styled.h1`
  font-size: 4rem;
  margin: 20px 0;
  color: #374151;
`;
const Name = styled.span`
  color: #5651E5
`;
const HeaderSecondParagraph = styled.p`
   font-size: 1rem;
   color: gray;
   width: 60%;
   margin: auto;
   line-height: 1.3em;
`;

const SocialLinksContainer = styled.div`
   display: flex;
   margin-top: 20px;
   justify-content: center;

   margin: 30px auto;
`;
const SocialLink = styled.a`
   width: 64px;
   height: 64px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 5%;
   padding: 10px;
   box-shadow: 0px 10px 30px -3px #9ca3af;
   &:hover {
     transform: scale(1.2);
     cursor: pointer;
     transition-duration: 1s;
   }

`;

const Header = () => {
  return (
    <HeaderContent>
        <div id='header'>
            <HeaderFirstParagraph>Let’s build something together</HeaderFirstParagraph>
            <HeaderFirstTitle>Hi, I’m <Name>Anis</Name> <br />A Full Stack <span>JS</span> Developer</HeaderFirstTitle>
            <HeaderSecondParagraph>I’m focused on building responsive front-end web applications integrating back-end technologies.</HeaderSecondParagraph>
            <SocialLinksContainer>
                <SocialLink href='linkedin.com' target="_blank"><FontAwesomeIcon icon={faLinkedinIn} color="#000"/></SocialLink>
                <SocialLink href='githun.com' target="_blank"><FontAwesomeIcon icon={faGithub} color="#000"/></SocialLink>
                <SocialLink href='linkedin.com'><FontAwesomeIcon icon={faEnvelope} color="#000"/></SocialLink>
            </SocialLinksContainer>
        </div>
    </HeaderContent>
  )
}

export default Header
