import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogConfirmDumbModule } from './components/dialog-confirm/dialog-confirm-dumb/dialog-confirm-dumb.module';
import { HeaderDumbComponent } from './components/header/header-dumb/header-dumb.component';
import { InterceptorModule } from './components/heroes/interceptor/interceptor.module';
import { HeroesSmartModule } from './components/heroes/module/heroes/heroes-smart.module';
import { HeroesEffects } from './components/store/heroes.effects';
import {
  HEROES_FEATURE_KEY,
  HeroesReducer,
} from './components/store/heroes.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatExpansionModule,
    HeaderDumbComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeroesSmartModule,
    HttpClientModule,
    DialogConfirmDumbModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    }),
    InterceptorModule,
    StoreModule.forRoot({
      [HEROES_FEATURE_KEY]: HeroesReducer,
    }),
    EffectsModule.forRoot([HeroesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
