

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
              name: name,
              email: email
          })

    })
    .then(res => res.json())
    .then(data => {   
        document.body.innerHTML = data.id
        console.log(data)
    })
    .catch((response) => {
     document.body.innerHTML = response.message
     console.log(response)
    }) 
}