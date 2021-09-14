import BackgroundElements from './components/BackgroundElements';
import Panel from './components/panel/Panel';
import Header from './components/Header';
import HiddenElements from './components/HiddenElements';

export default function App() {
 return (
  <>
   <div className="wrapper">
    <Header />
    <Panel />
    <BackgroundElements />
    <HiddenElements />
   </div>
  </>
 );
}
