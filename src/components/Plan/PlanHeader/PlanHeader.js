import React from 'react'

import plan from '../../../assets/svg/plan.svg'

import './PlanHeader.css'

function PlanHeader() {
    return (
        <div className="planHeader">
            <img src={plan} alt="" />
        </div>
    )
}

export default PlanHeader
