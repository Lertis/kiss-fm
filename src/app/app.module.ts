import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import {
  MainWrapperComponent,
  RadioIconsHeaderComponent,
  RadioPlayerHeaderComponent,
  RadioStationsSidebarNavComponent,
  RadioStationLiveInfoComponent
} from './components'

import { UrlService } from './services'
import { WINDOW_PROVIDERS } from './tokens'

import { initializeAppFactory } from './utils'

const COMPONENTS = [
  MainWrapperComponent,
  RadioIconsHeaderComponent,
  RadioPlayerHeaderComponent,
  RadioStationsSidebarNavComponent,
  RadioStationLiveInfoComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WINDOW_PROVIDERS,
    UrlService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [UrlService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
