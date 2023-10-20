import React from "react";
import { createContext } from "react";
import { useEffect, useState } from "react";
import WishList from "./WishList";
import Heart from "./Heart";
const gallery = createContext();
export default function Image1() {
  const demo = "heart";
  const [image1, setImage1] = useState([]);
  const [copy, setCopy] = useState([]);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((json) => setImage1(json));
  }, []);
  const handleLike = (currrent) => {
    setCopy(currrent);
    console.log(copy);
  };
  return (
    <>
      <gallery.Provider value={demo}>
        <Heart />

        <div>
          {image1.length &&
            image1.map((i, t) => {
              return (
                <div>
                  <div className="card" style={{ width: "10rem" }}>
                    <div style={{ display: "flex" }}>
                      <div>
                        <img
                          className="card-img-top"
                          src={i.download_url}
                          alt="Card image cap"
                        />
                        <h5 className="card-title">{i.author}</h5>
                        <button
                          onClick={() => handleLike(i)}
                          type="button"
                          class="btn btn-light"
                        >
                          <i class="fa fa-regular fa-heart"></i>
                        </button>
                        <button type="button" class="btn btn-light">
                          <i class="fa fa-thumbs-down"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </gallery.Provider>
    </>
  );
}
export { gallery };
