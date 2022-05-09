
var UserProfile = (function() {
    var userToken = "";
  
    var getToken = function() {
      return userToken;    // Or pull this from cookie/localStorage
    };
  
    var setToken = function(token) {
      userToken = token;     
      // Also set this in cookie/localStorage
    };

    var getEcole = function(idEcole) {
      return idEcole;    // Or pull this from cookie/localStorage
    };
  
    var setEcole = function(idEcole) {
      idEcole = idEcole;     

    };



  
    return {
      getToken: getToken,
      setToken: setToken,
      getEcole : getEcole,
      setEcole : setEcole
    }
  
  })();
  
  export default UserProfile;