export type Beer = {
  "id": number,
  "name": string,
  "tagline": string,
  "firstBrewed": string,
  "description": string,
  "imageUrl": string | null,
  "abv": number,
  "ibu": number,
  "targetFg": number,
  "targetOg": number,
  "ebc": number,
  "srm": number,
  "ph": number,
  "attenuationLevel": number,
  "volume": {
    "value": number,
    "unit": string,
  },
  "boil_volume": {
    "value": number,
    "unit": string,
  },
  "method": {
    "mash_temp": [
      {
        "temp": {
          "value": number,
          "unit": string,
        },
        "duration": number,
      }
    ],
    "fermentation": {
      "temp": {
        "value": number,
        "unit": string,
      }
    },
    "twist": null | number
  },
  "ingredients": {
    "malt": [
      {
        "name": string,
        "amount": {
          "value": number,
          "unit": string,
        }
      }
    ],
    "hops": [
      {
        "name": string,
        "amount": {
          "value": number,
          "unit": string,
          },
          "add": string,
          "attribute": string,
        },
        {
          "name": string,
          "amount": {
            "value": number,
            "unit": string,
          },
          "add": string,
          "attribute": string,
        },
    ],
    "yeast": string,
  },
  "foodPairing": string[],
  "brewersTips": string,
  "contributedBy": string,
}

export type NewBeer = {
  name: string,
  imageUrl: string,
  tagline: string, 
  description: string,
  abv: number,
  foodPairing: string[],
}
