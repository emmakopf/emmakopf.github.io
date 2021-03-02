import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  // FaPaperPlane
} from 'react-icons/fa'
import styled from 'styled-components'

import { StyledHyperLink } from '../Styled'

import './style.css'

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 20px;
`

export default () => {
  return (
    <StyledFooter>
      <div className='footer-container'>
        <div className='footer-column'>
          <div className='footer-socials'>
            <StyledHyperLink
              href={'https://github.com/emmakopf'}
              target='blank'
              className='social-links'
            >
              <FaGithub className='social-media-icon' />
            </StyledHyperLink>
            <StyledHyperLink
              href={'https://www.linkedin.com/in/emmakopf/'}
              target='blank'
              className='social-links'
            >
              <FaLinkedin className='social-media-icon' />
            </StyledHyperLink>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}