import './index.css'

const List = props => {
  const {transactionDetails, isDeleteClicked} = props
  const {id, title, amount, type} = transactionDetails
  const onClickDelete = () => {
    isDeleteClicked(id)
  }
  return (
    <li className="list-item">
      <p className="p2">{title}</p>
      <p className="p2">Rs {amount}</p>
      <p className="p2">{type}</p>
      <button
        data-testid="delete"
        className="del-btn"
        type="button"
        onClick={onClickDelete}
      >
        <img
          className="del-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default List
