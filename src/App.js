import BackgroundElements from './components/BackgroundElements/BackgroundElements';
import Panel from './components/Panel/Panel';
import Header from './components/Header/Header';

export default function App() {
 return (
  <>
   <div className="wrapper">
    <Header />
    <Panel />
    <BackgroundElements />
   </div>
  </>
 );
}
