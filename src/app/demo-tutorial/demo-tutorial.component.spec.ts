import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTutorialComponent } from './demo-tutorial.component';

describe('DemoTutorialComponent', () => {
  let component: DemoTutorialComponent;
  let fixture: ComponentFixture<DemoTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
