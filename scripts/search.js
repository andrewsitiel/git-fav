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
  
  static inputAtEnterButton() {
    const input = document.querySelector(".input-wrapper input")
    const inputButton = document.querySelector(".input-wrapper button")

    input.addEventListener("keypress", (pressedKey) => {
    
        if(pressedKey.key === "Enter") {
          pressedKey.preventDefault()
          inputButton.click()
        }
    })
  }
}
