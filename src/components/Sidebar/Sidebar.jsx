function Sidebar({
    deck,
    start, 
    deal,
    setDealerHand,
    setPlayerHand,
    turn,
    setTurn,
}) {
    const dealCards = () => {
        deal(setPlayerHand);
        deal(setDealerHand);
        deal(setPlayerHand);
        deal(setDealerHand);

        setTurn('player');
    }

    const hit = () => {
        deal(setPlayerHand);
    }

    const stand = () => {
        setTurn('dealer');
    }
    
    return (
        <div>
            <div>
                <button onClick={start} disabled={!!deck}>Start</button>
                <button onClick={dealCards} disabled={!!turn || !deck}>Deal</button>
            </div>
            {
                turn === 'player' && (
                    <div>
                        <button onClick={hit}>Hit</button>
                        <button onClick={stand}>Stand</button>
                    </div>
                )
            }
        </div>
    );
}

export default Sidebar;
