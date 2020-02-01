import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlockchaintechnologyComponent } from './components/blockchaintechnology/blockchaintechnology.component';
import { TradingplatformComponent } from './components/tradingplatform/tradingplatform.component';
import { InformationtechnologyComponent } from './components/informationtechnology/informationtechnology.component';
import { MobileapplicationsComponent } from './components/mobileapplications/mobileapplications.component';
import { BusinessoutsourcingComponent } from './components/businessoutsourcing/businessoutsourcing.component';
import { ChakravuyhaagrotechComponent } from './components/chakravuyhaagrotech/chakravuyhaagrotech.component';
import { EventsComponent } from './components/events/events.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DevopssolutionsComponent } from './components/devopssolutions/devopssolutions.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'about-us', component: AboutusComponent},
  { path:'blockChain-technology', component: BlockchaintechnologyComponent},
  { path:'trading-platform', component: TradingplatformComponent},
  { path:'information-technology', component: InformationtechnologyComponent},
  { path:'mobile-application', component: MobileapplicationsComponent},
  { path: 'devops-solutions', component: DevopssolutionsComponent},
  { path:'business-outsourcing', component: BusinessoutsourcingComponent},
  { path:'chakravuyha-agrotech', component: ChakravuyhaagrotechComponent},
  { path:'events', component: EventsComponent},
  { path:'contact-us', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
