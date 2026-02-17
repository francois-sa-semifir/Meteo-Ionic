import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeteoCardComponent } from './meteo-card.component';

describe('MeteoCardComponent', () => {
  let component: MeteoCardComponent;
  let fixture: ComponentFixture<MeteoCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), MeteoCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MeteoCardComponent);
    component = fixture.componentInstance;
    component.weather = { dt_txt: '2023-10-01 12:00:00', main: { temp: 20 }, weather: [{ icon: '01d' }], wind: { speed: 10 } };
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
