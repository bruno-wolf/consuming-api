async function getContent() {
  try {
    const response = await fetch('http://localhost:3333/');
  } catch (error) {
    console.error('Dammm')
  }
}

getContent();