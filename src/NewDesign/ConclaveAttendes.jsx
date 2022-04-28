import React from "react";
import Zoom from "react-reveal/Zoom";
import './newDesign.css';
import {AccountBalance , Group, School,RecordVoiceOver} from '@material-ui/icons';
const ConclaveAttendes = () => {
  return (
    <div className="bck_black newConc">
      <div className="center_wrapper">
        <div className="vn_wrapper wrapper-1">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    ><h2>10+</h2></div>
                  <div className="vn_title"><AccountBalance/> &nbsp; Government Dignitaries </div>
                  <div className="vn_desc">Ministers, Joint Secretaries, Educational Secretaries, Education Regulatory Bodies.</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"/>
                  <div
                    className="vn_icon"
                  ><h2>150+</h2></div>
                  <div className="vn_title"><School/> &nbsp; Higher Education</div>
                  <div className="vn_desc">
                  Chairman, Chancellors, Vice-Chancellors, Directors, etc. from Universities & Colleges.
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
        {/* two */}
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    ><h2>20+</h2></div>
                  <div className="vn_title"><Group/> &nbsp; Social leaders</div>
                  <div className="vn_desc">Social Leaders helps to connecting the power of the community to  challenges of work.</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"/>
                  <div
                    className="vn_icon"
                  ><h2>20+</h2></div>
                  <div className="vn_title"><RecordVoiceOver/> &nbsp;  Speakers</div>
                  <div className="vn_desc">
                   Speakers are the speaker who makes speeches intended to motivate or inspire an audience.
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default ConclaveAttendes;
