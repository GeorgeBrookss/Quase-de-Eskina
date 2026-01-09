import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { StatusBar } from './components/StatusBar';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StatusBar />
      <Home />
    </>
  );
}

export default App;
