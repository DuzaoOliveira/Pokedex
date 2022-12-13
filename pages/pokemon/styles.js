import styled from 'styled-components'

export const Container = styled.div`
background:#d30603;
height: 100vh;
`

export const Card = styled.div`
display: flex;
position: absolute;
justify-content: center;
height: 100vh;
flex-wrap: wrap;
margin-top: 80px;
margin: 10px;

@media screen and (max-width: 600px) {
width: 500px;

}

`

export const Lista = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #fede00;
background: black;
height: 90px;

@media screen and (max-width: 600px) {
height: 150px;
font-size: 30px;
}

`

export const Voltar = styled.button`
border-radius: 30px;
width: 50px;
height: 50px;
margin-left: 20px;
border-style: none;
margin-top: 30px;
`

export const Img = styled.div`
margin-left: 24px;

@media screen and (max-width: 600px) {
margin-left: 76px;
margin-top: 86px;
}
`

export const Nomes = styled.p`
text-transform: capitalize;
text-align: center;
font-size: 30px;
color: #fede00;
margin-top: 15px;
padding: 15px;

@media screen and (max-width: 600px) {
font-size: 40px;
padding: 30px;

}

`

export const ImagemNomes = styled.div`
margin-left: 38px;
margin: 50px;
background: black;
margin: 10px;
border-radius: 150px 150px 0 0;
width: 350px;
height: 430px;

@media screen and (max-width: 600px) {
width: 450px;
height: 600px;
margin-left: 450px;
}

`







