
myApp.controller("articlelist",function($scope,$http,$filter) {
    $http({
        method:'get',
        url:'/carrots-admin-ajax/a/article/search',
        params: {

        }
    })
        .then(function successCallback(response) {
            console.log(response.data);
            $scope.thelist = response.data.data.articleList;
            $scope.currentpage=response.data.data.page;
        });
});
myApp.filter('type',function() {
    return function(type) {
        switch (type){
            case 0:
                type="首页banner";
                break;
            case 1:
                type="找职位banner";
                break;
            case 2:
                type="找精英banner";
                break;
            case 3:
                type="行业大图";
                break;
            default:
                type="文章";
                break;
        }
        return type;
    }
});
myApp.filter('status',function() {
    return function(status) {
        switch (status) {
            case 1:
                status="草稿";
                break;
            case 2:
                status="上线";
                break;
            default:
                status="草稿";
                break;
        }
        return status;
    }
});