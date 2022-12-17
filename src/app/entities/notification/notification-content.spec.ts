import { NotificationContent } from './notification-content';

describe('NotificationContent', () => {
  it('should create a notification content', () => {
    const content = new NotificationContent('Hello World');
    expect(content).toBeTruthy();
  });

  it('should return the content', () => {
    const content = new NotificationContent('Hello World');
    expect(content.value).toEqual('Hello World');
  });

  it('should return string', () => {
    const content = new NotificationContent('Hello World');
    expect(typeof content.value).toEqual('string');
  });

  it('should throw an error if the content is too short', () => {
    expect(() => new NotificationContent('')).toThrow();
  });

  it('should throw an error if the content is too long', () => {
    expect(() => new NotificationContent('z'.repeat(241))).toThrow();
  });
});
