import React from 'react'

const Result = ({result}) => {
    return (
        <div className="result">
            <form>
                <input type="text" value={result} readOnly/>
                </form>
            </div>
    )
}
export default Result;