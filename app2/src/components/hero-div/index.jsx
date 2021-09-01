import React from 'react'
import Hero from '../../resources/images/hero.jpg'

export default function Main() {
    return (
        <div className="hero-img-custom">
            <div className="hero-heading">
                <h1>
                   Help Someone's <br />
                <strong>Dreams come TRUE</strong>

                </h1>

                <button className="btn btn-outline-dark" style={{borderRadius:"30px"}} > GET STARTED</button>
            </div>

            <div className="hero-footer">

            <div className="row">
    <div className="col-4">
<h1 className="text-center" >01</h1>

    </div>
    <div className="col-4">
    <h1 className="text-center">02</h1>
    </div>
    <div className="col-4">
    <h1 className="text-center">03</h1>
    </div>
</div>



            </div>

        </div>
    )
}