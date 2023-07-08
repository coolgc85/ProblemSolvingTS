function removeElement(nums: number[], val: number): number {

let index = 0

while(index < nums.length){
    if(nums[index]  == val){
        nums.splice(index,1);
        removeElement(nums,val);
    }
    index++;
}
return nums.length;
}

let nums: number[] = [6,6,3];
let expected: number[] = [6,6,3];
const val = 0;
const r = removeElement(nums, val);
console.log(r === expected.length);

