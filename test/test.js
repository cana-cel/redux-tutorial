import assert from 'power-assert';

describe('Greeting', () => {
  it('Hello が入力されること', () => {
    let inputText = 'Hello';
    assert.equal(inputText, 'Hello');
  });
});

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
}

describe('actions', () => {
  it('addTodo アクションが起きること', () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    };
    const actual = todos(stateBefore, action);
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ];
    assert.deepEqual(actual, stateAfter);
  })
})
