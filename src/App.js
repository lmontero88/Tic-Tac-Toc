import React, { useState } from 'react'
import RegistroFormulario from './Formulario'
import ContenedorJuego from './ContenedorJuego'

function App() {
    const [player, setPlayer] = useState({
        player1: '',
        player2: '',
        jugar: false,
        firstPlayer: '',
    })

    const accionDelClick = (player1, player2, firstPlayer) => {
        if (player1.trim() !== "" && !player2.trim() !== "") {
            setPlayer({
                player1: player1,
                player2: player2,
                jugar: true,
                firstPlayer: firstPlayer,
            })
        }

    }
        return (
            <div className=" contenedor">
                <h1>Tic Tac Toe en React.js</h1>
                {
                    player.jugar
                    ?<ContenedorJuego player ={player}/>
                    :<RegistroFormulario accionDelClick={accionDelClick} />
                }


            </div>
        )
}
    export default App
