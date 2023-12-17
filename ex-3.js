//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor() {
    this.posts = [];
  }
  addPost(post) {
    this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        content: post.content,
        comments: post.comments,
      });
  }
  sharePost(post) {
    console.log(
      `You've shared post “${this.posts[post - 1].title}” to your friend.`
    );
  }
}

class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [];
  }
  addComment(postComment) {
    this.comment.push(postComment);
  }
}

class Comment {
  constructor(id, content, createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }

  addLike() {
    this.like = this.like + 1;
  }
}

class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }

  addGroup(group) {
    this.groupList.push(group);
  }

  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }
  send(commentCreatBy, postTitle) {
    console.log(
      `Notification: ${commentCreatBy} has just commented on this post— ${postTitle}`
    );
  }
}





