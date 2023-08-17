const msgs = {
    INVALID_NAME: (playerName) => `Player name [${playerName}] is invalid, must not be empty.`,
    INVALID_ROLL: (rollValue) => `Invalid roll value. Make sure roll value is in range of [0,10]`,
    SUCCESS_NEW_GAME: (playerName) => `Successfully created new game for player ${playerName}`,
    SUCCESS_ROLL: (playerName, game) => {
        `Player ${playerName} successfully rolled. Current game statue:\n${game}`
    }
}
export default msgs