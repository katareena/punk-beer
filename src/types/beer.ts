export type CardBeer = {
  id: number,
  name: string,
  imageUrl: string,
  tagline: string, 
  description: string,
  abv: number,
  foodPairing: string[],
}

export type CatalogBeer = {
  id: number,
  name: string,
  imageUrl: string,
  description: string,
}
