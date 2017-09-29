import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDinoComponent } from './new-dino.component';

describe('NewDinoComponent', () => {
  let component: NewDinoComponent;
  let fixture: ComponentFixture<NewDinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
