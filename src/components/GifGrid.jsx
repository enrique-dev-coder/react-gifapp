//import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

const GifGrid = ({ category }) => {
  //este custom hook returna un estado y el loading
  //aqui obtenemos la data de una llamada a un custom hook
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando xdxd</p>}
      <div className="card-grid">
        {images.map((img) => (
          //pasar  todos los datos de el array
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
