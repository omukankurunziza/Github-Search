import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'

import { GithubFormComponent } from './github-form/github-form.component';
import { StrikethroughDirective } from './strikethrough.directive';


@NgModule({
  declarations: [
    AppComponent,
    
    GithubFormComponent,
    
    StrikethroughDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
