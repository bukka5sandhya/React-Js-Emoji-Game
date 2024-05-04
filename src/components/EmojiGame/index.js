import './index.css'
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLossCard from '../WinOrLossCard'

class EmojiGame extends Component {
    state={
        clickedEmojisList:[],
        isgameInProgress:true,
        topScore:0,
    }
    resetGame = () => {
        this.setState({clickedEmojisList:[],isgameInProgress:true})
    }
    renderScoreCard = () => {
        const {emojisList} = this.props 
        const {clickedEmojisList} = this.state
        const isWon = clickedEmojisList.length === emojisList.length

        return(
            <WinOrLossCard
            isWon={isWon}
            onClickPlayAgain = {this.resetGame}
            score = {clickedEmojisList.length}
            />
        )

    }
    finishGameAndSetTopScore = currentScore => {
        const {topScore} = this.state
        let newTopScore = topScore

        if(currentScore > topScore){
            newTopScore =currentScore
        }
        this.setState({topScore:newTopScore,isgameInProgress:false})
    }
    clickEmoji = id => {
        const {emojisList} = this.props
        const {clickedEmojisList} = this.state 
        const isEmojiPresent = clickedEmojisList.includes(id)
        const clickedEmojisListLength = clickedEmojisList.length

        if(isEmojiPresent){
            this.finishGameAndSetTopScore(clickedEmojisListLength)
        } else{
            if(emojisList.length -1 === clickedEmojisListLength){
                this.finishGameAndSetTopScore(emojisList.length)
            }
            this.setState(previousState =>({
                clickedEmojisList: [...previousState.clickedEmojisList,id]
            }))
        }
    }
    getShuffledEmojisList = () => {
        const {emojisList} = this.props 
        return emojisList.sort(() => Math.random()- 0.5)
    }
    renderEmojisList = () =>{
        const shuffledEmojisList = this.getShuffledEmojisList();
        return(
            <ul className="emojis-list-container">
                {shuffledEmojisList.map(emojiObject => (
                    <EmojiCard
                    key={emojiObject.id}
                    emojiDetails ={emojiObject}
                    clickEmoji ={this.clickEmoji}
                    />
                ))}

            </ul>
        )
    }
    render(){
        const {topScore,isgameInProgress,clickedEmojisList} =this.state 
        return(
            <div className="app-container">
                <NavBar 
                currentScore={clickedEmojisList.length}
                isgameInProgress={isgameInProgress}
                topScore ={topScore}
                />
                <div className="emoji-game-body">
                    {isgameInProgress ? this.renderEmojisList(): this.renderScoreCard()}
                </div>
            </div>
        )
    }
}
export default EmojiGame;