import { Injectable } from '@angular/core';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  geocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(
    private locationAccuracy: LocationAccuracy,
    private nativeGeocoder: NativeGeocoder
  ) { }

  async enableLocation() {
    try {
      const canRequest: boolean = await this.locationAccuracy.canRequest();
      console.log('canrequest: ', canRequest);
      if(canRequest) {
        await this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
        console.log('Request successful');
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  getCurrentLocation() {
    return Geolocation.getCurrentPosition()
    .then(coordinates => {
      return coordinates;
    })
    .catch(e => {
      throw(e);
    });
  }

  requestLocationPermission() {
    return Geolocation.requestPermissions()
    .then(status => {
      return status;
    })
    .catch(e => {
      throw(e);
    });
  }

  reverseGeocoder(lat, lng) {  
  return this.nativeGeocoder.reverseGeocode(lat, lng, this.geocoderOptions)
    .then((result: NativeGeocoderResult[]) => {
      console.log(JSON.stringify(result[0]));
      return result[0];
    })
    .catch((error: any) => {
      console.log(error);
      throw(error);
    });
  }

  forwardGeocoder(address) {  
    return this.nativeGeocoder.forwardGeocode(address, this.geocoderOptions)
    .then((result: NativeGeocoderResult[]) => {
      console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
      return result[0];
    })
    .catch((error: any) => {
      console.log(error);
      throw(error);
    });
  }
}
