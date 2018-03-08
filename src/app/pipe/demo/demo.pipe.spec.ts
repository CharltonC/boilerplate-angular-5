import { DemoPipe } from './demo.pipe';

describe('DemoPipe', () => {
    let pipe;
    beforeEach(() => {
        pipe = new DemoPipe();
    });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert to lowercase', () => {
    const original = 'ABC';
    const result = pipe.transform(original);
    expect(result).toBe('abc');
  });
});
