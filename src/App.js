import './App.css';
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import Trending from './components/Trending'
import "./style/landingPage.css"
import Action from './components/Action'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      {/*introsection */}
      <div className="myBG">
        <NavigationBar />
        <Intro />

      </div>
      {/*end of section*/}

      {/*trending section*/}
      <div className='trending'>
        <Trending />
      </div>
      {/*end of trending section*/}

      {/*action section*/}
      <div className='action'>
        <Action />
      </div>
      {/*end of action section*/}

      {/*footer section*/}
      <div className='footer'>
        <Footer />
      </div>
      {/*end of footer section*/}
    </div>
  );
}

export default App;
