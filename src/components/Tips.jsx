import React, { useEffect, useState } from "react";
import tips from "../utils/tips";

export default function Tips() {
  return (
    <div className="tips">
      <div className="container tips-insider">
        <div className="header">
          <h1> What's different about Manage? </h1>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digita product
            teams.
          </p>
        </div>

        <div className="tips-wrapper">
          {tips.map((tip, id) => (
            <Tip key={tip.title} {...tip} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Tip = ({ num, content, title, id }) => {
  return (
    <div className="tip">
      <div className="title">
        <div>
          <h2> {num} </h2>
        </div>
        <h3> {title} </h3>
      </div>
      <div className="content">
        <p>{content} </p>
      </div>
    </div>
  );
};
