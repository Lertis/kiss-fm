import { HttpClientModule } from '@angular/common/http'
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
import { SongsService } from './services/facades'
import { BASE_URL, BASE_URL_TOKEN, WINDOW_PROVIDERS } from './tokens'

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WINDOW_PROVIDERS,
    UrlService,
    SongsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [UrlService],
      multi: true
    },
    {
      provide: BASE_URL_TOKEN,
      useValue: BASE_URL
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
