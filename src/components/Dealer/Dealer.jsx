import { Card } from '../';
import './Dealer.css';

function Dealer({hand}) {
    return (
        <div className='dealer-root'>
            <div>
                Dealer
            </div>
            <div>
                {hand.map((card, index) => <Card key={index} card={card} count={index} face={index !== 0} />)}
            </div>
        </div>
    );
}

export default Dealer;
