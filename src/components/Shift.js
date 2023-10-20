import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
export default function Shift() {
  const list = [
    { title: "mayank1", istoggle: false, position: "left" },
    { title: "mayank2", istoggle: false, position: "left" },
    { title: "mayank3", istoggle: false, position: "left" },
    { title: "mayank4", istoggle: false, position: "left" },
  ];
  const [data, setData] = useState(list);
  const [empty, setEmpty] = useState([]);
  const handleCheckbox = (index) => {
    if (data[index].istoggle === false) {
      data[index].istoggle = true;
    } else {
      data[index].istoggle = false;
    }
    console.log(data);
  };
  const handleRight = () => {
    console.log("chlra hain");
    setEmpty(() => {
      return data.filter((elem) => {
        if (elem.istoggle === true) {
          console.log(elem);
          return elem;
        }
      });
    });
  };
  const handleCheckboxleft = (index1) => {
    if (empty[index1].istoggle === true) {
      empty[index1].istoggle = false;
    } else {
      empty[index1].istoggle = true;
    }
    console.log(data[index1].istoggle);
  };
  const handleLeft = () => [
    setEmpty(() => {
      return empty.filter((elem1) => {
        if (elem1.istoggle == true) {
          console.log(elem1);
          return elem1;
        }
      });
    }),
  ];
  return (
    <>
      <div>
        <div className="row" style={{ marginLeft: "20px" }}>
          <div>
            {data.map((i, t) => {
              return (
                <div>
                  {" "}
                  <span
                    style={{ display: "flex", flexDirection: "column" }}
                    key={t}
                    class="border"
                  >
                    {i.istoggle ? null : (
                      <input
                        onChange={() => handleCheckbox(t)}
                        className="form-check-input"
                        type="checkbox"
                        value=" S"
                        id={t}
                      />
                    )}
                  </span>
                  {i.istoggle ? null : <h1>{i.title}</h1>}
                </div>
              );
            })}
          </div>

          <button onClick={handleRight} type="button" class="btn btn-primary">
            <i class="fa fa-arrow-right"></i>
          </button>
          <button onClick={handleLeft} type="button" class="btn btn-primary">
            <i class="fa fa-arrow-left"></i>
          </button>
          <div></div>
          <div>
            {empty.map((index, item) => {
              return (
                <div>
                  <span
                    style={{ display: "flex", flexDirection: "column" }}
                    key={item}
                    class="border"
                  >
                    {index.istoggle ? (
                      <input
                        onChange={() => handleCheckboxleft(item)}
                        class="form-check-input"
                        type="checkbox"
                        value={item}
                        id=""
                      />
                    ) : null}
                  </span>
                  {index.istoggle ? <span>{index.title}</span> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
