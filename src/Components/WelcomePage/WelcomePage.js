import '../WelcomePage/WelcomePage.css'
import { usePlayerContext } from '../../PlayerContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const WelcomePage = () => {
    const { player1Name, setPlayer1Name, player2Name, setPlayer2Name } = usePlayerContext()
    // usePlayerContext hook returns an object that contains the values and functions defined in PlayerContext.Provider
    // destructing the object
    console.log("player1Name in Welcome Page:", player1Name)
    const [startGame, setStartGame] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (player1Name && player2Name) {
            clearInputs()
            setStartGame(true)
            navigate('/JeopardyRound')
        }
    }

    const clearInputs = () => {
        setPlayer1Name('')
        setPlayer2Name('')
    }

    return (
        <div>
            <h1 className="header">Welcome to Jeopardy (scorer)!</h1>
            <section className="player-names">
                <h2 className="player-1">Player 1</h2>
                <h2 className="player-2">Player 2</h2>
            </section>
            <section className="name-input">
                <input
                    type="text"
                    name="name"
                    placeholder="player 1 name"
                    onChange={event => setPlayer1Name(event.target.value)}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="player 2 name"
                    onChange={event => setPlayer2Name(event.target.value)}
                />
            </section>
            <section className="play-button-container">
                <button className="play-button" onClick={handleSubmit}>Play!</button>
            </section>
        </div>
    )
}