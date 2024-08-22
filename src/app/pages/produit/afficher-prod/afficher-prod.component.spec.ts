import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherProdComponent } from './afficher-prod.component';

describe('AfficherProdComponent', () => {
  let component: AfficherProdComponent;
  let fixture: ComponentFixture<AfficherProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfficherProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
