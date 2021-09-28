import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'task'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('task');
  });

  it('should get max prime number from array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    const number = 17;

    const comp = new AppComponent();

    expect(comp.maxPrime(array)).toEqual(number);


  })
});
