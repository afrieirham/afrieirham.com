export async function fetchArticles() {
  const data = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_USER_ARTICLES,
      variables: { page: 0 },
    }),
  })

  return data.json()
}

const GET_USER_ARTICLES = `
  {
    user(username: "afrieirham") {
      publication {
        posts {
          title
          coverImage
          slug
          brief
        }
      }
    }
  }
`
