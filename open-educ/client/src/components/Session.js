
var UserProfile = (function() {
    var userToken = "";
  
    var getToken = function() {
      return userToken;    // Or pull this from cookie/localStorage
    };
  
    var setToken = function(token) {
      userToken = token;     
      // Also set this in cookie/localStorage
    };

    var getToken = function() {
      return userToken;    // Or pull this from cookie/localStorage
    };
  
    var setToken = function(token) {
      userToken = token;     

    };



  
    return {
      getToken: getToken,
      setToken: setToken
    }
  
  })();
  
  export default UserProfile;