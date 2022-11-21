import { Card } from '../';
import './Player.css';

function Player({hand}) {
    return (
        <div className='player-root'>
            <div>
                Player
            </div>
            <div>
                {hand.map((card, index) => <Card key={index} card={card} count={index} face />)}
            </div>
        </div>
    );
}

export default Player;
