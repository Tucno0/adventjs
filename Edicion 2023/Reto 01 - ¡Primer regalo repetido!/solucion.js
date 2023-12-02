/**
 *
 * @param {Array} gifts
 * @returns {Number} firstRepeatedId
 */
function findFirstRepeated(gifts) {
  // Code here
  let firstRepeatedId = -1;

  for (const i in gifts) {
    const arr = gifts.slice(0, i);

    if (arr.includes(gifts[i])) {
      firstRepeatedId = gifts[i];
      break;
    }
  }

  return firstRepeatedId;
}

const giftIds = [2, 1, 3, 5, 3, 2];
const giftIds2 = [1, 2, 3, 4];
const giftIds3 = [5, 1, 5, 1];

console.log(findFirstRepeated(giftIds));
console.log(findFirstRepeated(giftIds2));
console.log(findFirstRepeated(giftIds3));
