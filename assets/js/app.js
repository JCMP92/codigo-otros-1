const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //name es una clase.
const $b = document.querySelector('.blog'); // blog es una clase, estaba definido como id.
const $l = document.querySelector('.location');

async function displayUser(username) {
  //Se completó la syntax de la función como un async
  $n.textContent = 'cargando...';
  try{
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //declaré la variable data y asigne su valor.
  console.log(response);
  $n.textContent = `${data.name}`; //uso de backticks para que se reconociera la suntax de literal strings.
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
  } catch (error) {
    throw new Error ('Error');
  }

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);
