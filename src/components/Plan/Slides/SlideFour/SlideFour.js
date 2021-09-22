import React from 'react'

function SlideFour() {
    return (
        <div className="slides">
            <div className="slide__content">
                <h1 className="slide__header">Approximate <span className="primary__span">Expense</span></h1>
            </div>
            <div className="sliderExpense">
                <div className="expenseCard">
                    <h3>Rate of 1 room per day</h3>
                    <h3>₹ 1000</h3>
                </div>
                <div className="expenseCard">
                    <h3>No. of days of stay</h3>
                    <h3>2 x 1000 = ₹ 2000</h3>
                </div>
                <div className="expenseCard">
                    <h3>No. of rooms</h3>
                    <h3>2 x 2000 = ₹ 4000</h3>
                </div>
            </div>
            <div className="finalExpense">
                <h3>Final Amount = <span className="expenseBold"> ₹ 4020</span></h3>
            </div>
        </div>
    )
}

export default SlideFour
