import { useEffect, useState } from 'react';
import { 
  Header,
  Dealer,
  Player,
  Sidebar,
} from '../../components';
import { shuffle } from '../../services/cards';
import './App.css';

function App() {
  const [deck, setDeck] = useState(null);
  useEffect(() => {
    shuffle().then(data => {
      setDeck({
        id: data.deck_id,
        remaining: data.remaining
      });
    });
  }, []);

  return (
    <div className='root'>
      <Header />
      <div className='table'>
        <div className='play-area'>
          <Dealer />
          <Player />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
