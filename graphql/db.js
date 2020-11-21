export const people = [
  {
    id: 0,
    name: 'aaa',
    age: 15,
    gender: 'female',
  },
  {
    id: 1,
    name: 'bbb',
    age: 23,
    gender: 'male',
  },
  {
    id: 2,
    name: 'ccc',
    age: 57,
    gender: 'male',
  },
  {
    id: 3,
    name: 'ddd',
    age: 8,
    gender: 'female',
  },
  {
    id: 4,
    name: 'eee',
    age: 34,
    gender: 'male',
  },
  {
    id: 5,
    name: 'fff',
    age: 41,
    gender: 'female',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
