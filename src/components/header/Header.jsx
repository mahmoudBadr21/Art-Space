import './header.css'
import { useState, useEffect } from 'react'
import Header1 from "../../assets/header/header-1.png"
import Header2 from "../../assets/header/header-2.png"
import Header3 from "../../assets/header/header-3.png"
import Header4 from "../../assets/header/header-4.png"

const Header = () => {
  const [rows, setRows] = useState([
    {id: 1, images: [Header1]},
    {id: 2, images: [Header2, Header3]},
    {id: 3, images: [Header4]},
  ])

  const [animatingRows, setAnimatingRows] = useState({first: null, second: null});
  const getRandomIndices = (length) => {
    let first = Math.floor(Math.random() * length)
    let second;
    do {
      second = Math.floor(Math.random() * length)
    } while (second === first);
    return [first, second]
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const [firstIndex, secondIndex] = getRandomIndices(rows.length)
      setAnimatingRows({first: firstIndex, second: secondIndex})

      setTimeout(() => {
        setRows((prevRows) => {
          const newRows = [...prevRows];
          [newRows[firstIndex], newRows[secondIndex]] = [
            newRows[secondIndex],
            newRows[firstIndex],
          ];
          return newRows
        })

        setTimeout(() => {
          setAnimatingRows({first: null, second: null});
        }, 500)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [rows.length])

  const getImgSmallStyle = () => {
    if (document.documentElement.clientWidth <= 860) {
      return {width: "150px"}
    }
  }

  return (
    <div className="header flexCenterSpace">
      <div className="image-container">
        {Array.isArray(rows) &&
          rows.map((row, index) => {
            return (
              <div
                className={`row ${
                  animatingRows.first === index
                    ? "move-up"
                    : animatingRows.second === index
                    ? "move-dwon"
                    : ""
                }`}
                key={row.id}
              >
                {row.images.map((image, imageIndex) => {
                  return <img src={image} alt="" key={imageIndex} style={row.id === 2 ? getImgSmallStyle() : null} />;
                })}
              </div>
            );
          })}
      </div>

      <div className="text">
        <p>
          <span className='prag-main'>مرحبًا بك في عالم الإبداع الفني!</span> <br />
          استكشف أسرار الفن وأحدث المزادات،
          وتعمّق في جمال اللوحات، النحت، والفن ثلاثي الابعاد.
        </p>
      </div>
    </div>
  );
}

export default Header