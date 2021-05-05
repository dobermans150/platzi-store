// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  products: 'https://platzi-store.herokuapp.com/products',
  firebaseConfig: {
    apiKey: 'AIzaSyBW7miNL9hLJFA8kW3_pHTS2XuYA79lg3w',
    authDomain: 'platzi-store-86de7.firebaseapp.com',
    projectId: 'platzi-store-86de7',
    storageBucket: 'platzi-store-86de7.appspot.com',
    messagingSenderId: '169427420645',
    appId: '1:169427420645:web:33dfaf9a34b7590ee21b0c',
    measurementId: 'G-JSYX9J5KF2',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
