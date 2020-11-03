import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MediosPage } from './medios.page';

describe('MediosPage', () => {
  let component: MediosPage;
  let fixture: ComponentFixture<MediosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MediosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
