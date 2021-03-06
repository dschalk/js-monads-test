import {div, h1, h2, button} from '@cycle/dom'

const view = state$ =>
  // mapping over our merged model to update 'count'
  state$.map(({counter}) => {
    return div(`.homepage`, [
      h1(`.content-subhead`, [`Home Page`]),
      h1([`Welcome to the Home Page`]),
      div(`.pure-u-1-2 .counter-table`, [
        button(`.decrement .pure-button .button-error .pure-u-1-2`, `Decrement`), // eslint-disable-line
        button(`.increment .pure-button .button-success .pure-u-1-2`, `Increment`), // eslint-disable-line
        div(`.pure-u-1 .counter-table-result`, [
          h2(`Counter: ${counter}`),
        ]),
      ]),
    ])
  }
  )

export default view
