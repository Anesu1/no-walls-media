import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
    width:40%;
    margin-bottom:20px;
    max-width:140px;
    height:130px;
@media(min-width:1200px){
    max-width:160px;
    padding:5px;

}
    img{
        width:75%;
        object-fit:contain;
    }
`

function ClientDiv({image, alt}) {
  return (
    <Wrapper className='client-div'>
        <img src={`./images/client${image}`} alt={alt} />
    </Wrapper>
  )
}

export default ClientDiv