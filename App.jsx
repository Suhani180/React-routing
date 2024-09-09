import {Suspense, lazy} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './App.css'
const  Dashboard =lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import( './components/Landing'))

// useNavigate hook - navigate from one route to another without hard reload, it simply does route and change the page and it has to be used in  a  component which is in browser router .
// lazy loading - will load only the specific code of the specific file not the whole bundle of code.

function App() {
  return (
    <div>
      {/*normal way 
      <div> 
        <button onClick ={() => {
          window.location.href="/";
        }}>Landing page</button>
        <button onClick={() => {
          window.location.href ="/dashboard";
        }}>Dashboard</button>
      </div>*/}
  
      <div>
        <BrowserRouter>
        <Appbar/>
          <Routes>
            <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>} />
            <Route path = "/" element= {<Suspense fallback ={"loading..."}><Landing/></Suspense>} />
          </Routes>
        </BrowserRouter>
</div>
  </div>
  )
}
function Appbar() {
  
  const navigate = useNavigate();
  return <div>
    <div>
        <button onClick ={()=> {
          navigate("/");
        }}>Landing page</button>

        <button onClick ={() =>{
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>
  </div>
}

export default App