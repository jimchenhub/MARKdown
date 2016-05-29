(function(){
    var studio = markdown.studio;
    studio.controller('studio', ['$scope', '$state', '$stateParams', 
        function($scope, $state, $stateParams){
            console.log("studio controller");
        }
    ]);
})();