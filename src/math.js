const calcTip = (total, percent = .15) => {
  const tip = total * percent;
  return total + tip;
}

module.exports = {
  calcTip
}
