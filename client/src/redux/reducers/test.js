const initialState = 'test';

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'test':
      return 'hello';
    default:
      return initialState
  }
}

export default testReducer;