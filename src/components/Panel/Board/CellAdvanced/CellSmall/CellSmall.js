import Button from '../../../common/Button/Button';

export default function CellSmall({ handleRemoveCellSmall, information }) {
 return (
  <>
   <li className="cell-advanced__list-item">
    <p className="cell-advanced__list-item-or or">Or</p>
    {information.title}
    <Button btnOnClick={() => handleRemoveCellSmall(information.id)} btnClassName={'cell-advanced__list-item-button'} btnType="1" />
   </li>
  </>
 );
}
