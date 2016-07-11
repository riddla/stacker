define(["require", "exports", 'typeahead', 'jquery', 'typeahead'], function (require, exports, typeahead_1) {
    "use strict";
    var Welcome = (function () {
        function Welcome() {
        }
        Welcome.prototype.attached = function () {
            var answers = new typeahead_1.Bloodhound({
                datumTokenizer: typeahead_1.Bloodhound.tokenizers.obj.whitespace('title'),
                queryTokenizer: typeahead_1.Bloodhound.tokenizers.whitespace,
                prefetch: {
                    url: 'http://localhost:9000/me-answers.json',
                    transform: function (response) {
                        return response.items;
                    }
                }
            });
            var promise = answers.initialize();
            promise
                .done(function () { console.log('ready to go!'); })
                .fail(function () { console.log('err, something went wrong :('); });
            $('.typeahead').typeahead(null, {
                name: 'foo',
                displayKey: 'title',
                source: answers.ttAdapter()
            });
        };
        return Welcome;
    }());
    exports.Welcome = Welcome;
});

//# sourceMappingURL=welcome.js.map
