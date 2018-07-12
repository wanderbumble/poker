import cardLogic from '../cardLogic';

/**
 * cardColor
 */
describe('cardColor number 1 - 13', () => {
    const cardNum = 7;

    it('entering a number between 1 and 13 should return red', () => {
        expect(cardLogic
            .cardColor(cardNum))
            .toEqual('red');
    });
});

describe('cardColor number 14 - 26', () => {
    const cardNum = 15;

    it('entering a number between 14 and 26 should return undefined', () => {
        expect(cardLogic
            .cardColor(cardNum))
            .toEqual(undefined);
    });
});

describe('cardColor number 27 - 39', () => {
    const cardNum = 33;

    it('entering a number between 27 and 39 should return undefined', () => {
        expect(cardLogic
            .cardColor(cardNum))
            .toEqual('red');
    });
});

describe('cardColor number 40 - 52', () => {
    const cardNum = 47;

    it('entering a number between 40 and 52 should return undefined', () => {
        expect(cardLogic
            .cardColor(cardNum))
            .toEqual(undefined);
    });
});

/**
 * suitForCard
 */
describe('suitForCard number 1 - 13', () => {
    const cardNum = 7;

    it('entering a number between 1 and 13 should return e', () => {
        expect(cardLogic
            .suitForCard(cardNum))
            .toEqual('e');
    });
});

describe('suitForCard number 14 - 26', () => {
    const cardNum = 15;

    it('entering a number between 14 and 26 should return w', () => {
        expect(cardLogic
            .suitForCard(cardNum))
            .toEqual('w');
    });
});

describe('suitForCard number 27 - 39', () => {
    const cardNum = 33;

    it('entering a number between 27 and 39 should return r', () => {
        expect(cardLogic
            .suitForCard(cardNum))
            .toEqual('r');
    });
});

describe('suitForCard number 40 - 52', () => {
    const cardNum = 47;

    it('entering a number between 40 and 52 should return q', () => {
        expect(cardLogic
            .suitForCard(cardNum))
            .toEqual('q');
    });
});

/**
 * symbolForCardNumber
 */
describe('symbolForCardNumber Ace', () => {
    const cardNum = 1;

    it('entering a number 1 should return A', () => {
        expect(cardLogic
            .symbolForCardNumber(cardNum))
            .toEqual('A');
    });
});

describe('symbolForCardNumber Jack', () => {
    const cardNum = 11;

    it('entering a number 1 should return J', () => {
        expect(cardLogic
            .symbolForCardNumber(cardNum))
            .toEqual('J');
    });
});

describe('symbolForCardNumber Queen', () => {
    const cardNum = 12;

    it('entering a number 1 should return Q', () => {
        expect(cardLogic
            .symbolForCardNumber(cardNum))
            .toEqual('Q');
    });
});

describe('symbolForCardNumber King', () => {
    const cardNum = 13;

    it('entering a number 1 should return K', () => {
        expect(cardLogic
            .symbolForCardNumber(cardNum))
            .toEqual('K');
    });
});

describe('symbolForCardNumber Other', () => {
    const cardNum = 3;

    it('entering a number 3 should return 3', () => {
        expect(cardLogic
            .symbolForCardNumber(cardNum))
            .toEqual(3);
    });
});

/**
 * normalizeCard
 */
describe('normalizeCard number 1 - 13', () => {
    const cardNum = 3;

    it('entering a number 3 should return 3', () => {
        expect(cardLogic
            .normalizeCard(cardNum))
            .toEqual(3);
    });
});

describe('normalizeCard number 14 - 26', () => {
    const cardNum = 15;

    it('entering a number 15 should return 2', () => {
        expect(cardLogic
            .normalizeCard(cardNum))
            .toEqual(2);
    });
});

describe('normalizeCard number 27 - 39', () => {
    const cardNum = 33;

    it('entering a number 33 should return 7', () => {
        expect(cardLogic
            .normalizeCard(cardNum))
            .toEqual(7);
    });
});

describe('normalizeCard number 40 - 52', () => {
    const cardNum = 47;

    it('entering a number 47 should return 8', () => {
        expect(cardLogic
            .normalizeCard(cardNum))
            .toEqual(8);
    });
});

/**
 * normalizeHand
 */
describe('normalizeHand', () => {
    const handArray = [3, 15, 24, 33, 47];

    it('entering an unnormalized hand array will return and array with the correct card values', () => {
        expect(cardLogic
            .normalizeHand(handArray))
            .toEqual([3, 2, 11, 7, 8]);
    });
});

/**
 * checkForPairs
 */
describe('checkForPairs', () => {
    const handArray = [3, 2, 11, 3, 8];

    it('entering an array with one pair should return a 2', () => {
        expect(cardLogic
            .checkForPairs(3, handArray))
            .toEqual(2);
    });
});

describe('checkForPairs', () => {
    const handArray = [8, 2, 8, 3, 8];

    it('entering an array with three matching should return a 3', () => {
        expect(cardLogic
            .checkForPairs(8, handArray))
            .toEqual(3);
    });
});

/**
 * processHand
 */
describe('processHand fullhouse', () => {
    const normalizedHandArray = [3, 4, 5, 7, 6];

    it('entering an array that can five sequential values should return 500', () => {
        expect(cardLogic
            .processHand(normalizedHandArray))
            .toEqual(500);
    });
});

describe('processHand one pair', () => {
    const normalizedHandArray = [3, 4, 5, 3, 6];

    it('entering an array that has one pair of values should return 100', () => {
        expect(cardLogic
            .processHand(normalizedHandArray))
            .toEqual(100);
    });
});

describe('processHand one pair', () => {
    const normalizedHandArray = [3, 4, 5, 3, 4];

    it('entering an array that has two pair of values should return 200', () => {
        expect(cardLogic
            .processHand(normalizedHandArray))
            .toEqual(200);
    });
});

describe('processHand one pair', () => {
    const normalizedHandArray = [3, 6, 5, 9, 1];

    it('entering an an array with no pairs or five sequential values should return 0', () => {
        expect(cardLogic
            .processHand(normalizedHandArray))
            .toEqual(0);
    });
});
