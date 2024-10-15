import { usePlayerContext } from '../../PlayerContext'

export const JeopardyRound = () => {
    const { player1Name, player2Name } = usePlayerContext()
    console.log("player1Name in JeopardyRound", player1Name)
    return (
        <h1>{player1Name} vs. {player2Name}</h1>
    )
}