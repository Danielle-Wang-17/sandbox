const userIdArray = ['user-1', 'user-2', 'user-3', 'user-4', 'user-5', 'user-6', 'user-7'];
const randInt = Math.floor(Math.random() * 8);

dataLayer.push({'userId': userIdArray[randInt]});