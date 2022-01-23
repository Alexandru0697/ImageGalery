import React from "react";
import Json from "./data.json";
import {Buttons, ListItems, Header} from "./components";

function App() {
    const [activeItem, setActiveItem] = React.useState("All");
    const [showImg, setShowImg] = React.useState(false);
    const [img, setImg] = React.useState("");
    const data = Json.wolves.map(element =>
        element.images[1]
    );
    const items = ["All", "Beautiful", "Creative", "Cool", "Awesome"];

    return <div className="App">
        <Header/>
        <h2 className="text">Put in use some tags</h2>
        <Buttons activeItem={activeItem} setActiveItem={setActiveItem} items={items}/>
        <ListItems showImg={showImg} setShowImg={setShowImg} img={img} setImg={setImg} data={data}/>
    </div>;
}

export default App;
