import Button from '../../../common/Button/Button';

export default function CellSmall(props) {
 return (
  <>
   <li className="cell-advanced__list-item">
    <p className="cell-advanced__list-item-or or">Or</p>
    {props.information.title}
    <Button onClick={() => props.handleRemoveCellSmall(props.information.id)} addClass={'cell-advanced__list-item-button'} btnType="1" />
   </li>
  </>
 );
}
