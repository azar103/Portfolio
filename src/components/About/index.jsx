import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
  width: 90%;
  margin: auto;
`;
const SectionAbout = styled.div`
  padding: 20px 0;
`;
const SecondHeader = styled.div`
   font-size: 1.2rem;
   color: #6051E5;
   text-transform: uppercase;
   margin-bottom: 5px;
`;
const ThirdHeader = styled.h3`
  font-size: 30px;
`;
const AboutDescription = styled.p`
   font-size: 20px;
   margin: 20px 0;
`;
const SectionContent = styled.div`
   display: flex;
`;
const SectionContentLeft = styled.div`
 flex: 2;
`;
const SectionContentRight = styled.div`
 flex: 1;
`;

const About = () => {
  return (
    <SectionAbout id='about'>
        <Container>
           <SectionContent>
                <SectionContentLeft>
                    <SecondHeader>About</SecondHeader>
                    <ThirdHeader>Who I am</ThirdHeader>
                    <AboutDescription>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos placeat quidem tempora natus ab, suscipit, quibusdam voluptatem, consequuntur dolorem incidunt adipisci autem cupiditate corporis rem inventore deserunt saepe ipsam quaerat.
                    </AboutDescription>
                </SectionContentLeft>
                <SectionContentRight>
                    image
                </SectionContentRight>
            </SectionContent>            
        </Container>
    </SectionAbout>
  )
}

export default About
