import { Header } from './features/header/Header';
import { Home } from './features/home/Home';
import { Subreddits } from './features/subreddits/Subreddits';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </div>
  );
}

export default App;
