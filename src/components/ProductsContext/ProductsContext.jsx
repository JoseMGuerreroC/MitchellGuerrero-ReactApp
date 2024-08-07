import { createContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            if (products.length > 0) return;
            const db = getFirestore();
            const itemCollection = collection (db, 'items');
            const snapShot = await getDocs(itemCollection);
            if(snapShot.size > 0) {
                setProducts(snapShot.docs.map(doc => ({...doc.data(), id:doc.id})));
            }else{
                console.log('No existe la coleccion');
            }
            setLoading(false);
        };
        fetchProducts();
    }, []);

    return(
        <ProductsContext.Provider value={{products, loading}}>
            {children}
        </ProductsContext.Provider>
    )
}