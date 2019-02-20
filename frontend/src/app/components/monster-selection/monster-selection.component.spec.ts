import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonsterSelectionComponent } from './monster-selection.component';
import { HttpClientModule } from '@angular/common/http';

describe('MonsterSelectionComponent', () => {
  let component: MonsterSelectionComponent;
  let fixture: ComponentFixture<MonsterSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterSelectionComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
