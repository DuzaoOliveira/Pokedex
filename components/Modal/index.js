import React from 'react'
import * as S from '../Modal/styles'

export default function Modal({
    nome,
    tipo,
    hp,
    ataque,
    defesa,
    ataqueEspecial,
    defesaEspecial,
    velocidade,
    setIsOpen,
    isOpen,
    imagem,
}) {
    return (
        <div >
            {isOpen && (

                <S.Container>
                    <S.Modal>

                        <S.But button onClick={() => setIsOpen(false)}><img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG-1024x1022.png" width={'25px'} height={'25px'}></img></S.But>

                        <S.Habilidades>
                            <p>Nome:{nome}</p>
                            <p>Tipo:{tipo}</p>
                            <p>HP:{hp}</p>
                            <p>Ataque:{ataque}</p>
                            <p>Defesa:{defesa}</p>
                            <p>Ataque-Especial:{ataqueEspecial}</p>
                            <p>Defesa-Especial:{defesaEspecial}</p>
                            <p>Velocidade:{velocidade}</p>
                        </S.Habilidades>

                        <S.Imagem>
                            <img src={imagem} alt={nome} width={'300px'} height={'350px'} />
                        </S.Imagem>

                    </S.Modal>
                </S.Container>
            )}
        </div>
    )
}