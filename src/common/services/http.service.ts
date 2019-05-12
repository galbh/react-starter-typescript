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
      const isJson = HttpService.isJson(res);
      if (res.ok) {
        if (isJson) {
          return res.json();
        }
        return res.text();
      }

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

  static isJson(res: Response) {
    const contentType = res.headers.get('content-type');
    return contentType && contentType.indexOf('application/json') !== -1;
  }
}

export default new HttpService();
