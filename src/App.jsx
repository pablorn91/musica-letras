import { useEffect, useState } from "react"
import Cancion from "./components/Cancion";
import Formulario from "./components/Formulario"
import Info from "./components/Info";
import axios from "axios";

function App() {

  const [ busquedaLetra, setBusquedaLetra ] = useState({});
  const [ letra, setLetra ] = useState('')
  const [ info, setInfo ] = useState({})
  

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0 ) return;
     const consultarApiLetra = async () => {

        const { artista, cancion } = busquedaLetra;

        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista}`;
        
        const [ letra, info ] = await Promise.all([
          axios(url),
          axios(url2)
        ])
        setLetra(letra.data.lyrics)
        setInfo(info.data.artists[0])
     }
     consultarApiLetra()
  }, [busquedaLetra, info])
  
  return (
    <>
      <Formulario 
        setBusquedaLetra={setBusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
          { (Object.keys(info).length !== 0) && (
                <Info
                info={info}
                />
              )}
          </div>
          <div className="col-md-6">
              { (letra!== '') && (
                <Cancion
                letra={letra}
                />
              )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
