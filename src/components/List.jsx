/* eslint-disable react/prop-types */

const List = ({data, onClick}) => {
  return (
    <ul  className="list-group list">{data.map(item => <li key={item.id}>
      <a className='list-group-item list-group-item-action' onClick={() => onClick(item.id)}>{item.name}</a>
    </li>)}
    </ul>
  )
}

export default List