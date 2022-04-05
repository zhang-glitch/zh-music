
import {Navigate} from 'react-router-dom';

// import Main from '@/pages/main'
import Discover from '@/pages/discover'
import Friend from '@/pages/friend'
import Mine from '@/pages/mine'
import TopList from '@/pages/discover/s-pages/toplist'
import Recommend from '@/pages/discover/s-pages/recommend'
import PlayList from '@/pages/discover/s-pages/playlist'
import DJRadio from '@/pages/discover/s-pages/djradio'
import Artist from '@/pages/discover/s-pages/artist'
import Album from '@/pages/discover/s-pages/album'
import Song from '@/pages/song'

const routes = [
  {
    path: "/",
    element: <Navigate to="/discover/recommend" replace={true}/>
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "",
        element:  <Navigate to="/discover/recommend" replace={true}/>
      },
      {
        path: "recommend",
        element: <Recommend />
      },
      {
        path: "toplist",
        element: <TopList />
      },
      {
        path: "playlist",
        element: <PlayList />
      },
      {
        path: "djradio",
        element: <DJRadio />
      },
      {
        path: "artist",
        element: <Artist />
      },
      {
        path: "album",
        element: <Album />
      },
    ]
  },
  {
    path: "/friend",
    element: <Friend />
  },
  {
    path: "/mine",
    element: <Mine />
  },
  {
    path: "/song",
    element: <Song />
  },
]

export default routes