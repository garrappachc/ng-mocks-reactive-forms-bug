import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

describe('FormComponent without ngMocks', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('FormComponent with ngMocks', () => {
  let component: FormComponent;
  let fixture: MockedComponentFixture<FormComponent>;

  beforeEach(() => MockBuilder(FormComponent).keep(ReactiveFormsModule));

  beforeEach(() => {
    fixture = MockRender(FormComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
