import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball Z']);

    // const handleAdd = (e) => {
    //     // setCategories([...categories, 'Hunter X Hunter']);
    //     setCategories(cats => [...cats, 'Hunter X Hunter']);
    // }
    return (
        <div>

            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            category={category}
                            key={category}
                        />
                    )
                }
            </ol>
        </div>
    );
};

export default GifExpertApp;