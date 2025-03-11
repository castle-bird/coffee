import { useMemo } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/loading";
import ProductsList from "../../components/producst-list";

function TeaAde() {
    const products = useSelector((state) => state.products);

    const teaAdeProducts = useMemo(
        () => products.filter((product) => product.category === "티에이드"),
        [products]
    );
    return (
        <>
            {products.length === 0 && <Loading />}
            {products.length !== 0 && <ProductsList products={teaAdeProducts} />}
        </>
    );
}

export default TeaAde;
