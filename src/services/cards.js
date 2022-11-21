const shuffleUrl = 'https://www.deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/?deck_count=1';
const drawUrl = 'https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1';
const discardUrl = 'https://www.deckofcardsapi.com/api/deck/<<deck_id>>/pile/discard/add/?cards=<<card_list>>';

export const shuffleDeck = deckId => {
    return fetch(shuffleUrl.replaceAll('<<deck_id>>', deckId ?? 'new'))
        .then(response => response.json());
}

export const dealCard = deckId => {
    return fetch(drawUrl.replaceAll('<<deck_id>>', deckId))
        .then(response => response.json());
}

export const discardCard = (deckId, cards) => {
    return fetch(discardUrl.replaceAll('<<deck_id>>', deckId).replaceAll('<<card_list>>', cards.join(',')))
        .then(response => response.json());
}