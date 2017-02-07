const resolveJson = response => {
  return response.json()
  .then(obj => {
    response.json = obj;
    return response;
  });
}

const checkStatus = response => {
  if (!response.ok) return Promise.reject(response.json);
  return response;
};

const followLinks = (method, options) => response => {
  const data = response.json;
  const links = response.headers.get('Link');

  if (links) {
    const nextLink = links
      .split(', ')
      .map(link => {
        const matches = link.match(/^<([a-z0-9:/.?=&_-]+)>; rel="([a-z]+)"$/);
        return {
          url: matches[1],
          rel: matches[2]
        };
      })
      .find(link => link.rel == 'next');

    if (nextLink) {
      return HttpClient._request(method, nextLink.url, options)
      .then(moreData => data.concat(moreData))
    }
  }

  return data;
};

const HttpClient = {
  _request(method, url, options = {}) {
    if (options.body !== undefined
      && typeof options.body !== 'string')
    {
      options.body = JSON.stringify(options.body);
    }

    return fetch(url, {
      method,
      ...options,
    })
    .then(resolveJson)
    .then(checkStatus)
    .then(followLinks(method, options));
  },

  get(url, options) {
    return this._request('GET', url, options);
  },

  post(url, body) {
    return this._request('POST', url, { body });
  },

  put(url, body) {
    return this._request('PUT', url, { body });
  }
};

export default HttpClient;
