type T1 = {
  name: string;
  email?: string;
  phone?: string;
};
// Partial<Type>
type PartialT1 = Partial<T1>;
// Required<Type>
type RequiredT1 = Required<T1>;
// Readonly<Type>
type ReadonlyT1 = Readonly<T1>;
const x: ReadonlyT1 = {
  name: 'a',
};
// x.name = 'b';
// Record<Keys,Type>
type T2 = 'env' | 'url';
type RecordT2String = Record<T2, string>;
// Pick<Type, Keys>
type PickEmail = Pick<T1, 'email'>;
// Omit<Type, Keys>
type OmitName = Omit<T1, 'name' | 'email'>;
// Exclude<Type, ExcludedUnion>
type ExcludeEnv = Exclude<T2, 'env'>;
// Extract<Type, Union>
type ExtractUrl = Extract<T2, 'url'>;

// combine
type T3 = Partial<Record<Exclude<T2, 'env'>, string>>;

// typeof, keyof
const todo = {
  id: 1,
  text: 'Buy milk',
  due: new Date(2016, 11, 31),
};
type TTodo = typeof todo;
type TypeTodo = keyof typeof todo; //Union Literal Types
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const id = prop(todo, 'id');
const text = prop(todo, 'text');
const due = prop(todo, 'due');

// extends
interface IPerson {
  name: string;
}

type TPerson = {
  name: string;
};

interface IStudent extends IPerson {
  class: string;
}

type TStudent = TPerson & {
  class: string;
};

// overloading
type asyncAddCb = (result: number) => void;
// define all valid function signatures
function asyncAdd(a: number, b: number): Promise<number>;
function asyncAdd(a: number, b: number, cb: asyncAddCb): void;
// define the actual implementation
// notice cb is optional
// also notice that the return type is inferred, but it could be specified as `void | Promise<number>`
function asyncAdd(a: number, b: number, cb?: asyncAddCb) {
  const result = a + b;
  if (cb) {
    return cb(result);
  }
  return Promise.resolve(result);
}
