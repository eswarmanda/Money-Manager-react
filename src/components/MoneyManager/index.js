import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import List from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    getTitle: '',
    getAmount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  isDeleteClicked = id => {
    const {transactionsList} = this.state
    const updatedTransactionList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionsList: updatedTransactionList,
    })
  }

  addTransaction = event => {
    event.preventDefault()
    const {getTitle, getAmount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: getTitle,
      amount: parseInt(getAmount),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      getTitle: '',
      getAmount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getTitle = event => {
    this.setState({getTitle: event.target.value})
  }

  getAmount = event => {
    this.setState({getAmount: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
    console.log(event.target.value)
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {getTitle, getAmount, optionId, transactionsList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="main-container">
        <div className="money-card">
          <div className="money-manager">
            <div className="user-card">
              <h1 className="user-name">Hi,Richard</h1>
              <p className="description">
                Welcome back to your{' '}
                <span className="span-des">Money Manager</span>
              </p>
            </div>
            <div>
              <MoneyDetails
                balanceAmount={balanceAmount}
                incomeAmount={incomeAmount}
                expensesAmount={expensesAmount}
              />
            </div>
            <div className="transaction-card">
              <div className="type-card">
                <h1 className="add-tran">Add Transaction</h1>
                <form value={optionId} onSubmit={this.addTransaction}>
                  <label className="title-label" htmlFor="title">
                    TITLE
                  </label>
                  <br />
                  <input
                    className="title-input"
                    id="title"
                    type="text"
                    value={getTitle}
                    placeholder="TITLE"
                    onChange={this.getTitle}
                  />
                  <br />
                  <label className="amount-label" htmlFor="amount">
                    AMOUNT
                  </label>
                  <br />
                  <input
                    className="amount-input"
                    id="amount"
                    type="text"
                    value={getAmount}
                    placeholder="AMOUNT"
                    onChange={this.getAmount}
                  />
                  <br />
                  <label className="amount-label" htmlFor="select">
                    TYPE
                  </label>
                  <br />
                  <select
                    className="select-option"
                    id="select"
                    value={optionId}
                    onChange={this.onChangeOptionId}
                  >
                    {transactionTypeOptions.map(eachOption => (
                      <option
                        key={eachOption.optionId}
                        value={eachOption.optionId}
                      >
                        {eachOption.displayText}
                      </option>
                    ))}
                  </select>
                  <br />
                  <button className="add-btn" type="submit">
                    Add
                  </button>
                </form>
              </div>
              <div className="history-card">
                <h1 className="add-history">History</h1>
                <div className="trans-details">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>{' '}
                </div>
                <ul className="ul-card">
                  {transactionsList.map(eachTransaction => (
                    <List
                      isDeleteClicked={this.isDeleteClicked}
                      transactionDetails={eachTransaction}
                      key={eachTransaction.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
