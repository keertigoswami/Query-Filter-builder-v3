// import { useState, useEffect, useRef } from "react";
// import { attributes, operations } from "./constant";

// function QueryFilter() {
//   const [currAtt, setCurrAtt] = useState("");
//   const [isOpenOpr, setOpenOpr] = useState(false);
//   const [isOpenAtt, setIsOpenAtt] = useState(false);
//   const [selectedAtt, setSelectedAtt] = useState("");
//   const [tags, setTags] = useState([]);

//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   const [isFocused, setIsFocused] = useState(false);

//   const inputRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (inputRef.current && !inputRef.current.contains(event.target)) {
//         setIsOpenAtt(false);
//         setOpenOpr(false);
//         setSelectedIndex(-1);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const HandleAttChange = (e) => {
//     if (e.key === "ArrowDown") {
//       setSelectedIndex((prevIndex) =>
//         prevIndex === filteredAttributes.length - 1 ? 0 : prevIndex + 1
//       );
//     } else if (e.key === "ArrowUp") {
//       setSelectedIndex((prevIndex) =>
//         prevIndex === 0 ? filteredAttributes.length - 1 : prevIndex - 1
//       );
//     } else if (e.key === "Enter") {
//       if (isOpenAtt && selectedIndex >= 0) {
//         HandleAttClick(filteredAttributes[selectedIndex]);
//       } else if (!isOpenAtt && isOpenOpr && selectedIndex >= 0) {
//         HandleOprClick(operations[selectedIndex]);
//         setOpenOpr(false);
//       } else {
//         if (!isOpenAtt) {
//           setTags((prevTags) => [...prevTags, currAtt]);
//           setCurrAtt("");
//           setIsOpenAtt(true);
//           setOpenOpr(false);
//           setSelectedAtt("");
//         }
//         if (isOpenAtt) {
//           setSelectedAtt(currAtt + " ");
//           setCurrAtt(currAtt + " ");
//           setIsOpenAtt(false);
//           setOpenOpr(true);
//         }
//       }
//     } else {
//       const allowedChars = /^[a-zA-Z0-9_ ]$/;
//       const specialChars = /^[!@#\$%\^\&*\)\(+=._-]$/;

//       if (allowedChars.test(e.key) || specialChars.test(e.key)) {
//         let str = currAtt + e.key;
//         setCurrAtt(str);
//         setSelectedIndex(-1);
//       }

//       if (e.key === "Backspace") {
//         setCurrAtt(currAtt.slice(0, -1));
//       }

//       if (e.key === "Backspace" && currAtt.length === 0) {
//         setTags([]);
//       }
//     }
//   };

//   const HandleAttClick = (att) => {
//     setSelectedAtt(att + " ");
//     setCurrAtt(att + " ");
//     setIsOpenAtt(false);
//     setOpenOpr(true);
//     setSelectedIndex(-1);
//   };

//   const HandleOprClick = (op) => {
//     setCurrAtt(currAtt + op + " ");
//     setSelectedIndex(-1);
//   };

//   const filteredAttributes = attributes.sort((a, b) => a.localeCompare(b));

//   const deleteTag = (tagToRemove) => {
//     setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
//   };

//   return (
//     <div className="flex justify-center w-screen bg-gray-800 text-gray-300">
//       <div className="w-[75%] ml-10">
//         <div className="mt-2 relative" ref={inputRef}>
//           <div className="flex flex-wrap gap-1 mt-8 rounded bg-gray-900 p-">
//             {tags.map((tag, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center p-1 m-2 bg-gray-700 text-gray-300 rounded"
//               >
//                 {tag}
//                 <button
//                   onClick={() => deleteTag(tag)}
//                   className="ml-2 mr-0.5 text-red-200 hover:text-red-500"
//                 >
//                   x
//                 </button>
//               </div>
//             ))}
//             <input
//               type="text"
//               placeholder={
//                 !isFocused && tags.length === 0
//                   ? "Search Filter: select options from suggested values, for IN/NOT IN operations - press ENTER after selecting options"
//                   : ""
//               }
//               value={currAtt}
//               onKeyDown={HandleAttChange}
//               onFocus={() => {
//                 setIsFocused(true);
//                 setIsOpenAtt(true);
//               }}
//               onBlur={() => setIsFocused(false)}
//               className="p-3 bg-gray-900 text-gray-300 focus:outline-none flex-grow"
//             />
//           </div>
//           {isOpenAtt && (
//            <div className="absolute z-10 border border-gray-600 border-t-0 p-2 rounded bg-gray-900 w-full max-h-60 overflow-hidden">

