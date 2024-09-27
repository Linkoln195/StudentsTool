import classes from './App.module.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Homepage'
import Header from "./components/Header"
import Students from "./pages/Students/Studentspage"

const App = () => {

  return (
    <>
      <Header></Header>
      <main className={classes.main}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/students" element={<Students />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
