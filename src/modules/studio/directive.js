(function () {
    var studio = markdown.studio;
      
    studio.directive('markdownEditor', function () {
      return function (scope, elem) {
        markdown.editor.init({el:elem[0]}, "/Users/chenlvjie/Documents/learnNWjs/README.md");
      };
    });
})();