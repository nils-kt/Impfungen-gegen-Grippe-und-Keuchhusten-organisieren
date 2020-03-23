/**
 * Tiny wrapper around window.fetch().
 * @author Steven Agyekum <Burnett01>
 * @class
 */
export class Api {
  /**
   * Creates an Api instance.
   * @param {String} baseUrl 
   */
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }
  /**
   * Performs a fetch request.
   * The return value (Array) should be
   * destructured by the caller.
   * @param {String} path - The path
   * @param {Object} opts - The options
   * @returns {Array} - [true/false, data/err]
   */
  async request(path, opts) {
    try {
      const res = await fetch(this.baseUrl+path, opts)
      if (!res.ok) throw new Error(res)
      return [true, res]
    } catch (err) {
      return [false, err]
    }
  }
  /**
   * API wrapper for GET.
   * @param {String} path - The path
   * @param {Object} opts - The options
   */
  get(path, opts) {
    return this.request(path, opts)
  }
  /**
   * API wrapper for POST.
   * @param {String} path - The path
   * @param {String} body - The payload
   * @param {Object} opts - The options
   */
  post(path, body, opts) {
    opts = opts || {}
    opts.headers = opts.headers || {}
    opts.headers['Content-Type'] = 'application/json'
    return this.request(path, {
      ...opts,
      'body': JSON.stringify(body),
      'method': 'POST'
    })
  }
}
