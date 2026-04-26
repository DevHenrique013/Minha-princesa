import './App.css'
import { MusicPlayerProvider } from './providers/music-player-provider'
import { GlobalMusicPlayer } from './components/base/global-music-player'
import AppPage from './pages/AppPage'

function App() {

  return (
    <>
    <MusicPlayerProvider>
       <AppPage/>
      <GlobalMusicPlayer />
    </MusicPlayerProvider>
    </>
  )
}

export default App
