const money = 9;

if (money > 200) {
  console.log('you can buy a mobile')
}

else {
  if (money > 100) {
    console.log('you can buy a watch')
  }
  else {
    if (money > 10) {
      console.log('you can buy a pen')
    }
    else {
      console.log('you can not buy anything')
    }
  }
}