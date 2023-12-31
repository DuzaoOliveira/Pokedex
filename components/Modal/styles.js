import styled from 'styled-components'

export const Container = styled.div`
margin: 0;
display: flex;
justify-content: center;
`

export const Modal = styled.div`
display: flex;
position: fixed;
background: black;
width: 696px;
border-radius: 100px;
color: white;

@media screen and (max-width: 600px) {
display:flex;
margin-left: 80px;
width: 600px;
height: 550px;
border-radius: 150px 150px 0 0;
margin-left: 189px;
}

`

export const Imagem = styled.div`
margin-left: 86px;

@media screen and (max-width: 600px) {
margin-left: 15px;
margin-top: 97px;
}
`
export const But = styled.div`
margin-left: 628px;
margin-top: 33px;
cursor: pointer;

@media screen and (max-width: 600px) {
margin-top: 43px;
margin-left: 71px;
}
`
export const Habilidades = styled.div` 
margin-left: -588px;
margin-top: 20px;
line-height: 40px;
font-size: 20px;

@media screen and (max-width: 600px) {
font-size: 30px;
margin-top: 69px;
line-height: 45px;
margin-left: -34px;
}
`
