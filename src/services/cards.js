const shuffleUrl = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
const drawUrl = 'https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1';
const discardUrl = 'https://www.deckofcardsapi.com/api/deck/<<deck_id>>/pile/discard/add/?cards=<<card_list>>';

export const shuffle = () => {
    return fetch(shuffleUrl)
        .then((response) => response.json());
}
