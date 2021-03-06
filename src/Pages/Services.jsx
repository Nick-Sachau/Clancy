import React from "react";
import { GrConfigure, GrCompliance } from 'react-icons/gr'
import { VscTools } from 'react-icons/vsc'
import { CgToolbox } from 'react-icons/cg'

const Services = () => {
  return (
    <div className="services">
      <div className="left-container">
        <div className="left-outer">
          <div className="left">
            <div className="upper">
              <div className="line"></div>
              <h1>Brigg's <br></br> Services</h1>
            </div>


            <h4>Tempor labore duis laboris elit cillum.</h4>
          </div>
        </div>
      </div>
      <div className="right">

        <div className="item-outer">

          <div className="item-inner">

            <h4 className="title">RV Maintenance  </h4>
            <CgToolbox className="icons" />
            <h4 className="content">
              Cupidatat sunt anim qui do veniam. Laborum ut anim et qui. Ad
              voluptate quis id aliquip nisi aute ex.Sit consectetur ullamco fugiat nisi non non velit sunt adipisicing tempor voluptate.
            </h4>
          </div>
        </div>
        <div className="item-outer">

          <div className="item-inner">

            <h4 className="title">RV AC Repair  </h4>
            <VscTools className="icons" />
            <h4 className="content">
              Qui qui eiusmod nisi ad eiusmod culpa est ut duis aliqua sint. Esse
              aute dolor duis elit nostrud ad dolore elit.Qui consectetur quis aliqua excepteur do cupidatat cillum minim sint.
            </h4>
          </div>
        </div>
        <div className="item-outer">

          <div className="item-inner">
            <h4 className="title">RV Inspection  </h4>
            <GrCompliance className="icons" />
            <h4 className="content last">
              Mollit ad commodo laboris dolore et pariatur culpa aute in laborum. Id
              nulla cupidatat sit Lorem. Reprehenderit qui velit sit mollit. Deserunt sint amet fugiat do ea ad anim qui magna aliquip cillum.
            </h4>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Services;
