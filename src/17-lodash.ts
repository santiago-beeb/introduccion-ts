import _ from 'lodash';

const data = [
  {
    username: 'santi',
    role:'admin'
  },
  {
    username: 'dani',
    role:'admin'
  },
  {
    username: 'anti',
    role:'admin'
  },
  {
    username: 'chanti',
    role:'costumer'
  },
]

const rta  = _.groupBy(data, (item) => item.role);
console.log(rta);
