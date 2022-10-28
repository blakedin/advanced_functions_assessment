/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  return parks.filter((park) => park.location.state === state);
}

function getWishlistParksForUser(parks, users, username) {
  const user_wish_list = users[username].wishlist;
  return parks.filter((p) => {
    if (user_wish_list.includes(p.id)) return p;
  });
}

function userHasVisitedAllParksInState(parks, users, state, username) {
  const user_visits = users[username].visited;
  const park_list = getParksByState(parks, state).map((p) => p.id);
  return park_list.every((p) => user_visits.includes(p));
}

function userHasVisitedParkOnWishlist(users, user_one, user_two) {
  return users[user_one].visited.some((visit) =>
    users[user_two].wishlist.includes(visit)
  );
}
function getUsersForUserWishlist(users, username) {
  const result = [];
  for (let user in users) {
    if (
      userHasVisitedParkOnWishlist(users, user, username) &&
      user !== username
    )
      result.push(user);
  }
  return result;
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
