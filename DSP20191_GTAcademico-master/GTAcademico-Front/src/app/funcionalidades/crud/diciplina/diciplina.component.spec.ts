import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DiciplinaComponent } from './diciplina.component';


describe('DiciplinaComponent', () => {
  let component: DiciplinaComponent;
  let fixture: ComponentFixture<DiciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
