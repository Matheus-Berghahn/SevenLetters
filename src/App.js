import './App.scss';
import './Header.scss';
import ContentMain from './ContentMain';
import Checkout from './Checkout';

const { pathname } = window.location;


  let Component;

  if (pathname === '/checkout') {
    Component = Checkout;
  }else {
    Component = ContentMain;
  }

const App = () => {

  return (
    <div>
      <div className='content'>
        <div className='app'>
          <Component/>
        </div>
      </div>
    </div>
  );
};

export default App;