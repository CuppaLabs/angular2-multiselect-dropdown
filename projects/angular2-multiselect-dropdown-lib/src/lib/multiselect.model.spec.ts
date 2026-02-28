import { MyException } from './multiselect.model';

describe('MyException', () => {
  it('should create an instance', () => {
    const exception = new MyException(404, { msg: 'Not Found' });
    expect(exception).toBeTruthy();
  });

  it('should set status correctly', () => {
    const exception = new MyException(404, { msg: 'Not Found' });
    expect(exception.status).toBe(404);
  });

  it('should set body correctly', () => {
    const body = { msg: 'Not Found', details: 'Resource not available' };
    const exception = new MyException(404, body);
    expect(exception.body).toEqual(body);
  });

  it('should handle different status codes', () => {
    const exception200 = new MyException(200, { msg: 'OK' });
    const exception500 = new MyException(500, { msg: 'Internal Server Error' });
    
    expect(exception200.status).toBe(200);
    expect(exception500.status).toBe(500);
  });

  it('should handle various body types', () => {
    const stringBody = new MyException(400, 'Bad Request');
    const arrayBody = new MyException(400, ['error1', 'error2']);
    const nullBody = new MyException(400, null);

    expect(stringBody.body).toBe('Bad Request');
    expect(arrayBody.body).toEqual(['error1', 'error2']);
    expect(nullBody.body).toBeNull();
  });
});
