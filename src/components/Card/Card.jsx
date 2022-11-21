import back from '../../assets/card-back-red.png';
import './Card.css';

function Card({card, count, face}) {
    const left = count * 20 + 16;

    if (face) {
        return (
            <div style={{left}} className='card-root'>
                <img src={card.image} alt='card' />
            </div>
        )
    }

    return (
        <div style={{left}} className='card-root-back'>
            <img src={back} alt='card back' />
        </div>
    )
}

export default Card;
