import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import CONCLAVE_DATA from "data/conclave";
const Tree = () => {
  const timelines = CONCLAVE_DATA;
  return (
      <>
      <div className="flex gap-2 items-center font-bold pt-5 mt-5 tree-conclve-heding" style={{justifyContent:'center'}}>
        <h1 className="cursive text-4xl py-lg-5">Agenda of the</h1>
        <h1 className="text-secondary text-2xl serif">Conclave</h1>
      </div> 
    <Timeline lineColor={"#ddd"}>
      {timelines.map((value, index) => (
        <TimelineItem
          key={index}
          dateText={`🕙 ${value.time}`}
          dateInnerStyle={{ background: value.color, color: "#fff" }}
          bodyContainerStyle={{
            background: "#fff",
            color: "#000",
            padding: "20px",
              boxShadow: "1px 1px 8px 1px #000",
          }}
          style={{ color: value?.color }}
        >
          <h3 style={{fontWeight:'bold'}}>{value.title}</h3>
          <h4>{value.description}</h4>
        </TimelineItem>
      ))}
    </Timeline>
    </>

  );
};

export default Tree;
