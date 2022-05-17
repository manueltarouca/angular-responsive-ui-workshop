import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule  } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoDisplayMobileComponent } from './components/no-display-mobile/no-display-mobile.component';
import { LayoutResponsiveComponent } from './components/layout-responsive/layout-responsive.component';
import { ContentItemComponent } from './components/content-item/content-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NoDisplayMobileComponent,
    LayoutResponsiveComponent,
    ContentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
