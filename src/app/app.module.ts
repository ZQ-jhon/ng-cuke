import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppRoutingModule } from './app.routing.module';
import { HelloComponent } from './app-entry/hello.component';

const COMPONENTS = [
  AppComponent,
  HelloComponent,
]
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
