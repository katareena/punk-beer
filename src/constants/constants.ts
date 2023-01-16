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
  Error = 'Something went wrong :( We are doing our best to fix it!',
}

export enum SearchUrl {
  ByName = 'https://api.punkapi.com/v2/beers?beer_name=',
  ById = 'https://api.punkapi.com/v2/beers/',
}

export const DESKTOP_WHIDTH = 1024;
