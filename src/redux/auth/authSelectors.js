export const getUserName = state => state.auth.user?.name;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getToken = state => state.auth.token;
export const getIsFetchingCurrent = state => state.auth.getIsFetchingCurrent;
