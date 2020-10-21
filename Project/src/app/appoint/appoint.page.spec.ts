import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppointPage } from './appoint.page';

describe('AppointPage', () => {
  let component: AppointPage;
  let fixture: ComponentFixture<AppointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
