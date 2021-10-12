import Button from '../../common/Button/Button';

export default function CellMain({ handleRemoveCell, info }) {
 return (
  <>
   <li className="cell-main">
    <p className="cell-main__text">{info.title}</p>

    <p className="cell-main__and and">And</p>

    <div className="cell-main__border border"></div>

    <Button btnClassName={'cell-main__button'} btnOnClick={() => handleRemoveCell(info.id)} btnType={'1'} />
   </li>
  </>
 );
}
