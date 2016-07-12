//import {computedFrom} from 'aurelia-framework';
import 'jquery';
import 'typeahead'
import {Bloodhound} from 'typeahead';

export class Welcome {
  attached() {
    let answers = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: {
        url: 'http://localhost:9000/me-answers.json',
        transform: function (response) {
          return response.items;
        }
      }
    });

    let promise = answers.initialize();

    promise
      .done(function () { console.log('ready to go!'); })
      .fail(function () { console.log('err, something went wrong :('); });

    $('.typeahead').typeahead({
      classNames: {
        input: 'form-control input-lg',
        suggestion: 'btn btn-primary'
      }
    }, {
        name: 'foo',
        displayKey: 'title',
        source: answers.ttAdapter()
      });
  }
}
