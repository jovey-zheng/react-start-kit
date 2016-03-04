export const COUNTER_INC = 'COUNTER_INC';
export const COUNTER_DEC = 'COUNTER_DEC';

export const inc = () => ({
  type: COUNTER_INC,
})

export const dec = () => ({
  type: COUNTER_DEC,
})
