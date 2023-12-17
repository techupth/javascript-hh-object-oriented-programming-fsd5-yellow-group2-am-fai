class EmailNotification {
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

class SMSNotification {
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

const johnnyEmail = new EmailNotification(
  "1234",
  new Date(),
  "Hello Jeno",
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
