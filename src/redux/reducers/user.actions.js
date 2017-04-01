export const types = {
  LOGIN: {
    REQUEST: 'LOGIN.REQUEST',
    SUCCESS: 'LOGIN.SUCCESS',
    FAILURE: 'LOGIN.FAILURE',
  },
  LOGOUT: {
    REQUEST: 'LOGOUT.REQUEST',
    SUCCESS: 'LOGOUT.SUCCESS',
    FAILURE: 'LOGOUT.FAILURE',
  },
  SET_TOKEN: 'SET_TOKEN',
  SYNC_USER: 'SYNC_USER',
}

export const login = () => ({
  type: types.LOGIN.REQUEST
});

export const loginSuccess = user => ({
  type: types.LOGIN.SUCCESS,
  user
});

export const loginFailure = error => ({
  type: types.LOGIN.FAILURE,
  error
});

export const logout = () => ({
  type: types.LOGOUT.REQUEST
});

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS
});

export const logoutFailure = () => ({
  type: types.LOGOUT.FAILURE
});

export const setToken = token => ({
  type: types.SET_TOKEN,
  token,
});

export const syncUser = user => ({
  type: types.SYNC_USER,
  user,
})
