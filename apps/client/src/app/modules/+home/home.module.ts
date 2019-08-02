import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MenuTracking } from './home/menu/tracking/tracking';
import { MenuOffices } from './home/menu/offices/offices';
import { HomeRoutesModule } from './home.routes.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    MenuTracking,
    MenuOffices
  ],
  imports: [
    CommonModule,
    HomeRoutesModule,
    TabsModule,
    BsDropdownModule
  ],
  providers: []
})

export class HomeModule {  }
