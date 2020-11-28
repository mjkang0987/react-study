const friends = [
  {name: '아이유', age: 15},
  {name: '손나은', age: 20},
  {name: '수지', age: 25},
  {name: '쯔위', age: 30},
  {name: '강동원', age: 35}
];

const timelines = [
  {desc: '점심이 맛있었다', likes: 0},
  {desc: '너는 멋지다', likes: 5},
  {desc: '호텔에 놀러갔다', likes: 10},
  {desc: '비싼 핸드폰을 샀다', likes: 15},
  {desc: '너는 나의 친구다', likes: 20},
  {desc: '고양이 최고 고양이 최고', likes: 25}
];

const makeDataGenerator = items => {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return {...item, id: itemIndex}
  }
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);