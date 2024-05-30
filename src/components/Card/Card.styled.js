import styled from 'styled-components';

export const Containe = styled.div`
background-color: ${(props) => (props.isHide ? 'blue' : 'black')};
width: 300px; 
&:hover {
    background-color: #fff;
}
`

export const Photo = styled.img`
width: 300px;
`