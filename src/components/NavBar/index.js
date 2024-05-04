import './index.css'

const NavBar = props => {
    const {currentScore,isgameInProgress,topScore} = props
    return(
        <nav className="nav-bar-container">
            <div className="title-with-score-container">
                <div className="logo-and-title-container">
                    <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" className="emoji-logo" alt="emoji logo"/>
                    <h1 className="title">Emoji Game</h1>

                </div>
                {isgameInProgress &&(
                     <div className="scores-container">
                        <p className="score">Score: {currentScore}</p>
                        <p className="score">TopScore: {topScore}</p>
                    
                     </div>
                )}
            </div>
        </nav>
    )
}
export default NavBar;