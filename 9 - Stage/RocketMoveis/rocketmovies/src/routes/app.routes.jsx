import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home'
import { Create } from '../Pages/Create'
import { Movie } from '../Pages/Movie'
import { Profile } from '../Pages/Profile'

export function AppRoutes () {
  return(
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/create' element={<Create /> } />
      <Route path='/profile' element={<Profile /> } />
      <Route path='/movie/:id' element={<Movie /> } />
    </Routes>
  )
}