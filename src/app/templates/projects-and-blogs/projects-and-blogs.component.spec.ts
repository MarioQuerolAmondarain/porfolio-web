import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAndBlogsComponent } from './projects-and-blogs.component';

describe('ProjectsAndBlogsComponent', () => {
  let component: ProjectsAndBlogsComponent;
  let fixture: ComponentFixture<ProjectsAndBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsAndBlogsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsAndBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
