import INCREASE from './actionType';

export default function increase(diff) {
    return {
        type: INCREASE,
        amount: diff
    };
}