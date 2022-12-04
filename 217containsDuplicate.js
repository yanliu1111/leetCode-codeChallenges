//Given an integral number, return true if any value apears at lest twice in the array, and return false if every element is distinct.
// Method 1
// const containsDuplicate = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     const curr = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       const next = nums[j];
//       if (curr === next) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
// Method 2
// const contiansDuplicate = (num) => {
//   let numSet = new Set();
//   for (let i = 0; i < num.length; i++) {
//     if (numSet.has(num[i])) {
//       return true;
//     }
//     numSet.add(num[i]);
//   }
//   return false;
// };
//method 3 arrymap
const containsDuplicate = (nums) => {
  const uniqs = {}; //create a map variable, it is emapty object at beginning
  for (let i = 0; i < nums.length; i++) {
    //loop through the array
    const curr = nums[i];
    if (uniqs[curr]) {
      //if the current value is in the map, return true
      return true;
    }
    uniqs[curr] = true; //if the current value is not in the map, add it to the map
  }
  return false; //if the loop is done, return false
};

console.log(containsDuplicate([1, 2, 3, 4]));
