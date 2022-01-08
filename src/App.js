import Body from './compontents/mainSection';
import Appbar from './compontents/Appbar.js';
import footer from './images/footer.jpg';

function App() {
  return (
    <>
     <Appbar/>
     <Body/>
     <div><img className='footer' src={footer} alt="footer"/></div>
     
    </>
  );
}

export default App;
