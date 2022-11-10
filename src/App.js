import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/Routers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;