import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { analysisPage } from './analysis.page';


//mycode for demo page
//import { analysisPageRoutingModule } from './analysis.router.module';
//import { TabsPage } from '../tabs/tabs.page';

//
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    //mycode for demo page
    //analysisPageRoutingModule,
    //TabsPage,
    //
    RouterModule.forChild([{ path: '', component: analysisPage }])
  ],
  declarations: [analysisPage]
})
export class analysisPageModule {}
