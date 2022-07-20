import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import {
  RadioIconsHeaderComponent,
  RadioPlayerHeaderComponent,
  RadioStationsSidebarNavComponent,
  RadioStationLiveInfoComponent
} from './components'

@NgModule({
  declarations: [
    AppComponent,
    RadioIconsHeaderComponent,
    RadioPlayerHeaderComponent,
    RadioStationsSidebarNavComponent,
    RadioStationLiveInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
