import Button from './Button';

export default function CellSmall(props) {
 return (
  <>
   <li className="ethnicity__list-item">
    <p className="ethnicity__list-item-or">Or</p>
    {props.ethnicity.title}
    <Button onClick={() => props.handleRemoveCellSmall(props.ethnicity.id)} addClass={'ethnicity__list-item-button'} btnType="1" />
   </li>
  </>
 );
}
