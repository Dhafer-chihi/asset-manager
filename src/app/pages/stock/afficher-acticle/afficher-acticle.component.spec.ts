import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherActicleComponent } from './afficher-acticle.component';

describe('AfficherActicleComponent', () => {
  let component: AfficherActicleComponent;
  let fixture: ComponentFixture<AfficherActicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfficherActicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherActicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
