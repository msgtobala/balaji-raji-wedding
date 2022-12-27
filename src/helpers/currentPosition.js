export const getCurrentPosition = (leaderboardData = []) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (user) {
    const index = leaderboardData.findIndex((data) => data.mobile === user.mobile);
    return [index, leaderboardData[index]];
  }
  return undefined;
};
