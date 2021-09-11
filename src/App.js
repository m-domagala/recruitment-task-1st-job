import BackgroundElements from './components/BackgroundElements';
import Panel from './components/Panel';
import HiddenElements from './components/HiddenElements';

export default function App() {
 return (
  <>
   <div className="wrapper">
    <Panel />
    <BackgroundElements />
    <HiddenElements />
   </div>
  </>
 );
}