//               {filteredAttributes.map((attr, index) => (
//                 <div
//                   key={index}
//                   className={`cursor-pointer p-1 hover:bg-gray-800 text-gray-300 ${
//                     index === selectedIndex ? "bg-gray-800" : ""
//                   }`}
//                 >
//                   <button
//                     className="w-full text-left"
//                     onClick={() => {
//                       HandleAttClick(attr);
//                     }}
//                   >
//                     {attr}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//           {isOpenOpr && currAtt.length > 0 && !isOpenAtt && (
//             <div className="absolute z-10 border rounded bg-gray-600 w-full">
//               {operations.map((op, idx) => (
//                 <div
//                   key={idx}
//                   className={`cursor-pointer p-1 w-full hover:bg-gray-800 ${
//                     idx === selectedIndex ? "bg-gray-800" : ""
//                   }`}
//                 >
//                   <button
//                     className="w-full text-left"
//                     onClick={() => {
//                       HandleOprClick(op);
//                     }}
//                   >
//                     {selectedAtt} {op}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div> <h1 className="mt-60 flex items-center justify-center">Beta Version is testing...</h1>
//       </div>
    
//     </div>
//   );
// }

// export default QueryFilter;


import { useState, useEffect, useRef } from "react";
import { attributes, operations } from "./constant";

