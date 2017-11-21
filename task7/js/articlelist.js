
myApp.controller("articlelist",function($scope,$http) {
    $http({
        method:'get',
        url:'/carrots-admin-ajax/a/article/search',
        params: {

        }
    })
        .then(function(response) {
            console.log(response.data);
            $scope.thelist = response.data.data.articleList;
            var pagepage=response.data.data.page;
            console.log(pagepage);
        })
});

// myApp.controller("articlelist",function($scope,$http) {
//     $scope.article = {
//         ajaxData: []
//     };
//     $http({
//         method:'get',
//         url:'/carrots-admin-ajax/a/article/search',
//         params: {
//
//         }
//     })
//         .then(function(res) {
//             if (res.data.code === 0) {
//                 $scope.article.ajaxData = res.data.data.articleList;
//                 console.log(JSON.stringify($scope.article));
//             } else {
//                 alert('服务器异常');
//             }
//
// })