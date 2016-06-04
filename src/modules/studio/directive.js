(function () {
    var studio = markdown.studio;
      
    studio.directive('markdownEditor', function () {
        return function ($scope, elem) {
            markdown.editor.init({el:elem[0]}, "/Users/chenlvjie/Documents/GitHub/MARKdown/README.md");
        };
    });

    // tool buttons
    studio.directive('studioNewfile', function(){
        return function($scope, elem) {
            $(elem[0]).on('click', function(){
                markdown.editor.setFile();
            });
        };
    });

    studio.directive('studioSave', function(){
        return function($scope, elem) {
            var editor = markdown.editor;
            //标识是否有未保存的变更.
            $scope.editorChanged = false;

            editor.on('change', function (cm, change) {
                $scope.editorChanged = true;
                $scope.$digest();
            });

            editor.on('saved', function () {
                $scope.editorChanged = false;
                $scope.$digest();
            });
             
            $(elem[0]).on('click',function(){
                editor.save();
            });
        };
    });

    studio.directive('studioOpenfile', function(){
        return function($scope, elem) {
            $(elem[0]).on('click', function(){
                markdown.editor.openFile();
            });
        };
    });

})();