/**
 *
 * @param {string[]} gifts
 * @param {string} materials
 * @returns
 */
function manufacture(gifts, materials) {
  const materialSet = new Set(materials);
  return gifts.filter((gift) => [...gift].every((char) => materialSet.has(char)));
}

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';
manufacture(gifts, materials); // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle'];
const materials2 = 'jlepuz';
manufacture(gifts2, materials2); // ["puzzle"]

const gifts3 = ['libro', 'ps5'];
const materials3 = 'psli';
manufacture(gifts3, materials3); // []
