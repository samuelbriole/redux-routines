import createRoutine from './index'

describe('createRoutine', () => {
  it('returns a routine object with a REQUEST property', () => {
    expect(createRoutine('ACTION_PREFIX')).toHaveProperty(
      'REQUEST',
      'ACTION_PREFIX.REQUEST'
    )
  })

  it('returns a routine object with a SUCCESS property', () => {
    expect(createRoutine('ACTION_PREFIX')).toHaveProperty(
      'SUCCESS',
      'ACTION_PREFIX.SUCCESS'
    )
  })

  it('returns a routine object with a FAILURE property', () => {
    expect(createRoutine('ACTION_PREFIX')).toHaveProperty(
      'FAILURE',
      'ACTION_PREFIX.FAILURE'
    )
  })

  it('returns a routine object with a request function property', () => {
    const routine = createRoutine('ACTION_PREFIX')
    expect(routine).toHaveProperty('request')
    expect(routine.request('mocked_payload')).toEqual({
      type: routine.REQUEST,
      payload: 'mocked_payload'
    })
  })

  it('returns a routine object with a success function property', () => {
    const routine = createRoutine('ACTION_PREFIX')
    expect(routine).toHaveProperty('success')
    expect(routine.success('mocked_payload')).toEqual({
      type: routine.SUCCESS,
      payload: 'mocked_payload'
    })
  })

  it('returns a routine object with a failure function property', () => {
    const routine = createRoutine('ACTION_PREFIX')
    expect(routine).toHaveProperty('failure')
    expect(routine.failure('mocked_error')).toEqual({
      type: routine.FAILURE,
      error: 'mocked_error'
    })
  })
})
