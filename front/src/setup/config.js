export const hostURL =
  process.env.NODE_ENV === 'production'
    ? 'https://dev.weblite.me/amoozeh/article'
    : // 'https://dev.weblite.me/article'
      'http://localhost:5000/article'

export const coverWappId = '5fc563d54407fd44afe66638'
export const articleWappId = '5fc55cda4407fd44afe66635'
export const commentWappId = '5f12f01d170f91242534aa92'
