export const cardColor = cardNum => {
    if (cardNum >= 0 && cardNum <= 13) {
        //Diamonds
        return 'red';
    } else if (cardNum >= 27 && cardNum <= 39) {
        //Hearts
        return 'red';
    }
};

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

export const normalizeHand = handArray => {
    if (handArray.length === 0) {
        return 0;
    }

    return handArray.map( cardNum => normalizeCard(cardNum) );
};

export const checkForPairs = (n, handArray) => {
    let count = 0;
    let index = 0;

    do {
        index = handArray.indexOf(n, index) + 1;
        if(index == 0){
            break;
        } else {
            count ++;
        }
    } while(index < handArray.length);

    return count;
};

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
        //We found two pairs or four of a kind.
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
