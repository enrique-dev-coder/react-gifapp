export const getGifs = async (category) => {
  //Cuando te de un error de json parse < ponle https:// al url
  //el encodeURI es una funcion nativa de JS que quita espácio y hace cosas amigables a las uris
  const url = `https://api.giphy.com/v1/gifs/search?api_key=t4ftfZhEE3W97h9dYFNcYx0UzNC4w9LA&q=${encodeURI(
    category
  )}&limit=10`;
  const res = await fetch(url);
  //traemos la data en la resolucion de promesas con respuestas de json
  const { data } = await res.json();
  // hacemos un map para simplificar el arreglo y darle una mejor forma
  const gifs = data.map((data) => ({
    id: data.id,
    title: data.title,
    //por si acaso no trae el url
    url: data.images?.downsized_medium.url,
  }));
  console.log(gifs);
  //asi saco la data de la promesa
  return gifs;
};

//NOTE esto no esta regresando gifs con data , esta regresando una promesa que es la coleccion de imagenes, es por eso que no se puede sacar el data asi nomas de una pomesa
