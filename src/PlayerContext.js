import { createContext, useContext, useState, useEffect } from 'react'
import { WelcomePage } from '../src/Components/WelcomePage/WelcomePage'

const PlayerContext = createContext()

export const PlayerProvider = ({ children }) => {
    const [player1Name, setPlayer1Name] = useState('')
    const [player2Name, setPlayer2Name] = useState('')

    useEffect(() => {
        const storedPlayer1 = localStorage.getItem('player1Name')
        const storedPlayer2 = localStorage.getItem('player2Name')

        if (storedPlayer1) {
            setPlayer1Name(storedPlayer1)
            console.log(storedPlayer1)
        }
        if (storedPlayer2) {
            setPlayer2Name(storedPlayer2)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('player1Name', player1Name)
        localStorage.setItem('player2Name', player2Name)
    }, [player1Name, player2Name])

    return (
        <PlayerContext.Provider value={{ player1Name, setPlayer1Name, player2Name, setPlayer2Name}}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayerContext = () => {
    return useContext(PlayerContext)
}

// custom react hook that simplifies accessing the PlayerContext
// uses the built-in useContext hook to retrieve the current context value from PlayerContext, which includes the player names and their setter functions
// by calling usePlayerContext in any component, you can easily access and manipulate the player names