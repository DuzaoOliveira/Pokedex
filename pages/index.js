import React, { useEffect, useState } from 'react';
import axios from "axios";
import Modal from '../components/Modal';
import Head from 'next/head';
import * as S from '../styles/styled'


function Home() {
  const [resposta, setResposta] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('')

  const pokemonGo = (name) => {
    setIsOpen(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((preview) => {
        setResposta(preview.data);
      })
  }

  return (
    <S.Container>

      <Head>
        <title>Pokémon</title>
        <meta name="description" content="Pokémon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {resposta &&
        <>
          <Modal
            nome={resposta?.name}
            tipo={resposta.types && resposta?.types[0]?.type?.name}
            hp={resposta.stats && resposta?.stats[0].base_stat}
            ataque={resposta.stats && resposta?.stats[1].base_stat}
            defesa={resposta.stats && resposta?.stats[2].base_stat}
            ataqueEspecial={resposta.stats && resposta?.stats[3].base_stat}
            defesaEspecial={resposta.stats && resposta?.stats[4].base_stat}
            velocidade={resposta.stats && resposta?.stats[5].base_stat}
            imagem={resposta?.sprites?.other["official-artwork"]?.front_default}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </>
      }

      {Object.values(resposta).map((item) => {
        <p>{item?.name}</p>;
      })}

      <S.InputButt>
        <S.InputI onChange={(e) => setName(e.target.value)} value={name} placeholder='Digite aqui seu Pokémon' />

        <S.BotaoB onClick={() => pokemonGo(name)}>
          Buscar
        </S.BotaoB>

        <S.All onClick={() => window.location.href = "/pokemon"}>
          All Pokemons
        </S.All>

      </S.InputButt>



    </S.Container>
  );

}


export default Home;