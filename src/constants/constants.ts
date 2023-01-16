export enum AppRoute {
  Root = '/',
  Results = '/results',
  About = '/about',
  MyFavorite = '/favorite',
  NoFoundPage = '*',
}

export enum SearchTitle {
  Results = 'Your Search Result',
  NoFound = 'No Search Result Found!',
  NoEnter = 'Please Enter Something...',
}

export const URL = 'https://api.punkapi.com/v2/beers?beer_name=';
