import { randomUUID } from 'node:crypto';
import { Replace } from '../../../helpers/replace';
import { NotificationContent } from './notification-content';

export interface NotificationProps {
  recipientId: string;
  content: NotificationContent;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<
      NotificationProps,
      {
        createdAt?: Date;
      }
    >,
  ) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props?.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set content(content: NotificationContent) {
    this.props.content = content;
  }

  public get content(): NotificationContent {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
}
