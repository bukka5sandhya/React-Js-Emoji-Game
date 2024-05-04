In this project, let's build an Emoji Game by applying the concepts we have learned till now.

Refer to the image below:

![image](https://github.com/bukka5sandhya/React-Js-Emoji-Game/assets/133884532/3127ec8d-d454-41d1-9049-5afef314943d)

https://assets.ccbp.in/frontend/content/react-js/emoji-game-output-v2.gif

Design Files

Click to view

Extra Small (Size < 576px), Small (Size >= 576px)

Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Game View

Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Won Game

Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Lose Game

Set Up Instructions

Click to view

Download dependencies by running npm install

Start up the app using npm start

Completion Instructions

Functionality to be added

The app must have the following functionalities

Initially, the Score and Total Score for the current game should be 0

When an Emoji is clicked,



If it is not the same as any of the previously clicked emojis, then the Score should be incremented by one

If all the emojis are clicked exactly once

Won Game view should be displayed

If it is the same as any of the previously clicked emojis

Lose Game view should be displayed

If the score achieved in the current game is higher than the previous scores then the Top Score should be updated accordingly

When the Play Again button is clicked, then we should be able to play the game again

The Score value should be reset but not the Top Score value

The EmojiGame component receives the emojisList as a prop. It consists of a list of emoji objects with the following properties in each emoji object

Key	Data Type

id	Number

emojiName	String

emojiUrl	String

Components Structure

![image](https://github.com/bukka5sandhya/React-Js-Emoji-Game/assets/133884532/17c24b4e-fc8b-47f0-913f-9b07b27d84cf)


![image](https://github.com/bukka5sandhya/React-Js-Emoji-Game/assets/133884532/bf32a41c-480a-4be7-a45d-44fbb948d944)

Implementation Files

Use these files to complete the implementation:

src/components/EmojiGame/index.js

src/components/EmojiGame/index.css

src/components/NavBar/index.js

src/components/NavBar/index.css

src/components/EmojiCard/index.js

src/components/EmojiCard/index.css

src/components/WinOrLoseCard/index.js

src/components/WinOrLoseCard/index.css

Quick Tips

Click to view

You can use the cursor CSS property to specify the mouse cursor to be displayed when pointing over an element

cursor:pointer;

![image](https://github.com/bukka5sandhya/React-Js-Emoji-Game/assets/133884532/62d0d886-ac84-4d3e-bab4-1baaad4e21c3)

You can use the below outline CSS property for buttons and input elements to remove the highlighting when the elements are clicked

outline:none;

Important Note

Click to view

The following instructions are required for the tests to pass

The emojis should have the alt as the value of the key emojiName from each emoji object

Resources

Image URLs

https://assets.ccbp.in/frontend/react-js/game-logo-img.png alt should be emoji logo

https://assets.ccbp.in/frontend/react-js/won-game-img.png

https://assets.ccbp.in/frontend/react-js/lose-game-img.png

Colors

Hex: #6a59ff

Hex: #ffffff

Hex: #3d3d3d

Background Colors

Hex: #9796f0

Hex: #fbc7d4

Hex: #ffffff33

Hex: #ffce27

Border Colors

Hex: #ffffff30

Font-families

Roboto

Things to Keep in Mind

All components you implement should go in the src/components directory.

Don't change the component folder names as those are the files being imported into the tests.

Do not remove the pre-filled code

Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
