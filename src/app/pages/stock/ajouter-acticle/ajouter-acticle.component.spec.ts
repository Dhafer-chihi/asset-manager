import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterActicleComponent } from './ajouter-acticle.component';

describe('AjouterActicleComponent', () => {
  let component: AjouterActicleComponent;
  let fixture: ComponentFixture<AjouterActicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterActicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterActicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
