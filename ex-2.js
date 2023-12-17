class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
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

const johnnyEmail = new EmailNotification(
  "1234",
  new Date(),
  "Hello John",
  "Jeno@gmail.com"
);
johnnyEmail.send();
//console.log(johnnyEmail)

const doyoungEmail = new SMSNotification(
  "2345",
  new Date(),
  "Just say hi",
  "095-845-8705"
);
doyoungEmail.send();
//console.log(doyoungEmail)
