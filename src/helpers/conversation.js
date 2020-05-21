import data from "../../data/conversations.json";
import users from "../../data/friends.json";
import currentUser from "../../data/settings.json";

export const currentConversation = user =>
  data.conversations.find(record => {
    const users = record.users;
    return users.includes(currentUser.id) && users.includes(user.id);
  });

export const getUser = id => {
  if (id === currentUser.id) {
    return currentUser;
  }

  return users.friends.find(record => record.id == id);
};
