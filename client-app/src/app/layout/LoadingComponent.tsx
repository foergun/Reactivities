import React from "react";

interface IProps{
    inverted?: boolean; 
    content?: string
}

const LoadingComponent: React.FC<IProps> = ({
  inverted,
  content
}) => {
  return (
    <div className="ui inverted segment" style={{height:100}}>
        <p></p>
        <div className="ui active inverted dimmer">
            <div className="ui big text loader">{content}</div>
        </div>
    </div>
  );
};

export default LoadingComponent;
