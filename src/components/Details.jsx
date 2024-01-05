/* eslint-disable react/prop-types */

const Details = ({info}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={info.avatar} alt="Card image cap"/>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item card-title">{info.name}</li>
          <li className="list-group-item">City: {info.details.city}</li>
          <li className="list-group-item">Company: {info.details.company}</li>
          <li className="list-group-item">Position: {info.details.position}</li>
        </ul>
      </div>
    </div>
  )
}

export default Details