import React from 'react'
import './homescreen.css'
import Navbar from '../navbar/Navbar'
import Banner from '../banner/Banner'
import Row from '../rows/Row'
import requests from '../../Request'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Navbar/>
     <Banner/>
     <Row title= 'NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
     <Row title= 'Trending Now' fetchURL={requests.fetchTrending}/>
     <Row title= 'Top Rated' fetchURL={requests.fetchTopRated}/>
    <Row title= 'Action Movies' fetchURL={requests.fetchActionMovies}/>
    <Row title= 'Comedy Movies' fetchURL={requests.fetchComedyMovies}/>
     <Row title= 'Horror Movies' fetchURL={requests.fetchHorrorMovies}/>
    <Row title= 'Romance Movies' fetchURL={requests.fetchRomanceMovies}/>
    <Row title= 'Documentaries' fetchURL={requests.fetchDocumentaries}/>
 </div>
  )
}

export default HomeScreen
