import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/HomePage/Layout'
import PeopleDirectory from './components/PeopleDirectory/PeopleDirectory'
import PopupPage from './components/Page3/PopupPage'
import EditDetails from './components/Page3/EditDetails'


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/peopleDirectory' element= {<PeopleDirectory />} />
          <Route path='/' element={<Layout />} />
          <Route path='/peopleDirectory/Oliva' element={<PopupPage />}/>
          <Route path='/sms' element={<EditDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
