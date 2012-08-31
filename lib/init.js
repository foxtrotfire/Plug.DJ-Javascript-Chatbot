// Generated by CoffeeScript 1.3.3
var initEnvironment, initialize, populateUserData, pupOnline;

pupOnline = function() {
  return API.sendChat("WERF");
};

populateUserData = function() {
  var u, users, _i, _len;
  users = API.getUsers();
  data.djs = API.getDJs();
  data.mods = API.getModerators();
  data.host = API.getHost();
  console.log('Users:', users);
  for (_i = 0, _len = users.length; _i < _len; _i++) {
    u = users[_i];
    data.users[u.id] = new User(u);
    data.voteLog[u.id] = {};
  }
};

initEnvironment = function() {
  document.getElementById("button-vote-positive").click();
  document.getElementById("button-sound").click();
  Playback.streamDisabled = true;
  return Playback.stop();
};

initialize = function() {
  pupOnline();
  populateUserData();
  initEnvironment();
  initHooks();
  data.startup();
  data.newSong();
  return data.startAfkInterval();
};