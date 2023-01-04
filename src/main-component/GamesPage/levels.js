export const gameLevels = {
  master: {
    name: 'Master',
    points: 0,
  },
  pro: {
    name: 'Pro',
    points: 150,
  },
  veteran: {
    name: 'Veteran',
    points: 350,
  },
  expert: {
    name: 'Expert',
    points: 500,
  },
  legend: {
    name: 'Legend',
    points: 1500,
  },
};

export const userGameLevel = (gems) => {
  if (gems >= gameLevels.legend.points) {
    return gameLevels.legend.name;
  }

  if (gems >= gameLevels.expert.points) {
    return gameLevels.expert.name;
  }

  if (gems >= gameLevels.veteran.points) {
    return gameLevels.veteran.name;
  }

  if (gems >= gameLevels.pro.points) {
    return gameLevels.pro.name;
  }
  return gameLevels.master.name;
};
