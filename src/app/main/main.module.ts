import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, MainRoutingModule]
})
export class MainModule {}
