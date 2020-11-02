async function getContent() {
  try {
    const response = await fetch('http://localhost:3333/');
    const data = await response.json();
    showData(data);
  } catch (error) {
    console.error(error)
  }
}

getContent();

function showData(users){
  let output = '';
  for( let user of users ){
    output += `<li>${user.name}</li>`
  }
  document.querySelector('main').innerHTML = output;
}