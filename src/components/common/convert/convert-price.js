import React from 'react';

const ConvertPrice = (price) => {
    const newString = Array(price)
    const lengthArray = newString.length
    if (lengthArray <= 3) {
        return
    } else if (lengthArray <= 6) {
        return newString.splice(-3, 0, '.').join('')
    } else if (lengthArray <= 9) {
        return newString.splice(-3, 0, '.').splice(-7, 0, '.').join('')
    }
};

export default ConvertPrice