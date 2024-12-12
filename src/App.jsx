import './all.min.css'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Categories from './components/categories/Categories'
import Artists from './components/artists/Artists'
import SinglePage from './components/singlePage/SinglePage'
import Market from './components/market/Market'
import Forum from './components/forum/Forum'
import Raise from './components/raise/Raise'
import Gallery from './components/gallery/Gallery'
import AboutUs from './components/aboutUs/AboutUs'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/categories' element={<Categories />} exact />
        <Route path='/artists' element={<Artists />} exact />
        <Route path='/singlePage/:id' element={<SinglePage />} exact />
        <Route path='/market' element={<Market />} exact />
        <Route path='/forum' element={<Forum />} exact />
        <Route path='/raise' element={<Raise />} exact />
        <Route path='/gallery' element={<Gallery />} exact />
        <Route path='/aboutUs' element={<AboutUs />} exact />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
