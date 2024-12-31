const buyPrice = 2000;

if (buyPrice > 5000) {
  //discount 10%
  const discount = buyPrice * 10 / 100;
  const totalPrice = buyPrice - discount;
  console.log(totalPrice)
}

else if (buyPrice > 2500) {
  //discount 5%
  const discount = buyPrice * 5 / 100;
  const totalPrice = buyPrice - discount;
  console.log(totalPrice)
}

else if (buyPrice > 1000) {
  //discount 2%
  const discount = buyPrice * 2 / 100;
  const totalPrice = buyPrice - discount;
  console.log(totalPrice)
}

else {
  console.log('tumi paba na discount tomar total hocce', buyPrice)
}