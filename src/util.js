export const shuffle = (cardArray) => {
    var i = cardArray.length;
    var j;
    var temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cardArray[j];
      cardArray[j] = cardArray[i];
      cardArray[i] = temp;
    }
    return cardArray
  };