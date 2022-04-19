import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [input, setInput] = useState('');
  //el input trae el valaor de su atributo value, se tiene que cambiar con un evento onchange
  // se extrae el valor del target el devento del input
  //el evento de onchange es para cambiar el valor del formulario
  //aqui usas el set input para poner el valor del estado
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    //quitar refresh completo
    //el form funciona con enter o boton  de type submit
    e.preventDefault();

    //llamar funcion de setCategories
    //NOTE podriamos pasar el estado pero hay una formas mas elegante
    //NOTe el setCategories ya trae una referencia a ese estado entonces podemos usarlo como primer argumento
    //NOTe ese primer argumento es de ahuvo el estado, lo copiamos y le metes el valor del input

    //pequeña validacion aunque se requiere mucho mas como validar desde back end
    if (input.trim().length > 2) {
      setCategories((cats) => [input, ...cats]);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInputChange}
        value={input}
        placeholder="Escribe una categoria"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
