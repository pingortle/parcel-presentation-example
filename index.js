import {run} from '@cycle/run';
import {makeDOMDriver, div, button} from '@cycle/dom';
import xs from 'xstream';

function main (sources) {
  const add$ = sources.DOM
    .select('.add')
    .events('click')
    .map(ev => 1);

  const count$ = add$.fold((total, change) => total + change, 0);

  return {
    DOM: count$.map(count =>
      div('.counter', [
        'Count: ' + count,
        button('.add', 'Add')
      ])
    )
  };
}

const drivers = {
  DOM: makeDOMDriver('.app')
}
