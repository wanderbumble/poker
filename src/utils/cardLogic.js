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
 * Returns a score based on the number of pairs found.
 * @param {array} userHand - This is the normalized hand array of cards.
 * @returns {number} This will be a 100, 200 or 0 based on pairs found.
 */
export const checkForPairs = userHand => {
    let cardPairFound = 0;
    let matchesSearched = [];
    userHand.map( cardNum => {
        if (matchesSearched.indexOf(cardNum) == -1) {
            matchesSearched.push(cardNum);
        } else {
            return;
        }

        const matchesFound = userHand.filter(cardNumber => cardNum === cardNumber);

        if (matchesFound.length === 2 || matchesFound.length === 3) {
            cardPairFound++;
        } else if (matchesFound.length === 4) {
            cardPairFound = cardPairFound + 2;
        }
    });

    return 100 * cardPairFound;
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

    //Check for pairs. If none are found we will get a 0 score back.
    return checkForPairs(userHand);
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
