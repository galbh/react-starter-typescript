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
      const contentType = res.headers.get('content-type');
      const isJson =
        contentType && contentType.indexOf('application/json') !== -1;

      if (isJson) {
        return res.json().then(data => {
          throw new Error(data.message || data.status);
        });
      }
      return res.text().then(data => {
        throw new Error(data);
      });
    });
  }
}

export default new HttpService();
