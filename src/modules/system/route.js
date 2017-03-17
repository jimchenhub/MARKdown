markdown.system.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('system', {
        url: "/system",
        templateUrl: "module/system/views/system.html",
        controller: "system",
        onEnter: function(){
            markdown.changeStatus("system");
        }
    });
});
