import BackgroundElements from './components/BackgroundElements';
import Board from './components/Board';
import HiddenElements from './components/HiddenElements';

export default function App() {
 return (
  <>
   <div className="app">
    <Board />
    <BackgroundElements />
    <HiddenElements />
   </div>
  </>
 );
}
