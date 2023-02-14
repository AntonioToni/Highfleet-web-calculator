export function getTotalFuel (distance: number, consumption: number): number {
	return (distance * (consumption / 1000));
}

export function getPrice (totalFuel: number, pricePerLitre: number): number {
	const pricePerTonne = pricePerLitre / 0.465 * 1000;
	return (pricePerTonne * totalFuel);
}
