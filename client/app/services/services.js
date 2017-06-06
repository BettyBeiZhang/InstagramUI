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
			// i am not using this dataTime for right now.
      dateTime:"7 days ago",
      img:"https://scontent.cdninstagram.com/t51.2885-15/e15/18644871_176797742850188_6856437975463493632_n.jpg",
      likes: 22,
      comments: [{
        userName:"priscila",
        message:"Nice posts!!!"
      },
      {
        userName: "JoanneXin",
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
