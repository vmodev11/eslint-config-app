export const add = (a: number, b: number) => {
  let r = 0;
  if (a === b) r = a * 2;
  else r = a + b;
  return r;
};
export const say = <T>(i: T) => `Hi, ${i}`;
