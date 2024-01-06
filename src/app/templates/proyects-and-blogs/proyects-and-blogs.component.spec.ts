import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsAndBlogsComponent } from './proyects-and-blogs.component';

describe('ProyectsAndBlogsComponent', () => {
  let component: ProyectsAndBlogsComponent;
  let fixture: ComponentFixture<ProyectsAndBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectsAndBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectsAndBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
