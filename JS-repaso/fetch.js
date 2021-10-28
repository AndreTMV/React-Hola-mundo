const url = "https://jsonplaceholder.typicode.com/users";
const fn = async () => {
  const respone = await fetch(url, {
    method: "POST", //para crear recursos en una api rest(GET,POST,PUT,PATCH,DELETE)
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer acadebieseexistiruntokendeautoizacion",
    },
    body: JSON.stringify({
      name: "Chanchito Feliz",
      website: "google.com",
    }),
  });
  const data = await respone.json();
  console.log(data);
};

fn();
