// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiUrl: 'https://api.coloredstrategies.com',
  defaultMenuType: 'menu-default',
  subHiddenBreakpoint: 1440,
  menuHiddenBreakpoint: 768,
  themeColorStorageKey: 'vien-themecolor',
  isMultiColorActive: true,
  /*
  Color Options:
  'light.blueyale', 'light.blueolympic', 'light.bluenavy', 'light.greenmoss', 'light.greenlime', 'light.yellowgranola', 'light.greysteel', 'light.orangecarrot', 'light.redruby', 'light.purplemonster'
  'dark.blueyale', 'dark.blueolympic', 'dark.bluenavy', 'dark.greenmoss', 'dark.greenlime', 'dark.yellowgranola', 'dark.greysteel', 'dark.orangecarrot', 'dark.redruby', 'dark.purplemonster'
  */
  defaultColor: 'light.blueyale',
  isDarkSwitchActive: true,
  defaultDirection: 'ltr',
  themeRadiusStorageKey: 'vien-themeradius',
  isAuthGuardActive: true,
  firebase: {
    apiKey: 'AIzaSyBcjUh5HvnMjjJ8p0mD9CY47dzzfsxoVMQ',
    authDomain: 'ecommerce72-3d1e4.firebaseapp.com',
    databaseURL: 'https://ecommerce72-3d1e4-default-rtdb.firebaseio.com',
    projectId: 'ecommerce72-3d1e4',
    storageBucket: 'ecommerce72-3d1e4.appspot.com',
    messagingSenderId: '647413183923',
    appId: '1:647413183923:web:645a28f1c6a68073fbc7c6',
    measurementId: 'G-J4BQ7VW1ZQ'
  }
};
