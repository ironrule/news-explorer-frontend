export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const getUserInfo = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      username: "Brandon King",
      email: "fake@example,com",
      _id: "fake-id",
    });
  });
};

export const register = (email, password, username) => {
  return new Promise((resolve, reject) => {
    resolve({ email, username, token: "a fake token" });
  });
};
