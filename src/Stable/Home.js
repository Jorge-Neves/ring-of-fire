import React, { useState, useEffect } from 'react';

import DeckOfCards from "./Deck.json";

function Home() {
    
    const [deck, setDeck] = useState(DeckOfCards);
    const [currentCard, setCurrentCard] = useState([]);
    const [players, setPlayers] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState("");
    const [gameOver, setGameOver] = useState(false)
    
    const DrawCard = () => {
        
        const CardsLeftInDeck = deck.length

        if ( CardsLeftInDeck === 1){
            setGameOver(true)
        } else {
            const cardDrawn = Math.floor(Math.random() * 51);
            setCurrentCard(deck.cardDrawn)
            deck.splice(cardDrawn, 1)
        }
    };

    const EndGame = () => {
        
        const CardsLeftInDeck = deck.length

        if ( CardsLeftInDeck === 1){
            setGameOver(true)
        } else {
            const cardDrawn = Math.floor(Math.random() * 51);
            setCurrentCard(deck.cardDrawn)
            deck.splice(cardDrawn, 1)
        }
    };

    return (
        <div>
            <h1>Home - stable</h1>
            

            { gameOver ? 
                
                <>
                    <h3>Round Over</h3>
                    <button onClick={EndGame}>Continue</button>
                </>
                
            : 

                <>
                    <div>
                        <h2></h2>
                    </div>

                    <button onClick={DrawCard}>Continue</button>
                </>

             }
        </div>
    )

} 




export default Home;