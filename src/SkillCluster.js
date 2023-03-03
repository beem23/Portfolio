import React from 'react'
import './styles/SkillClusterStyle.css'

const SkillCluster = ({ children }) => {
    return (
        <div className='rotating-box'>
            {children}
        </div>
    )
}

export default SkillCluster