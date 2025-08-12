import './App.css';
import Board from './features/Board/Board';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';

function App() {
  return (
    <>
      <Header />
      <div className='main-wrapper'>
        <SideBar />
        <Board />
      </div>
    </>
  );
}

export default App;
