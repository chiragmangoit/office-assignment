import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { HighlightDirective } from './directives/highlight.directive';
import { GameContorComponent } from './game-contor/game-contor.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { RendererDirective } from './directives/renderer.directive';



@NgModule({
  declarations: [								
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    ContentComponent,
    FooterComponent,
    CustomSliderComponent,
    HighlightDirective,
    GameContorComponent,
    EvenComponent,
    OddComponent,
    RendererDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
