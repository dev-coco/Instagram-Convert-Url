const ig = {
  charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+_',
  encode: id => {
    id = BigInt(id.toString())
    let result = ''
    while (id > 0) {
      const remainder = Number(id % 64n);
      result = ig.charset[remainder] + result
      id = id / 64n
    }
    return result
  },
  decode: url => {
    let result = 0n
    let power = 1n
    for (let i = url.length - 1; i >= 0; i--) {
      const char = url[i]
      const index = ig.charset.indexOf(char)
      result += BigInt(index) * power
      power *= 64n
    }
    return result.toString()
  },
  getPostUrl: id => `https://www.instagram.com/p/${ig.encode(id)}/`,
  getPostID: url => {
    try {
      const formatUrl = url.match(/(?<=\/(p|reel|reels)\/).*/g)[0].replace(/\/.*/g, '')
      return ig.decode(formatUrl)
    } catch {
      console.log('link', url)
      return 'malformed link'
    }
  }
}
