import Button from './Button';

export default function Panel() {
 return (
  <>
   <main className="panel-container">
    <div className="panel">
     <div className="top-area">
      <div className="top-area__people">
       <p className="top-area__people-text">People</p>
      </div>
     </div>
     <div className="board"></div>
     <div className="line"></div>
     <div className="bottom-area">
      <Button addClass={'bottom-area__button'} btnType={'3'} />
     </div>
    </div>
   </main>
  </>
 );
}
