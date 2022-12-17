export class NotificationContent {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentValid = this.validateContentLength(content);

    if (isContentValid) {
      this.content = content;
    } else {
      throw new Error(
        'Notification content must be between 5 and 240 characters.',
      );
    }
  }
}
