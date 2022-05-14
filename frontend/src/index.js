// scroll bar
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import 'simplebar/src/simplebar.css';
//
import App from './App';



// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
);

 