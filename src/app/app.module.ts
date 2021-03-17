import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import '@google/model-viewer';

import {AppComponent} from './app.component';
import { ModelViewerComponent } from './model-viewer/model-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
