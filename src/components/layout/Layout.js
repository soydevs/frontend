import React from 'react'

import Sidebar from './Sidebar/Sidebar'
import './Layout.css'

function Layout({ children }) {
    return (
        <div className="layout">
            <div className="layout--container">
                <div className="layout__sidebar">
                    <Sidebar />
                </div>
                <div className="layout__body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
