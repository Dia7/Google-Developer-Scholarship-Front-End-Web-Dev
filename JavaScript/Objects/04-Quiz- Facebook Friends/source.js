/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
  name: "Diana",
  friends: 100,
  messages: ["Hello World!", "How are you today?", "Nice weather, ha?!"],
  postMessage: function(massage){
      return facebookProfile.messages.push(massage);
  },
  deleteMessage: function(index){
      return facebookProfile.messages.splice(index, 1);
  },
  addFriend: function(){
      return facebookProfile.friends += 1;
  },
  removeFriend: function(){
      return facebookProfile.friends -= 1;
  }
};
facebookProfile.removeFriend();
console.log(facebookProfile.friends);
