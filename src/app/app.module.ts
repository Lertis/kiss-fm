import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import {
  RadioIconsHeaderComponent,
  RadioPlayerHeaderComponent,
  RadioStationsSidebarNavComponent,
  RadioStationLiveInfoComponent
} from './components'

import { initializeAppFactory } from './utils'

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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeAppFactory,
      deps: [],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
