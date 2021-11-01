// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { firestore } from "firebase";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB0g-oLxH0wPVYaDxEXwlvy1mSHJKzlmC4",
    authDomain: "mytravelapp-f16de.firebaseapp.com",
    projectId: "mytravelapp-f16de",
    storageBucket: "mytravelapp-f16de.appspot.com",
    messagingSenderId: "314050441964",
    appId: "1:314050441964:web:c30c27f5b2a4079c466bc9",
    measurementId: "G-3BXXJ3WMC4"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
