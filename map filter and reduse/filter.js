const arr=[1,2,3,4,5,6,7];

const users=[
{
  name:"revathi",
  contact:"9585916693",
  age: 27,
},
{
  name:"ramya",
  contact:"9943476789",
  age: 28,
},
];

const filteredUsers= users.filter((user,index)=>{
  return user.name !=="ramya";
});
console.log(filteredUsers);