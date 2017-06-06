angular.module('app.service', [])

.factory('createFactory',  function($http) {
	var add = function(user) {
		return $http({
			method:'POST',
			url:'/user',
			data: user
		})
    };

  var getPost= function() {
    return {
      user: "Sarah",
			location: "San Francisco",
      img:"https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/18723320_270490490089432_5846592779358044160_n.jpg",
      likes: 22,
      comments: [{
        userName:"priscila",
        message:"Nice posts!!!"
      },
      {
        userName: "JoanneXi",
        message: "true :)"
      }
    ]
    }
  };

	var getUser = function() {
		return {
	    user:"Betty"
		}
	}

	return {
		add: add,
    getPost: getPost,
		getUser: getUser
	};
});
