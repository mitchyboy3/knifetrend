import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import Divider from 'kt-components/Divider';

const TextBanner = ({ title, text }) => (
    <Section>
      <H2>{ title }</H2>
      <Divider width={50} />
      <P>{ text }</P>
    </Section>
)

TextBanner.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default TextBanner

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  ${props => props.theme.media.desktop} {
    padding: 20px 100px;
  }
  ${props => props.theme.media.xl} {
    padding: 20px 150px;
  }
`
const H2 = styled.h2`
  ${props => props.theme.secondaryFont({})};
  color: ${props => props.theme.main};
  text-transform: uppercase;
  font-size: 36px;
  text-align: center;
  padding: 20px;
`
const P = styled.p`
  ${props => props.theme.mainFont({})};
  font-size: 16pt;
  line-height: 20pt;
  padding: 20px 30px;
  text-align: center;
`
