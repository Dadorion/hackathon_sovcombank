export const authWrapper = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    authWrapper.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    authWrapper.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};
