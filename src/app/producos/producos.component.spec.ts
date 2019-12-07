import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducosComponent } from './producos.component';

describe('ProducosComponent', () => {
  let component: ProducosComponent;
  let fixture: ComponentFixture<ProducosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
