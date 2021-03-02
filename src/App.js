import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
// import Contact from './src/pages/Contact'
// import Resume from './src/pages/Resume'
// import Project from './src/pages/Project'
import Footer from './components/Footer'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home} />
          {/* <Route exact path={`/contact`} component={Contact} />
          <Route exact path={`/resume`} component={Resume} />
          <Route path={`/project/:name`} component={Project} /> */}
        </Switch>
        <Footer/>
      </Router>
    </React.StrictMode>
  )
}

export default App
