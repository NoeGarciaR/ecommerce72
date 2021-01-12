import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropZoneImgProductComponent } from './drop-zone-img-product.component';

describe('DropZoneImgProductComponent', () => {
  let component: DropZoneImgProductComponent;
  let fixture: ComponentFixture<DropZoneImgProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropZoneImgProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropZoneImgProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
