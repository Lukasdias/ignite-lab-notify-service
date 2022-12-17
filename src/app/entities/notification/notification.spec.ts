import { randomUUID } from 'node:crypto';
import { Notification } from './notification';
import { NotificationContent } from './notification-content';

describe('Notification', () => {
  it('should create a notification', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      content: new NotificationContent('Hello World!'),
      category: 'test',
    });
    expect(notification).toBeTruthy();
  });
  it('should create a notification with a custom id', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      content: new NotificationContent('Hello World!'),
      category: 'test',
    });
    expect(notification.id).toBeTruthy();
  });
  it('should create a notification with a content', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      content: new NotificationContent('Hello World!'),
      category: 'test',
    });
    expect(notification.content).toBeTruthy();
  });
  it('should create a notification with a category', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      content: new NotificationContent('Hello World!'),
      category: 'test',
    });
    expect(notification.category).toBeTruthy();
  });
  it('should create a notification with a recipientId', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      content: new NotificationContent('Hello World!'),
      category: 'test',
    });
    expect(notification.recipientId).toBeTruthy();
  });
  it('should create a notification with a createdAt', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      content: new NotificationContent('Hello World!'),
      category: 'test',
    });
    expect(notification.createdAt).toBeTruthy();
  });
});
