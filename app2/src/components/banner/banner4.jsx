import React from "react";
import Banner from '../../resources/images/team.jpg'

export default function banner4() {
  return (
    <div>
      <div className="banner-img-custom">
       
        <div className="row">
        <div className="col-6">
        <div className="banner-heading">
          <h3 style={{ color: "white" }}>
            <p>
         We are here since <br />
           <strong>30 Years</strong> for people in<br />need and bringing them{" "}
             <br />Happiness in there life
            </p>
          </h3>
          <button
            className="btn btn-outline-light"
            style={{ borderRadius: "30px" }}
          >
            BECOME VOLUNTEER
          </button>
        </div>
        </div>
         
        <div className="col-6">
        <div className="banner-icons">
        <p><i style={{color:"white", width:"150px"}}class="fas fa-trophy fa-3x" ></i> <i style={{color:"white", width:"150px"}} class="fas fa-users fa-3x"></i> <i style={{color:"white"}}  class="fas fa-layer-group fa-3x"></i></p>
        <h3 style={{color:"whitesmoke"}}> &nbsp;&nbsp;&nbsp;&nbsp;82 &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 6277 &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;100 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h3>
        <h6 style={{color:"whitesmoke"}}>&nbsp;&nbsp;&nbsp;AWARDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VOLUNTEERS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS</h6>
        </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}