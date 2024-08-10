
import './App.css'
import ListEmployeeComponent from './components/employee/ListEmployeeComponent'
import FooterComponent from './components/partials/FooterComponent'
import HeaderComponent from './components/partials/HeaderComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomeComponent from './components/WelcomeComponent'
import CreateUpdateEmployeeComponent from './components/employee/CreateUpdateEmployeeComponent'

function App() {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      {/* // http://localhost:3000 */}
      <Route path="/" element= { <WelcomeComponent />}>
      </Route>
      {/* // http://localhost:3000/employees */}
      <Route path="/employees" element= { <ListEmployeeComponent />}>
      </Route>
      {/* // http://localhost:3000/add-employee */}
      <Route path="/add-employee" element= { <CreateUpdateEmployeeComponent />}>
      </Route>
      {/* // http://localhost:3000/edit-employee/id */}
      <Route path="/edit-employee/:id" element= { <CreateUpdateEmployeeComponent />}>
      </Route>
    </Routes>
     <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
