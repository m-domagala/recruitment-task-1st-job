import Button from '../../../common/Button/Button';

export default function CellSmall({ handleRemoveCellSmall, information }) {
 return (
  <>
   <li className="cell-advanced__list-item">
    {information.title}
    <p className="cell-advanced__list-item-or or">Or</p>

    <Button btnClassName={'cell-advanced__list-item-button'} btnOnClick={() => handleRemoveCellSmall(information.id)} btnType="1" />
   </li>
  </>
 );
}
