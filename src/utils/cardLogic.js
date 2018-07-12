/**
 * Returns the color of the suit if it should be red.
 * @param {number} cardNum - This is the un-normalized number of the card.
 * @returns {string} We will check this to see if the card should be red.
 */
export const cardColor = cardNum => {
    if (cardNum >= 0 && cardNum <= 13) {
        //Diamonds
        return 'red';
    } else if (cardNum >= 27 && cardNum <= 39) {
        //Hearts
        return 'red';
    }
};

/**
 * Returns the letter that will be used by the hoyt font to give us the suit symbol.
 * @param {number} cardNum - This is the un-normalized number of the card.
 * @returns {string} We will use this so the correct suit shows up.
 */
export const suitForCard = cardNum => {
    if (cardNum >= 0 && cardNum <= 13) {
        //Diamonds
        return 'e';
    } else if (cardNum >= 14 && cardNum <= 26) {
        //Clubs
        return 'w';
    } else if (cardNum >= 27 && cardNum <= 39) {
        //Hearts
        return 'r';
    } else if (cardNum >= 40 && cardNum <= 52) {
        //Spades
        return 'q';
    }
};

/**
 * Returns the letter in the event the cars is an Ace, Jack, Queen or King.
 * @param {number} cardNum - This is the normalized number of the card.
 * @returns {string} We will use this so the correct icon shows on the card.
 */
export const symbolForCardNumber = cardNum => {
    if (cardNum === 1) {
        return 'A';
    } else if (cardNum === 11) {
        return 'J';
    } else if (cardNum === 12) {
        return 'Q';
    } else if (cardNum === 13) {
        return 'K';
    }

    return cardNum;
};

/**
 * Returns an normailzed card number. For example 14 would become a 1.
 * And in turn be an Ace.
 * @param {number} cardNum - This is the un-normalized number of the card.
 * @returns {number} We will use number to build a normalized hand.
 */
export const normalizeCard = cardNum => {
    if (cardNum >= 0 && cardNum <= 13) {
        return cardNum;
    } else if (cardNum >= 14 && cardNum <= 26) {
        return cardNum - 13;
    } else if (cardNum >= 27 && cardNum <= 39) {
        return cardNum - 26;
    } else if (cardNum >= 40 && cardNum <= 52) {
        return cardNum - 39;
    }
};

/**
 * Returns an array with the card numbers normailzed. For example 14 would become a 1.
 * And in turn be an Ace. A 26 would be a King and be turned to a 13.
 * @param {array} handArray - This is the un-normalized array of cards.
 * @returns {array} We will use this array to check for pairs or flushes.
 */
export const normalizeHand = handArray => {
    if (handArray.length === 0) {
        return 0;
    }

    return handArray.map( cardNum => normalizeCard(cardNum) );
};

/**
 * Returns a string that we will be able to use to check what kind of pairs
 * are in the current hand.
 * @param {array} card - This is number of the current card we are checking.
 * @param {array} handArray - This is the normalized hand array of cards.
 * @returns {string} This will be a one or two digit number as a string.
 */
export const checkForPairs = (card, handArray) => {
    let count = 0;
    let index = 0;

    do {
        index = handArray.indexOf(card, index) + 1;
        if(index == 0){
            break;
        } else {
            count ++;
        }
    } while(index < handArray.length);

    return count;
};

/**
 * Returns a number that will be the users score based on their hand.
 * @param {array} normalizedHandArray - This is the normalized hand array of cards.
 * @returns {number} This will the users score.
 */
export const processHand = normalizedHandArray => {
    let userHand = normalizedHandArray.sort((a, b) => a - b);

    //We check to see if we have a full house.
    const fullhouse = userHand.every((num, i) => num === userHand[0] + i);

    if (fullhouse) {
        return 500;
    }

    //Check for pairs.
    let occurrencesFound = [];
    let pairsFound = '';
    for(let i = 0; i < userHand.length; i++){
        let occurrences = checkForPairs(userHand[i], userHand);
        if(occurrences > 1 && occurrencesFound.indexOf(userHand[i]) == -1){
            pairsFound += occurrences;
            occurrencesFound.push(userHand[i]);
        }
    }

    if (pairsFound === '2' || pairsFound === '3') {
        //We found one pair or three of a kind.
        return 100;
    } else if (pairsFound === '22' || pairsFound === '23' || pairsFound === '4') {
        //We found two pairs, one pair and three of a kind, or four of a kind.
        return 200;
    }

    return 0;
};

export default {
    normalizeHand,
    normalizeCard,
    checkForPairs,
    processHand,
    symbolForCardNumber,
    suitForCard,
    cardColor
};
