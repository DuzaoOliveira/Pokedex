import styled from 'styled-components'

export const Container = styled.div`
background-image: url('https://wallpapers.com/images/hd/pokeballs-pokemon-4k-rsoj9edswmcle931.jpg');
background-repeat: no-repeat;
height: 100vh;
margin: 0;
padding: 0;
width: 100%;

@media screen and (max-width: 600px) {
background-image: url(https://papeldeparede.club/wp-content/uploads/2019/02/Pokemon-5.jpg);

}
`
export const InputButt = styled.div`
display: flex;
justify-content: center;
`

export const BotaoB = styled.button`
border-style: none;
font-size: 15px;
height: 30px;
padding: 5px;
border-radius: 0px 10px 0px 0px;
background: #fdcb08;
margin-top: 340px;
`

export const InputI = styled.input`
width: 300px;
height: 30px;
font-size: 15px;
padding: 5px;
font-style: oblique;
border-style: none;
border-radius: 10px 0px 0px 0px;
background: #d5dcd6;
color: #111315;
margin-top: 340px;
`

export const All = styled.button`
width: 356px;
border-style: none;
margin-top: 370px;
margin-left: -356px;
height: 36px;
border-radius: 0px 0px 10px 10px;
background: #314545;
color: #fff;
`