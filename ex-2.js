class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send(receiever) {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

const emailNotification = new EmailNotification(
  "55555",
  new Date(),
  "Email noti",
  "rumbling@paradis.com"
);
const smsNotification = new SMSNotification(
  "55555",
  new Date(),
  "SMS noti",
  "0899999999"
);

emailNotification.send();
smsNotification.send();
