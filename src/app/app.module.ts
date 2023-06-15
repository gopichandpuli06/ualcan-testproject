import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*my changes 
reload/ refresh page problem 
*/
//import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';
//

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    //{provide: LocationStrategy, useClass: HashLocationStrategy}  // refresh page problem
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
