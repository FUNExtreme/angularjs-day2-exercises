export function FocusDirective() {
    var directive = {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element[0].focus();
        }
    };

    return directive;
}
FocusDirective.iid = "focus";