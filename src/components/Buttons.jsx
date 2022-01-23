import React from "react";
import "./categories.css";

const Buttons = ({items, activeItem, setActiveItem}) => {
    return <div>
        <ul>
            <li className="list">{items.map((element, i) =>
                <button onClick={() => setActiveItem(element)} key={i}
                        className={activeItem === element ? "active" : "button"}>{element}
                </button>
            )}</li>
        </ul>
    </div>;
};

export default Buttons;