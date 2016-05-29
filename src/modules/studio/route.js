(function(){
    'use strict';

    markdown.studio.config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state('studio', {
          url: "/studio",
          templateUrl: "modules/studio/views/studio.html",
          controller: 'studio'
        });
    });
})();