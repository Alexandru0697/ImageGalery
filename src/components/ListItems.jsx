import React from "react";
import "./listItem.css";

const ListItems = ({data, showImg, setShowImg, img, setImg}) => {
    const getElement = (elemenet) => {
        setImg(elemenet);
        setShowImg(true);
    };
    return (
        <>
            <div className={showImg ? "image open" : "image"}>
                <img src={img} alt=""/>
                <span onClick={() => setShowImg(false)}>&#10005;</span>
            </div>
            <div className="images">
                {data.map((elemenet, i) => (
                    <img onClick={() => getElement(elemenet)} className="abcd" key={i} src={elemenet} alt="images"/>
                ))}

            </div>
        </>

    );
};

export default ListItems;