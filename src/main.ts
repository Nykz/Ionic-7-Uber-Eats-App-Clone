import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocationAccuracy,
    NativeGeocoder,
    importProvidersFrom(
      IonicModule.forRoot({}),
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore()), 
      // provideFunctions(() => getFunctions()), 
      // provideMessaging(() => getMessaging()), 
      provideStorage(() => getStorage())
    ),
    provideRouter(routes),
  ],
});

