import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/notifications-repository';
import { Notification, NotificationContent } from './../notification';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    req: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, category, content } = req;

    const notification = new Notification({
      recipientId,
      content: new NotificationContent(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
