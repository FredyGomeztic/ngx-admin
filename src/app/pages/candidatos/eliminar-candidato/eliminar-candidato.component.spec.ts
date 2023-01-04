import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCandidatoComponent } from './eliminar-candidato.component';

describe('EliminarCandidatoComponent', () => {
  let component: EliminarCandidatoComponent;
  let fixture: ComponentFixture<EliminarCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCandidatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
