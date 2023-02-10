export function getTotalFuel(distance: number, consumption: number) {
  return(distance * (consumption / 1000))  
}

export function getPrice(totalFuel: number, pricePerLitre: number) {
  let pricePerTonne = pricePerLitre / 0.465 * 1000;
  return(pricePerTonne * totalFuel)
}