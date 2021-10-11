export default function BackgroundElements() {
 return (
  <>
   <div className="background-elements">
    <div className="mask-left">
     <div className="mask-left__line">
      <div className="mask-left__line-element"></div>
     </div>
    </div>

    <div className="mask-right"></div>

    <div className="shape-snake">
     <div className="shape-snake__flex-container">
      <div className="shape-snake__element-1">
       <div className="shape-snake__blank-1"></div>
      </div>
      <div className="shape-snake__element-2">
       <div className="shape-snake__blank-2">
        <div className="shape-snake__shadow"></div>
       </div>
      </div>
      <div className="shape-snake__element-3">
       <div className="shape-snake__blank-3"></div>
      </div>
     </div>
    </div>

    <div className="shape-spinner">
     <div className="shape-spinner__spinner"></div>
     <div className="shape-spinner__blank"></div>
    </div>
   </div>
  </>
 );
}
