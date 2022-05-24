import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem
z-index: 3;

&>*:not(:last-child){
  margin: 0.5rem 0;
}
`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.theme.text}
`

const SocialSubComp = () => {
  return (
    <Icons>
      <div>
        <a style={{color: 'inherit'}} target="_blank" rel="noreferrer noopener" href="https://github.com/javim7">
          <Github width={25} height={25} fill ='currentColor' />
        </a>
      </div>
      <div>
        <a style={{color: 'inherit'}} target="_blank" rel="noreferrer noopener" href="https://github.com/javim7">
          <Twitter width={25} height={25} fill ='currentColor' />
        </a>
      </div>
      <div>
        <a style={{color: 'inherit'}} target="_blank" rel="noreferrer noopener" href="https://github.com/javim7">
          <Facebook width={25} height={25} fill ='currentColor' />
        </a>
      </div>
      <div>
         <a style={{color: 'inherit'}} target="_blank" rel="noreferrer noopener" href="https://github.com/javim7">
          <YouTube width={25} height={25} fill ='currentColor' />
        </a>
      </div>
      <Line />
    </Icons>
  )
}

export default SocialSubComp