const FRIENDS = [
  {
    name: '쯔위'
  },
  {
    name: '수지'
  },
  {
    name: '이지금'
  },
  {
    name: '손나은'
  }
];

let nextId = 0;
export const getNextFriend = () => {
  const age = Math.floor(Math.random()*100);
  return {
    ...FRIENDS[nextId % 4],
    id: nextId++,
    age: age
  }
}