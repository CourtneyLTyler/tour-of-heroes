import { BrowserModule } from '@angular/platform-browser';
import { HeroesComponent } from '../heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    HeroesComponent,
    HeroDetailComponent,
  ],
  providers: []
})

export class HeroModule { }

