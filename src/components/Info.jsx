const Info = ({info}) => {

    const { strArtist, strArtistThumb, strGenre, strBiographyES  } = info;
    return ( 
        <div className="card border-light">

          <div className="card-header bg-primary text-light font-weight-bold ">
                    Información de Artista
          </div>
          <div className="card-body">
          <img src={strArtistThumb} alt={`Imagen de ${strArtist}`} />
          <p className="card-text"> Género: {strGenre}</p>
          <h2 className="card-text"> Biografía: </h2>
          <p className="card-text">{strBiographyES}</p>
          <p className="card-text">

              { (info.strFacebook !== '') && (
                  <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                  </a>
              )}
            
            { (info.strTwitter !== '1') && (
            <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            )}
            { (info.strLastFMChart !== '') && (
            <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-lastfm"></i>
            </a>
            )}
          </p>
          </div>
        </div>
     );
}
 
export default Info;