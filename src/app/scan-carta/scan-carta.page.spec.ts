import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanCartaPage } from './scan-carta.page';

describe('ScanCartaPage', () => {
  let component: ScanCartaPage;
  let fixture: ComponentFixture<ScanCartaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanCartaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanCartaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
