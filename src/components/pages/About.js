import React from 'react'

export default props => { 
    return (
        <div>
            <h1 className="display-4">About Contact Manager { props.match.params.id }</h1>
            <p className="load">simple paragraph to manage contacts.</p>
            <p className="Secondary">this is seondary class. 1.0.0</p>
        </div>
    )
}
