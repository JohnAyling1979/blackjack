import { useEffect, useState } from 'react';
import {
  Header,
  Dealer,
  Player,
  Sidebar,
} from '../../components';
import { dealCard, shuffleDeck } from '../../services/cards';
import './App.css';

function App() {
  const [deck, setDeck] = useState(null);
  const [turn, setTurn] = useState(null);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);

  const start = () => {
    shuffleDeck().then(data => {
      setDeck({
        id: data.deck_id,
        remaining: data.remaining
      });
    });
  }

  const deal = setHand => {
    dealCard(deck.id).then(data => {
      setHand(currentHand => [...currentHand, ...data.cards])
    })
  }

  return (
    <div className='app-root'>
      <Header />
      <div className='app-table'>
        <div className='app-play-area'>
          <Dealer hand={dealerHand} />
          <Player hand={playerHand} />
        </div>
        <div>
          <Sidebar
            deck={deck}
            start={start} 
            deal={deal}
            setDealerHand={setDealerHand}
            setPlayerHand={setPlayerHand}
            turn={turn}
            setTurn={setTurn}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
