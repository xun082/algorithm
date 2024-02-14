/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start
class Twitter {
  constructor() {
    this.tweetTime = 0;
    this.follows = {}; // 映射
    this.tweets = {}; // 用户推文
  }

  // Compose a new tweet.
  postTweet(userId, tweetId) {
    if (!this.tweets[userId]) this.tweets[userId] = [];
    const tweetTime = this.tweetTime++;
    this.tweets[userId].push({
      tweetId,
      createdTime: tweetTime,
    });
  }

  // Retrieve the 10 most recent tweet ids in the user's news feed.
  getNewsFeed(userId) {
    const allId = Array.from(this.follows[userId] || {});
    allId.push(userId);
    const sortedArray = allId
      .reduce((t, id) => t.concat(this.tweets[id] || []), [])
      .sort((a, b) => b.createdTime - a.createdTime)
      .map((item) => item.tweetId);
    return Array.from(new Set(sortedArray)).slice(0, 10);
  }

  // Follower follows a followee.
  follow(followerId, followeeId) {
    if (!this.follows[followerId]) this.follows[followerId] = new Set();
    this.follows[followerId].add(followeeId);
  }

  // Follower unfollows a followee.
  unfollow(followerId, followeeId) {
    if (this.follows[followerId]) this.follows[followerId].delete(followeeId);
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end
