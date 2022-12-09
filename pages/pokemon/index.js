import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/Modal";
import * as S from './styles'

function Pokemons() {
    const [resposta, setResposta] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [valores, setValores] = useState();

    const escolherPokemon = (name) => {
        setOpenModal(true);
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${name}`,
            )
            .then((preview) => {
                setValores(preview.data);
            })
    }

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
            .then((response) => {
                setResposta(response.data);
            });
    }, []);

    const handleClick = () => {
        window.location.href = "/";
    };

    return (
        <S.Container>

            <S.Lista>
                <h1>Lista de Pokémons</h1>
            </S.Lista>

            <S.Voltar onClick={handleClick} >
                <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG-1024x1022.png" width={'50px'} height={'50px'}></img>
            </S.Voltar>


            <S.Card>
                {resposta?.results.map((pokemons, index, name) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div onClick={() => escolherPokemon(pokemons.name)}>

                            <>
                                <S.ImagemNomes>
                                    <S.Nomes>{pokemons.name}</S.Nomes>
                                    <S.Img>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`} width={'300px'} height={'350px'} />
                                    </S.Img>
                                </S.ImagemNomes>
                            </>


                        </div>
                    );
                })}
            </S.Card>


            {valores &&
                <Modal
                    nome={valores?.name}
                    tipo={valores.types && valores?.types[0]?.type?.name}
                    hp={valores.stats && valores?.stats[0].base_stat}
                    ataque={valores.stats && valores?.stats[1].base_stat}
                    defesa={valores.stats && valores?.stats[2].base_stat}
                    ataqueEspecial={valores.stats && valores?.stats[3].base_stat}
                    defesaEspecial={valores.stats && valores?.stats[4].base_stat}
                    velocidade={valores.stats && valores?.stats[5].base_stat}
                    imagem={
                        valores?.sprites?.other["official-artwork"]?.front_default
                    }
                    setIsOpen={setOpenModal}
                    isOpen={openModal}
                />
            }
        </S.Container >

    );
}
export default Pokemons;