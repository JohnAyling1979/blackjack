import back from '../../assets/card-back-red.png';
import './Card.css';

function Card({number, suit, face, card}) {
    const left = card * 40 + 16;

    if (face) {
        return (
            <div style={{left}} className='card-root'>
                <div className='card-border'>
                    <div className={`card-top card-${suit}`} />
                    <div className='card-middle'>{number}</div>
                    <div className={`card-bottom card-${suit}`} />
                </div>
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
