import { Provider } from 'react-redux'
import './App.css'
import { store } from './Redux/store';
import Router from './Routes';

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    </>
  )
}

export default App
