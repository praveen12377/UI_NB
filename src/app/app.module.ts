import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlockchaintechnologyComponent } from './components/blockchaintechnology/blockchaintechnology.component';
import { BusinessoutsourcingComponent } from './components/businessoutsourcing/businessoutsourcing.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { EventsComponent } from './components/events/events.component';
import { InformationtechnologyComponent } from './components/informationtechnology/informationtechnology.component';
import { MobileapplicationsComponent } from './components/mobileapplications/mobileapplications.component';
import { TradingplatformComponent } from './components/tradingplatform/tradingplatform.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ChakravuyhaagrotechComponent } from './components/chakravuyhaagrotech/chakravuyhaagrotech.component';
import { DevopssolutionsComponent } from './components/devopssolutions/devopssolutions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    BlockchaintechnologyComponent,
    BusinessoutsourcingComponent,
    ContactusComponent,
    EventsComponent,
    InformationtechnologyComponent,
    MobileapplicationsComponent,
    TradingplatformComponent,
    FooterComponent,
    HeaderComponent,
    ChakravuyhaagrotechComponent,
    DevopssolutionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
