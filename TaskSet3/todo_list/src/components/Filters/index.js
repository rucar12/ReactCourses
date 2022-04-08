import React from "react";
import "./Filters.css"

const Filters = ({item, setItem}) => {
    let i = 0;
    const showAll = (data) => {
        setItem(item.filter(el => {
            if (data[i]===el) {
                i++;
                return el;
            }
        }))
    };
    const showChecked = (data) => {
        setItem(item.filter(el => {
            if (data[i].wrote===true) {
                i++;
                return el;
            } else {
                i++;
            }
        }))
    }
    const showUnchecked = (data) => {
        setItem(item.filter(el => {
            if (data[i].wrote===false) {
                i++;

                return el;
            } else {
                i++;
            }
        }))
    }

  return(
      <div className={"filter-buttons"}>Show:
          <button className={"filter-buttons-item"} onClick={()=> showAll(item)}>all</button>/
          <button className={"filter-buttons-item"} onClick={()=> showChecked(item)}>checked</button>/
          <button className={"filter-buttons-item"} onClick={()=> showUnchecked(item)}>unchecked</button>
      </div>
  );
};

export default Filters;