import axios from "axios";

export default {
  // Gets all Messages
  getMessages: function(userInfo, token) {
    console.log(token)
    return axios.post("/api/mail/receiver",userInfo,{ headers :{Authorization: `Bearer ${token}`}});
  },
  // <------------------------------------>
  // Gets a single message by ID
  getMessage: function (messageId) {
    return axios.put("/api/mail/get", messageId);
  },
  // <------------------------------------>
  //sending a message
  sendMessage: function (message) {
    return axios.post("/api/mail/send", message);
  },
  // <------------------------------------>
  // DELETE route for deleting sent mail
  deleteSent: function (deletes) {
    return axios.put("/api/mail/senderDelete", deletes);
  },
  deleteReciever: function (deletes) {
    return axios.put("/api/mail/receiverDelete", deletes);
  },
  // <------------------------------------>
  //sent mail
  mailSender: function (messages) {
    return axios.put("/api/mail/sender", messages);
  },
  // <------------------------------------>
  // friend routes
  friendAdd: function (friend) {
    return axios.post("/api/users/friendAdd", friend);
  },
  friendfind: function(friend) {
    console.log( "this is frined ajskdlf;jaskdlf;j ", friend)
    return axios.post("/api/users/friendFind", friend);
  },


  // <------------------------------------>
  // group routes
  groupAdd: function (group) {
    return axios.post("/api/users/groupAdd", group);
  },
  groupFind: function (groups) {
    return axios.post("/api/users/groupFind", { user: groups });
  },
  // <------------------------------------>
  // game routes
  gamesAdd: function (games) {
    return axios.post("/api/users/gamesAdd", games);
  },
  gamesFind: function (games) {
    return axios.post("/api/users/gamesFind", { user: games });
  },
  // <------------------------------------>
  // blog routes
  blogAdd: function (blogs) {
    return axios.post("/api/blogs/addBlogs", blogs);
  },
  blogFind: function () {
    return axios.get("/api/blogs/getBlogs");
  },
  blogId: function (id) {
    return axios.get("/api/blogs/", id)
  },
  // <------------------------------------>
  // make a user route
  newUser: function (User) {
    return axios.post("/api/newUser", User);
  },
  whoAmI: function (token){
    return axios.get("/api/me",{ headers :{Authorization: `Bearer ${token}`}});
  }

};