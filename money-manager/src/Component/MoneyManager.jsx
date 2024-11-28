import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { adddata1 } from '../Budget'
import { expenseadd } from '../../app/Expense'

export default function MoneyManager() {
  const moneydata = useSelector((state) => state.moneymanagerkey)
  const expenseview = useSelector((state) => state.expensekey)

  const dispatch = useDispatch()
  const [money, setMoney] = useState('')
  const [expensedata, setexpensedata] = useState('')
  const [expensedetail, setexpensedetail] = useState('')

  const addmoney = () => {
    if (money) {
      dispatch(adddata1(money))
      setMoney('')
    }
  }

  const handleexpense = () => {
    dispatch(expenseadd({ expensedata, expensedetail }))
    setexpensedata('')
    setexpensedetail('')
  }

  return (
    <div className="money-manager-container">

      <div className="deposit-section">
        <div className="balance-display">
          {moneydata && <span style={moneydata.budget < 0 ? {color:'red'} : {color:'white'}}>{moneydata.budget || 0}</span>}
        </div>
        <input
          type="number"
          className='money'
          placeholder="Set Money"
          onChange={(e) => setMoney(e.target.value)}
          value={money}
        />
        <br />
        <button onClick={addmoney}>Add +</button>
      </div>

      <div className="history-section">
        <h3>Amount History</h3>
        <input
          type="number"
          className='expense-input'
          placeholder="Enter Amount"
          onChange={(e) => setexpensedata(e.target.value)}
          value={expensedata}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Reason"
              className='expense-input'
          onChange={(e) => setexpensedetail(e.target.value)}
          value={expensedetail}
        />
        <br />
        <button onClick={handleexpense}>Expense</button>

        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {expenseview &&
              expenseview.storemoney.map((e, i) => {
           return      <tr key={i}>
                  <td>&#8377;{e.expensedata}</td>
                  <td>{e.expensedetail}</td>
                </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
