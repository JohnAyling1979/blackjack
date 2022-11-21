import { Card } from '../';
import './Dealer.css';

function Dealer() {
    return (
        <div className='dealer-root'>
            <div>
                Dealer
            </div>
            <div>
                <Card number={8} suit='heart' card={0} />
                <Card number={'J'} suit='diamond' card={1} face />
                <Card number={3} suit='spade' card={2} face />
                <Card number={'A'} suit='club' card={3} face />
            </div>
        </div>
    );
}

export default Dealer;