function QueryFilter() {
  const [currAtt, setCurrAtt] = useState("");
  const [isOpenOpr, setOpenOpr] = useState(false);
  const [isOpenAtt, setIsOpenAtt] = useState(false);
  const [selectedAtt, setSelectedAtt] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsOpenAtt(false);
        setOpenOpr(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const HandleAttChange = (e) => {
    if (e.key === "Backspace" && currAtt !== selectedAtt) {
      setIsOpenAtt(false);
      setIsOpenAtt(true);
      setCurrAtt(currAtt.slice(0, -1));
    }

    if (e.key === "Backspace" && currAtt > selectedAtt) {
      setCurrAtt(currAtt.slice(0, -1));
      setOpenOpr(true);
      setIsOpenAtt(false);
      console.log("Ye daba");
    }
    console.log(e.key);

    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex === filteredAttributes.length - 1 ? 0 : prevIndex + 1
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? filteredAttributes.length - 1 : prevIndex - 1
      );
    } else if (e.key === "Enter") {
      if (isOpenAtt && selectedIndex >= 0) {
        HandleAttClick(filteredAttributes[selectedIndex]);
        console.log("yha 1");
      } else if (!isOpenAtt && isOpenOpr && selectedIndex >= 0) {
        HandleOprClick(operations[selectedIndex]);
        console.log("yha 2");
        setOpenOpr(false);
      } else if (
        !isOpenAtt &&
        isOpenOpr &&
        currAtt.length > selectedAtt.length
      ) {
        setOpenOpr(false);
      } else {
        if (!isOpenAtt) {
          setTags((prevTags) => [...prevTags, currAtt]);
          setCurrAtt("");
          setIsOpenAtt(true);
          setOpenOpr(false);
          setSelectedAtt("");
          console.log("yha 3");
        }
        if (isOpenAtt) {
          setSelectedAtt(currAtt + " ");
          setCurrAtt(currAtt + " ");
          setIsOpenAtt(false);
          setOpenOpr(true);
          console.log("yha 14");
        }
      }
    } else {
      const allowedChars = /^[a-zA-Z0-9_ ]$/;
      const specialChars = /^[!@#\$%\^\&*\)\(+=._-]$/;

      if (allowedChars.test(e.key) || specialChars.test(e.key)) {
        let str = currAtt + e.key;
        setCurrAtt(str);
        setSelectedIndex(-1);
      }

      if (e.key === "Backspace") {
        setCurrAtt(currAtt.slice(0, -1));
      }

      if (e.key === "Backspace" && currAtt.length === 0) {
        setTags([]);
      }
    }
  };

  const HandleAttClick = (att) => {
    setSelectedAtt(att + " ");
    setCurrAtt(att + " ");
    setIsOpenAtt(false);
    setOpenOpr(true);
    setSelectedIndex(-1);
  };

  const HandleOprClick = (op) => {
    setCurrAtt(selectedAtt + op + " ");
    setSelectedIndex(-1);
  };

  const filteredAttributes = attributes
    .filter((attr) => attr.toLowerCase().includes(currAtt.toLowerCase()))
    .sort((a, b) => {
      if (a.toLowerCase().startsWith(currAtt.toLowerCase())) return -1;
      if (b.toLowerCase().startsWith(currAtt.toLowerCase())) return 1;
      return a.localeCompare(b);
    });

  const deleteTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex justify-center w-screen bg-gray-800 text-gray-300">
      <div className="w-[75%] ml-10">
        <div className="mt-2 relative" ref={inputRef}>
          <div className="flex flex-wrap gap-1 mt-8 rounded bg-gray-900 p-2">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="flex items-center p-2 m-1 bg-gray-700 text-gray-300 rounded"
              >
                {tag}
                <button
                  onClick={() => deleteTag(tag)}
                  className="ml-2 text-red-200 hover:text-red-500"
                >
                  x
                </button>
              </div>
            ))}
            <input
              type="text"
              placeholder={
                !isFocused && tags.length === 0
                  ? "Search Filter: select options from suggested values, for IN/NOT IN operations - press ENTER after selecting options"
                  : ""
              }
              value={currAtt}
              onKeyDown={HandleAttChange}
              onFocus={() => {
                setIsFocused(true);
                setIsOpenAtt(true);
              }}
              onBlur={() => setIsFocused(false)}
              className="p-3 bg-gray-900 text-gray-300 focus:outline-none flex-grow"
            />
          </div>
          {isOpenAtt && (
            <div className="absolute z-10 border border-gray-600 border-t-0 p-2 rounded bg-gray-900 w-full max-h-60 overflow-hidden">
              {filteredAttributes.map((attr, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-1 hover:bg-gray-800 text-gray-300 ${
                    index === selectedIndex ? "bg-gray-800" : ""
                  }`}
                >
                  <button
                    className="w-full text-left"
                    onClick={() => {
                      HandleAttClick(attr);
                    }}
                  >
                    {attr}
                  </button>
                </div>
              ))}
            </div>
          )}
          {isOpenOpr && currAtt.length > 0 && !isOpenAtt && (
            <div className="absolute z-10 border border-gray-600 p-2 rounded bg-gray-900 w-full">
              {operations.map((op, idx) => (
                <div
                  key={idx}
                  className={`cursor-pointer p-1 w-full hover:bg-gray-800 ${
                    idx === selectedIndex ? "bg-gray-800" : ""
                  }`}
                >
                  <button
                    className="w-full text-left"
                    onClick={() => {
                      HandleOprClick(op);
                    }}
                  >
                    {selectedAtt} {op}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div> <h1 className="mt-60 flex items-center justify-center">Important points for Beta Version 1.0.0x  .</h1>
      </div>
    </div>
  );
}

export default QueryFilter;

