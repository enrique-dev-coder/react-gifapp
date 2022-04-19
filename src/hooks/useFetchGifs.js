import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

//los hooks empiezan con use
//los hooks tambien pueden tener un estado
//en general funcionan como si fueran functional components
//categoria que le mandas
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    //getGifs retorna una promesa y con setState modificas el estado
    //tomando como que el primer argumento del then es la data del return de la promesa
    getGifs(category).then((gifs) => {
      setTimeout(() => {
        //el gifs es un array de 10 que sale del return de la promesa
        console.log(gifs);
        setState({
          data: gifs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  //en el componente padre por medio del destrucutring se saca la {data}
  return state; //{data:[],loading:true} datos inciales
};

//El useEffect es para solo si la categoria cambia, no otra cosa del DOm como un boton o un onChange
//NOTE CON ese ste timeout se puede poner una aniamcion o video en lo que esta el loading
