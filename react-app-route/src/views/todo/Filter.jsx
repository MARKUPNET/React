import classNames from 'classnames';
import 'bulma/css/bulma.css';

export const Filter = (props) => {

  /* propsを定義 */
  const { value, onChange } = props;

  /* フィルターの切り替え */
  const handleClick = (key, event) => {
    event.preventDefault();
    onChange(key);
  };

  return (
    <div className="panel-tabs">
      <button
        onClick={handleClick.bind(null, 'ALL')}
        className={classNames({ 'is-active': value === 'ALL' })}
      >All</button>
      <button
        onClick={handleClick.bind(null, 'TODO')}
        className={classNames({ 'is-active': value === 'TODO' })}
      >ToDo</button>
      <button
        onClick={handleClick.bind(null, 'DONE')}
        className={classNames({ 'is-active': value === 'DONE' })}
      >Done</button>
    </div>
  );
}

export default Filter;