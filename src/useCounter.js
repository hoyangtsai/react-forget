import Counter from './Counter';

export const counter = new Counter();

export default function useCounter(name = 'default') {
  counter.set(name);
  return counter.get(name);
}
