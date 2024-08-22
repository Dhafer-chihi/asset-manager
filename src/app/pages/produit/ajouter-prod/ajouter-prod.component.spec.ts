import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProdComponent } from './ajouter-prod.component';

describe('AjouterProdComponent', () => {
  let component: AjouterProdComponent;
  let fixture: ComponentFixture<AjouterProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
