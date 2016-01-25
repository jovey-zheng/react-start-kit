export default function me(state = {}, action) {
  if (action.type === '@@redux/INIT') {
    return '';
  } else {
    return state;
  }
}
