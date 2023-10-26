import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Develope} from './AllSvgs';
import { BsClipboardDataFill } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaBootstrap } from 'react-icons/fa';
import { BiLogoReact } from 'react-icons/bi';
import { SiMui } from 'react-icons/si';
import { SiVite } from 'react-icons/si';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';
 import { SiVisualstudio } from 'react-icons/si';
 import { AiFillGithub } from 'react-icons/ai';
 import { BiLogoNetlify } from 'react-icons/bi';
 import { BiLogoMongodb } from 'react-icons/bi';
 import { SiMysql } from 'react-icons/si';
 import { BiLogoNodejs } from 'react-icons/bi';
 import { SiRender } from 'react-icons/si';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
<BsClipboardDataFill width={40} height={40} />  Backend Developer
</Title>
<Description>
I value business or brand for which i'm creating, and Keep it clean, minimal and simple database.  
</Description>
<Description>
<strong>SKILLS</strong>
<ul>
  <BiLogoMongodb />&nbsp;<SiMysql />&nbsp;<BiLogoNodejs />
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
  <SiRender />
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Frontend Developer
</Title>
<Description>
I love to create design which speaks, thus i enjoy bringing new ideas to life.
</Description>
<Description>
<strong>Skills</strong>
<p>
<AiFillHtml5 />  <BiLogoCss3 /> <BiLogoJavascript /> <FaBootstrap /> <BiLogoReact /> <SiMui /> < SiVite /> < BiLogoTailwindCss /> < SiExpress />
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
< SiVisualstudio /> < AiFillGithub /> < BiLogoNetlify />
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
