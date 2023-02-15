export function getTotalFuel (distance: number, consumption: number): number {
	return (distance * (consumption / 1000));
}

export function getPrice (totalFuel: number, pricePerLitre: number): number {
	const pricePerTonne = pricePerLitre / 0.465 * 1000;
	return (pricePerTonne * totalFuel);
}

export function getTime(distance: number, cruiseSpeed: number): number {
	return (distance / cruiseSpeed);
}

export function thousandsSeparator(x: number): string {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}