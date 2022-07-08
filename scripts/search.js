export class search {
  static getUser(user) {
    const endpoint = `https://api.github.com/users/${user}`;
    
    return fetch(endpoint)
    .then(data => data.json())
    .then(({name , login, public_repos , followers, avatar_url}) => {
      return {
      name,
      login,
      repositories: public_repos,
      avatar: avatar_url,
      followers,
      }
    })
  }  
}