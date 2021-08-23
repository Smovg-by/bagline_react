import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'
import { StockContainer } from './components/Stock/StockContainer';
import { NavbarContainer } from './components/Navbar/NavbarContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { NewOrderContainer } from './components/NewOrder/NewOrderContainer';
import { OrdersContainer } from './components/Orders/OrdersContainer';
import { ConfirmContainer } from './components/Confirm/ConfirmContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <div className="appHeader">
          <HeaderContainer />
        </div>
        <div className='appNavbar'>
          <NavbarContainer />
        </div>
        <div className='appContent'>
          <Route path="/stock" render={() => <StockContainer />} />
          <Route path="/neworder" render={() => <NewOrderContainer />} />
          <Route path="/orders" render={() => <OrdersContainer />} />
          <Route path="/confirm" render={() => <ConfirmContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
