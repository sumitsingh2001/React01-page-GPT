import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";
// import Feature from "../../components/feature/Feature";
// const gpt3FeatureData = [
//   {
//     head: "Chatbots",
//     subHead:
//       "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
//   },
//   {
//     head: "Knowledgebase",
//     subHead:
//       "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
//   },
//   {
//     head: "Education",
//     subHead:
//       "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
//   },
// ];
const WhatGPT3 = () => {
  return (
    <>
      <div className="section__margin gpt3__whatgpt3" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
          {/* For Proper output,
           you can select Feature coponents's html classes
          inside these classes to make the look properly */}
          {/* Like Here and just below this */}
          <Feature
            title="What is GPT-3"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore the Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          {/* Now here you can see how this Feature component is looking diffrent 
            from First Feature component.
            HERE I only selected feature components class from there
            to here in this sections,
            css and made them nested inside thiis containers */}

          {/* THIS IS THE WAY YOU CAN CALL IT USING PROPS METHOD OF REACT............. */}
          <Feature
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />

          {/* BEST WAY YOU CAN USE MAP METHOD TO WRITE IT QUICKLY................. */}
          {/* {gpt3FeatureData.map((item, index) => (
            <Feature
              title={item.head}
              text={item.subHead}
              key={item.title + index}
            />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default WhatGPT3;
