import { useGetAllProducts } from "./useGetAllProducts";
import { useSearchParams } from "react-router-dom";
import {
  capitalize,
  getProductCategoryID,
  getProductTypyInArabic,
} from "../../utils/helpers";
import { PAGE_SIZE } from "../../utils/constants";
import ProductRow from "./ProductRow";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";
import NoDataMessage from "../../ui/NoDataMessage";
import TablePaginationRow from "../../ui/TablePaginationRow";
import Table from "../../ui/Table";

const titles = [
  { text: "الصورة", sx: { ml: 1 } },
  { text: "الاسم", sx: { ml: "13%" } },
  { text: "الكمية", sx: { ml: "29.5%" } },
  { text: "السعر", sx: { ml: "12%" } },
  { text: "الحالة", sx: { ml: "15.5%" } },
];

function ProductsTable() {
  const { isLoading, error, products, refetch } = useGetAllProducts();

  const [searchParams] = useSearchParams();
  const currentType = searchParams.get("type") || "all";
  const currentPage = Number(searchParams.get("page")) || 1;

  if (isLoading) return <Loader />;

  if (error)
    return <ErrorMessage onRefetch={refetch} resourceName="المنتجات" />;

  console.log(products);

  const filteredProducts =
    currentType === "all"
      ? products
      : products?.filter(
          (product) => product.category_id === getProductCategoryID(currentType)
        );

  if (!filteredProducts?.length)
    return (
      <NoDataMessage
        resourceName={
          currentType === "all"
            ? "منتح"
            : `نوع من ${getProductTypyInArabic(currentType)}`
        }
      />
    );

  const pagesCount = Math.ceil(filteredProducts.length / PAGE_SIZE);

  const displayedProducts = filteredProducts.slice(
    PAGE_SIZE * (currentPage - 1),
    currentPage === pagesCount
      ? filteredProducts.length
      : PAGE_SIZE * currentPage
  );

  return (
    <>
      <Table data={displayedProducts} titles={titles} row={<ProductRow />} />
      <TablePaginationRow
        resourceName={
          currentType === "all" ? "Products" : capitalize(currentType)
        }
        count={filteredProducts.length}
      />
    </>
  );
}

export default ProductsTable;
