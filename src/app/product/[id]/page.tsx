import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ProductDetails from "../../../components/productDetails";
import RelatedProducts from "../../../components/reletedProducts";

export default function ProductDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    return (
        <div>
            <Header />
            <ProductDetails id={params.id} />
            <RelatedProducts />
            <Footer />
        </div>
    );
}
