import './index.css'

const LOSS_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png';
const WIN_IMAGE ='https://assets.ccbp.in/frontend/react-js/won-game-img.png';

const WinOrLossCard = props => {
    const{isWon,onClickPlayAgain,score}  = props 
    const imgUrl= isWon? WIN_IMAGE : LOSS_IMAGE
    const gameStatus = isWon? 'You Won' : 'You Lose'
    const scoreLabel= isWon? 'Best Score': 'Score'

    return(
        <div className="win-or-loss-card">
            <div className="details-section">
                <h1 className="game-status">{gameStatus}</h1>
                <p className="current-score-label">{scoreLabel}</p>
                <p className="current-score-value">{score}/12</p>
                <button
                type="button"
                className="play-again-button"
                onClick ={onClickPlayAgain}
                >
                    Play Again
                </button>
            </div>
            <div className="image-section">
                <img src={imgUrl} className="win-or-lose-image" alt="win or lose"/>
            </div>
        </div>
    )
}
export default  WinOrLossCard;