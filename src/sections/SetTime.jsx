import React from 'react'

function SetTime(props) {

    function handleChange(event) {
        props.onTimeChange(parseInt(event.target.value));
    }
    return (
        <div className='section'>
            <div className="btn-group row" role="group" aria-label="Basic radio toggle button group">
                <div className='col-3'>
                    <input type="radio" className=" btn-check" name="btnradio" id="30s" value="30" onChange={handleChange} />
                    <label className="btn btn-outline-warning" for="30s">30sec</label>
                </div>
                <div className='col-3'>
                    <input type="radio" className="col-3 btn-check" name="btnradio" id="60s" value="60" onChange={handleChange}  />
                    <label className="btn btn-outline-warning" for="60s">60sec</label>
                </div>
                <div className='col-3'>
                    <input type="radio" className="col-3 btn-check" name="btnradio" id="90s" value="90" onChange={handleChange}  />
                    <label className="btn btn-outline-warning" for="90s">90sec</label>
                </div>
                <div className='col-3'>
                    <input type="radio" className="col-3 btn-check" name="btnradio" id="120s" value="120" onChange={handleChange}  />
                    <label className="btn btn-outline-warning" for="120s">120sec</label>
                </div>
            </div>
        </div>
    )
}

export default SetTime