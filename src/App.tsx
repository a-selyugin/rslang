import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import AudioCall from './components/Games/AudioCall/AudioCall';
import { Navigation } from './components/Navigation/Navigation';
import { BookPage } from './pages/BookPage/BookPage';
import { DictionaryPage } from './pages/DictionaryPage/DictionaryPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { MainPage } from './pages/MainPage/MainPage';
import { StatisticPage } from './pages/StatisticPage/StatisticPage';
import { TeamPage } from './pages/TeamPage/TeamPage';
import { VideoPage } from './pages/VideoPage/VideoPage';

export const App = (): JSX.Element =>  (
  <div className='wrapper'>
    <Navigation/>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/book' element={<BookPage/>} />
      <Route path='/dictionary' element={<DictionaryPage/>} />
      <Route path='/audiocall' element={<AudioCall/>} />
      <Route path='/statistic' element={<StatisticPage/>} />
      <Route path='/team' element={<TeamPage/>} />
      <Route path='/video' element={<VideoPage/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
    <Footer/>
  </div>

);
