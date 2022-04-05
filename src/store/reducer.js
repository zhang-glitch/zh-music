
import {combineReducers} from 'redux-immutable'
import {reducer as recommendReducer} from '@/pages/discover/s-pages/recommend/store'
import {reducer as topListReducer} from '@/pages/discover/s-pages/toplist/store'
import {reducer as playListReducer} from '@/pages/discover/s-pages/playlist/store'
import {reducer as djRadioReducer} from '@/pages/discover/s-pages/djradio/store'
import {reducer as albumReducer} from '@/pages/discover/s-pages/album/store'
import {reducer as artistReducer} from '@/pages/discover/s-pages/artist/store'
import {reducer as songReducer} from '@/pages/song/store'


export default combineReducers({
  recommend: recommendReducer,
  toplist:  topListReducer,
  playlist: playListReducer,
  djradio: djRadioReducer,
  album: albumReducer,
  artist: artistReducer,
  song: songReducer
})