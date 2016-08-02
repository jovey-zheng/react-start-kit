import {
  COUNTER_INC,
  COUNTER_DEC
} from 'actions/counterActions';

const InitState = 0;

export default function counter(state = InitState, action) {

  switch (action.type) {
    case COUNTER_INC:
      return state + 1;

    case COUNTER_DEC:
      return state - 1;

    default:
      return state;
  }

}
