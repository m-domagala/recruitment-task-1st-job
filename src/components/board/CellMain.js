import Button from '../Button';

export default function CellMain(props) {
 return (
  <>
   <li className="cell-main">
    <p className="cell-main__text">{props.info.title}</p>
    <p className="cell-main__and and">And</p>
    <div className="cell-main__border border"></div>
    <Button onClick={() => props.handleRemoveCell(props.info.id)} addClass={'cell-main__button'} btnType={'1'} />
   </li>
  </>
 );
}
