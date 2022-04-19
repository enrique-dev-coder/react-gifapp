import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon ball'];
  //REVIEW se usa map porque es una expresion que regresa algo , a diferencia de un ciclo for que no regresa nada
  //NOTE aunque es comun NOOO se debe usar el key = {i} tomando el mismo indice de un map porque no se reacomodan los indices al borrar algo
  const [categories, setCategories] = useState(['One Punch']);

  /*   const handleAdd = () => {
    //agregas un elemento al arreglo sin modificar el array original
    //Obvio aqui solo agregas el valor predeterminado asi que es mejor pooner un input y tomar el valor de ese input
    //aqui pues te va a agregar el mismo titulo  las veces que se le de click
    //lo importante aqui es que usamos el setCategories para hacer modificaciones al estado
    setCategories([...categories, 'Jujutsu no kaizen']);
    //otra solucion tomando en cuenta como usar el estado de argumento en un callback
    //ta bueno el truco yo no lo sabia
    //setCategories(cats=>[...cats,"HunterXHunter"])
  }; */

  return (
    <div>
      {' '}
      <h2>Gif Expert App</h2>
      <AddCategory
        //enviar funcion como propiedad
        //el truco aqui es que envias la funcion pero como referencia, por eso pones el valor en el hijo
        setCategories={setCategories}
      />
      <hr />
      <ol>
        {categories.map((c) => (
          <GifGrid key={c} category={c} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
