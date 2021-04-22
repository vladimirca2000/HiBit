import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './shared/navmenu/navmenu.component';
import { RodapeComponent } from './shared/rodape/rodape.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavmenuComponent,
    RodapeComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    BsDropdownConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
