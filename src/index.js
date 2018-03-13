const createRoutine = actionPrefix => {
  const types = {
    REQUEST: `${actionPrefix}.REQUEST`,
    SUCCESS: `${actionPrefix}.SUCCESS`,
    FAILURE: `${actionPrefix}.FAILURE`
  }
  return {
    ...types,
    request: payload => ({
      type: types.REQUEST,
      payload
    }),
    success: payload => ({
      type: types.SUCCESS,
      payload
    }),
    failure: error => ({
      type: types.FAILURE,
      error
    })
  }
}

export default createRoutine
