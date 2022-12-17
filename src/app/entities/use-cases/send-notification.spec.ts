import { randomUUID } from 'node:crypto';
import { InMemoryNotificationsRepository } from '../../../../test/repositories/in-memory-notifications-repository';

import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('It should be able to sendo notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is notification',
      category: 'social',
      recipientId: randomUUID(),
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
