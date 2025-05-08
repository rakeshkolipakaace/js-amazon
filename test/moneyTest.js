import {formatCurrency} from '../Amazon project/scripts/utils/money.js';

if(formatCurrency(2095)==='20.95'){
    console.log('Test passed');
}else{
    console.log('Test failed');
}