import { Endpoint } from '../models';

class HttpService {
  fetch(options: Endpoint) {
    const { url, method, body } = options;
    const headers = new Headers();

    if (options.contentType) {
      headers.append('Content-Type', options.contentType);
    }

    return fetch(url, {
      method,
      headers,
      credentials: 'same-origin',
      body
    }).then(res => {
      if (res.ok) {
        return res.text().then(text => {
          if (text) {
            return JSON.parse(text);
          }
          return text;
        });
      }

      return res.json().then(json => {
        throw new Error(json.message || json.status);
      });
    });
  }
}

export default new HttpService();
