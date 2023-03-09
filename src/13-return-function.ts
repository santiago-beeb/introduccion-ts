(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  }

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`el total es ${rta}` );

  }

  const rta = printTotal([1,2,3,6,5,]);
  console.log(rta);

})()
