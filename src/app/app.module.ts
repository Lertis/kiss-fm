import { HttpClientModule } from '@angular/common/http'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { Store, StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { reducers } from './store/reducers'

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
import { SongsEffects } from './store/effects/radio'

import { BASE_URL, BASE_URL_TOKEN, WINDOW_PROVIDERS } from './tokens'

import { initializeAppFactoryDefineDynamicRoutes, initializeAppFactoryStylingVariables } from './utils'

import { environment } from '../environments/environment'


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
    HttpClientModule,
    EffectsModule.forRoot([SongsEffects]),
    StoreModule.forRoot(reducers), environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    WINDOW_PROVIDERS,
    UrlService,
    SongsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactoryStylingVariables,
      deps: [UrlService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactoryDefineDynamicRoutes,
      deps: [SongsService, Router, Store],
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
