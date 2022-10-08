
const Formulario = () => {
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
            
          />
        </div>
      </div>
    </form>
  )
}

export default Formulario