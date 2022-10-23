import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    font-family:${props => props.theme.regular};
    color:${props => props.theme.color.blue};
    line-height:1.3;
    font-size:15px;
`

function Paragraph({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Paragraph