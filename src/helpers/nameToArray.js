export const defaultPairNames = ['raji', 'balaji', 'rajarajeswari', 'balaji venkatraman'];

export const nameToArray = (name) => {
  const updatedName = name.toUpperCase();
  return updatedName.replace(/\s+/g, '').split('');
};

export const flameDifference = (name, partnerName) => {
  const updatedName = [...name];
  const updatedPartnerName = [...partnerName];

  const difference = updatedName.filter((letter) => {
    if (updatedPartnerName.includes(letter)) {
      const presentIndex = updatedPartnerName.indexOf(letter);
      updatedPartnerName[presentIndex] = null;
      return false;
    }
    return true;
  });
  return [...difference, ...updatedPartnerName]?.filter((letter) => letter);
};

export const flames = (flamesLength) => {
  let flames = ['f', 'l', 'a', 'm', 'e', 's'];
  let match = '';
  if (flamesLength === 0) {
    match = 'f';
  }
  for (let i = 0; i < flamesLength; i++) {
    match = flames[i];
  }
  return match;
};

export const getLoveResult = (match) => {
  const flames = [
    'Friends 👫',
    'Love 👩‍❤️‍👨',
    'Enemy 🔫',
    'Marriage 💒 💍',
    'Sister 💜',
  ];

  const result = flames.find(
    (flameMatch) => flameMatch[0].toLowerCase() === match.toLowerCase()
  );
  return result;
};
