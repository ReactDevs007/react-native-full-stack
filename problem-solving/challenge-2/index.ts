export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {
  let arr = [dice1, dice2, dice3].sort(function(a, b){return b - a});
  if(arr[2] < 1 || arr[0] > 6 ) throw new Error('Dice out of number range');
  let count: any = {} ;
	arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  let max = 0, maxKey = "";
  for(let char in count){
    if(count[char]>= max){
      max = count[char];
      maxKey= char
    }
  }
  return parseInt(maxKey) * max;
};
