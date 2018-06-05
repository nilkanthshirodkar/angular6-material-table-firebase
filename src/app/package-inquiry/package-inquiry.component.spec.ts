import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageInquiryComponent } from './package-inquiry.component';

describe('PackageInquiryComponent', () => {
  let component: PackageInquiryComponent;
  let fixture: ComponentFixture<PackageInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
