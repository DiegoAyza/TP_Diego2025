import { useState,useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";

export const ItemListContainer = ()=>{
const [products,setProducts] = useState([])
const {category}= useParams();

useEffect(()=>{
    /*fetch("/data/products.json")
    .then((res)=> {
        if(!res.ok){
            throw new Error ("Hubo un problema al buscar los datos");
        }
        return res.json();
    })
    .then((data)=> {
        if (category){
        setProducts(data.filter((prod)=> prod.category === category));
        }else{
        setProducts (data);}
    })*/
   getProducts(category)
    .then((data) => setProducts(data))
    .catch((err)=> {console.log(err);
    })
},[category])

    return (
    <section>
        <h1> Bienvenidos </h1>
        <ItemList list={products}/>
    </section>

);
};