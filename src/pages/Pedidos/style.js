import styled from 'styled-components';

export const Container = styled.div `

    background-color: #0A0A10;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    min-height: 100vh;

`
export const Image = styled.img `

width: 246px;
height: 354px;
align-self: center;
margin: 10px 36px 25px 36px

`


export const ContainerItens = styled.div `

    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top:50px;
    margin-left:36px;
    margin-right:36px;

`

export const Ul = styled.ul`
  width: 300px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 50px;
`;

export const ContainerPedidos = styled.li `

    width: 342px;
    height: 80px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-bottom: 5px;
    justify-content: space-around;
    display: flex;

    div {
    display: flex;
    flex-direction: column;
    max-width: 70%;
    justify-content: space-around;
    padding: 10px 0;
  }

  p {
    font-weight: 300;
    font-size: 18px;
    color: #ffffff;
  }

  p:last-child {
    font-weight: 700;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }


`




export const Paragrafos = styled.p`
    display: flex;
    flex-direction: column;
    padding-top: 13px;
    padding-bottom: 13px;
    gap: 15px;
`;