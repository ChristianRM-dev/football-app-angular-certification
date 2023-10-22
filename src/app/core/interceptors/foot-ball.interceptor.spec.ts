import { TestBed } from '@angular/core/testing';

import { FootBallInterceptor } from './foot-ball.interceptor';

describe('FootBallInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FootBallInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FootBallInterceptor = TestBed.inject(FootBallInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
