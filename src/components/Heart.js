// import React from "react";
// import { useContext } from "react";
// import { gallery } from "./Image";
// export default function Heart() {
//   const like = useContext(gallery);
//   console.log(like);
//   return (
//     <>
//       <h1>hello</h1>
//     </>
//   );
// }
// import React, { useState } from "react";
// import { Checkbox } from "@mantine/core";

// function Friend() {
//   const data = [
//     { title: "Mayank", istoggle: false, position: "Left" },
//     { title: "Ruheen", istoggle: false, position: "Left" },
//     { title: "Khushi", istoggle: false, position: "Left" },
//   ];
//   const [list, setList] = useState(data);
//   const [checked, setChecked] = useState([]);

//   const handleCheckRight = (index) => {
//     if (list[index].istoggle === false) {
//       list[index].istoggle = true;
//     } else {
//       list[index].istoggle = false;
//     }
//     console.log(list);
//   };

//   const handleRight = () => {
//     setChecked(() => {
//       return list.filter((elem1) => {
//         if (elem1.istoggle == true) {
//           console.log(elem1);
//           return elem1;
//         }
//       });
//     });
//   };

//   const handleCheckLeft = (index1) => {
//     if (checked[index1].istoggle == true) {
//       checked[index1].istoggle = false;
//     } else {
//       checked[index1].istoggle = true;
//     }
//   };

//   const handleLeft = () => {
//     console.log("hello");
//     setChecked(() => {
//       return checked.filter((index2) => {
//         if (index2.istoggle == true) {
//           return index2;
//         }
//       });
//     });
//   };
//   return (
//     <>
//       <center>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             rowGap: "100px",
//             border: "1px solid LightGreen",
//           }}
//         >
//           <center>
//             <h6>Welcome in Friend Zone</h6>
//             {list.length &&
//               list.map((i, t) => {
//                 return (
//                   <div>
//                     {i.istoggle ? null : <span>{i.title}</span>}
//                     {i.istoggle ? null : (
//                       <Checkbox
//                         color="pink"
//                         onChange={() => handleCheckRight(t)}
//                       />
//                     )}
//                   </div>
//                 );
//               })}
//           </center>
//           <div>
//             <button onClick={handleRight}>
//               <i className="fa fa-arrow-right"></i>
//             </button>
//           </div>
//           <div>
//             <button onClick={handleLeft} className="btn">
//               <i className="fa fa-arrow-left"></i>
//             </button>
//           </div>

//           <center>
//             <h6>Welcome in Foe Zone</h6>
//             <div>
//               {checked.map((index, item) => {
//                 return (
//                   <div>
//                     {index.istoggle ? <h6>{index.title}</h6> : null}
//                     {index.istoggle ? (
//                       <Checkbox
//                         label=""
//                         color="teal"
//                         onChange={() => handleCheckLeft(item)}
//                       />
//                     ) : null}
//                   </div>
//                 );
//               })}
//             </div>
//           </center>
//         </div>
//       </center>
//     </>
//   );
// }

// export default Friend;
