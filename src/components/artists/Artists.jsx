import { Link } from 'react-router-dom'
import { homeDataArtisits } from '../../../public/data'
import './artists.css'

const Artists = () => {
  return (
    <div className='distArtists container mainPadding'>
      <h1 className='distArtistsTitle'>الفنانين المميزين</h1>
      <div className="distArtistsCards girdRepeat">
        {
          homeDataArtisits.map((artist) => {
            return (
              <div className="distArtistsCard" key={artist.id}>
                <Link to={`/singlePage/${artist.id}`}>
                  <div className="distArtistImage">
                    <img src={artist.image} alt="" />
                  </div>

                  <div className="distArtistAbout">
                    <h3 className='distArtistName'>{artist.name}</h3>
                    <h4 className='distArtistJob'>{artist.job}</h4>
                  </div>
                  
                  <p className='distArtistDesc'>{artist.caption}</p>
                </Link>

                <div className="distArtistsocial">
                <a className="facebook" href={artist.socialLinks.facebook}><i className="fa-brands fa-facebook-f"></i></a>
                <a className="instagram" href={artist.socialLinks.instagram}><i className="fa-brands fa-instagram"></i></a>
                <a className="youtube" href={artist.socialLinks.youtube}><i className="fa-brands fa-youtube"></i></a>
                <a className="twitter" href={artist.socialLinks.twitter}><i className="fa-brands fa-twitter"></i></a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Artists