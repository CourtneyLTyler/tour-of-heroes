import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from '../hero'
import { HeroModule } from '../heroes/heroes-module'


fdescribe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HeroModule]
    }).compileComponents();
 
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have details', () => {
    let hero = new Hero();
    hero.name = 'unicourt';
    component.hero = hero;
    // this renders changes
    fixture.detectChanges();
    let hero1 = fixture.debugElement.query(By.css('h2'));
    expect(hero1).toBeTruthy();
    expect(hero1.nativeElement.textContent).toBe('UNICOURT Details');
  });
});
