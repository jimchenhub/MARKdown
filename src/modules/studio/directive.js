(function () {
    var studio = markdown.studio;
    var fs = require('fs');

    studio.directive('markdownEditor', function () {
        return function ($scope, elem) {
            markdown.editor.init({el:elem[0]});
            // 保存后产生消息
            markdown.editor.on('saved', function(filepath){
                var fileNameArr = filepath.split("/");
                markdown.msg('文件:' + fileNameArr[fileNameArr.length - 1] + '保存成功!');
            });
            // 监听拖动事件
            document.ondrop = function(e){
                var path, $target = $(e.target), dir, system;
                e.preventDefault();
                if (!e.dataTranfer.files.length) {
                    return;
                }
                path = e.dataTranfer.files[0].path;
                //非目录，而且包含.md才会在编辑器里打开
                if (!fs.stateSync(path).isDirectory() && ~path.indexOf('.md')) {
                    markdown.editor.setFile(path);
                }
            };
            // 双击打开md文件
            var filepath = nw.App.argv[0];
        	~filepath.indexOf('.md') && markdown.editor.setFile(filepath);
            //如果程序已经打开,则会触发open事件
            nw.App.on('open', function(cmdline) {
                window.focus();
                filepath = cmdline.split(' ')[2].replace(/\"/g,'');
                ~filepath.indexOf('.md') && markdown.editor.setFile(filepath);
            });
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
