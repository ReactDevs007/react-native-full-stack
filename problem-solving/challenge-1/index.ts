export const numbersFractionCalculator = (numbers: number[]) => {
    let count = [0,0,0];
    let len = numbers.length;
    numbers.forEach((item) => {
      if (item > 0)
        count[0]++;
      else if (item < 0)
        count[1]++;
      else
        count[2]++;
    })
    return {"positives" : (count[0] / len).toFixed(6), "negative": (count[1] / len).toFixed(6),  "zeros": (count[2] / len).toFixed(6)};
  };
  