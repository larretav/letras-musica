import { useState } from "react"

const Formulario = () => {

  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  });

  return (
    <form >
      <legend>Busca por artista y canción</legend>

      <div className="form-grid">
        <div>
          <label>Artista</label>
          <input 
            type="text"
            name="artista"
            placeholder="Coloca el artista"
            value={busqueda.artista}
            onChange={ (e) => setBusqueda({
              ...busqueda,
              [e.target.name]: e.target.value
            })}
          />
        </div>

        <div>
          <label>Canción</label>
          <input 
            type="text"
            name="cancion"
            placeholder="Coloca la canción"
          />
        </div>

        <input type="submit" value="" />
      </div>
    </form>
  )
}

export default Formulario