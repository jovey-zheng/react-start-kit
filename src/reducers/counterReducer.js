import {COUNTER_INC, COUNTER_DEC} from 'actions/counterActions';

const InitState = 0;

export default function counter(state = InitState, action) {
  if (action.type === COUNTER_INC) {
    return state + 1;
  }
  if (action.type === COUNTER_DEC) {
    return state - 1;
  }
  return state;
}
