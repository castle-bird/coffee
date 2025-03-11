import { useSelector } from "react-redux";

import Loading from "../../components/loading";
import ProductsList from "../../components/productsList";

function AllMenu() {
    const products = useSelector((state) => state.products);

    return (
        <>
            {products.length === 0 && <Loading />}
            {products.length !== 0 && <ProductsList products={products} />}
        </>
    );
}

export default AllMenu;
