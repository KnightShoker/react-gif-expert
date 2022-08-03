import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />
            
           
            {
                categories.map(category => {
                    return <GifGrid key={category} category={category}/>
                })
            }               
            
        </>
    )
}
