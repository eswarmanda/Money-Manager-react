import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="m-details-card">
      <div className="bal-card">
        <div className="card1">
          <div className="">
            <img
              className="img-logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
          </div>
          <div className="">
            <p className="p1">Your Balance</p>
            <p data-testid="balanceAmount" className="rs">
              Rs {balanceAmount}
            </p>
          </div>
        </div>
      </div>
      <div className="Income-card">
        <div className="card1">
          <div className="">
            <img
              className="img-logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
          </div>
          <div className="">
            <p className="p1">Your Income</p>
            <p data-testid="incomeAmount" className="rs">
              Rs {incomeAmount}
            </p>
          </div>
        </div>
      </div>
      <div className="Expenses-card">
        <div className="card1">
          <div className="">
            <img
              className="img-logo"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
            />
          </div>
          <div className="">
            <p className="p1">Your Expenses</p>
            <p data-testid="expensesAmount" className="rs">
              Rs {expensesAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
