import React from "react";

function Recent(props) {
  const localStorageInfo = JSON.parse(localStorage.getItem("recentItems"));

  return (
    <div>
      {localStorageInfo.map((내용, i) => {
        let data = props.shoes;
        return (
          //   <Card
          //     key ={i}
          //     src={``}
          //     data
          //   >
          //   </Card>
          <div className="recentCard">
            <img
              src={`https://codingapple1.github.io/shop/shoes${내용+1}.jpg`}
            />
            <h4>{data[내용].title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Recent;
