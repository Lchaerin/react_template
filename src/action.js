import { INCREASE } from './actionType';

// action definition 
export default function increase(diff) {
    return {
        type: INCREASE, // type field is mandatory
        amount: diff
    };
}