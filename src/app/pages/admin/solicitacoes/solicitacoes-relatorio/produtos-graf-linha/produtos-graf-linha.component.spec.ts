import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosGrafLinhaComponent } from './produtos-graf-linha.component';

describe('ProdutosGrafLinhaComponent', () => {
  let component: ProdutosGrafLinhaComponent;
  let fixture: ComponentFixture<ProdutosGrafLinhaComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosGrafLinhaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosGrafLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
