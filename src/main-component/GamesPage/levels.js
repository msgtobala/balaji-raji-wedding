export const gameLevels = {
  master: {
    name: 'Master',
    points: 0,
  },
  pro: {
    name: 'Pro',
    points: 100,
  },
  veteran: {
    name: 'Veteran',
    points: 150,
  },
  expert: {
    name: 'Expert',
    points: 300,
  },
  legend: {
    name: 'Legend',
    points: 500,
  },
};

export const userGameLevel = (gems) => {
  if (gems >= 140) {
    return gameLevels.legend.name;
  }

  if (gems >= 100) {
    return gameLevels.expert.name;
  }

  if (gems >= 80) {
    return gameLevels.veteran.name;
  }

  if (gems >= 40) {
    return gameLevels.pro.name;
  }
  return gameLevels.master.name;
};
