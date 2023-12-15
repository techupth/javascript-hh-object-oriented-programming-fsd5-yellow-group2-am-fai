class EmailNotification {
  constructor(notificationId, createdTime, content, receiever) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiever;
  }

  send(email) {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }

  send(phoneNumber) {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
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
