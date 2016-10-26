require('es6-promise').polyfill();
require('isomorphic-fetch');

import ServerActions from './actions/ServerActions';

let query = encodeURIComponent(`{
  links {
    _id,
    title,
    url
  }
}`);

let API = {
  fetchLinks() {
    console.log('1. IN API');
    // Ajax request to load /data/links
    fetch('/graphql?query=' + query , {
      method: 'POST',
    })
      .then(response => {
        if (response.status >= 400) {
            throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(response => {
        ServerActions.receiveLinks(response.data.links);
      });
  }
}
export default API;
