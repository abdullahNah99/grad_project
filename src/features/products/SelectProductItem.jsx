import { useEffect, useState } from "react";
import { mainColors } from "../../style/mainColors";
import { BASE_URL } from "../../utils/constants";
import Card from "@mui/material/Card";
import NetworkImage from "../../ui/NetworkImage";
import Box from "@mui/material/Box";
import CountSelector from "../../ui/CountSelector";
import EllipsisText from "../../mui_custom_components/EllipsisText";

function SelectProductItem({ product, selectedProducts, setSelectedProducts }) {
  const { image, name, id } = product;
  const selected = selectedProducts.find((product) => id === product.id);
  // const [amount, setAmount] = useState(selected ? selected.amount : 1);
  const [amount, setAmount] = useState(
    selected
      ? Object.keys(selected).indexOf("pivot") > -1
        ? selected.pivot.amount
        : selected.amount
      : 1
  );

  useEffect(
    function () {
      if (selected && selected.amount !== amount)
        setSelectedProducts((products) =>
          products.map((product) =>
            product.id === id ? { ...product, amount } : product
          )
        );
    },
    [id, amount, selected, setSelectedProducts]
  );

  function handleClick() {
    if (selected)
      setSelectedProducts((products) =>
        products.filter((product) => product.id !== id)
      );
    else setSelectedProducts((products) => [...products, { id, amount }]);
  }

  return (
    <Card
      onClick={handleClick}
      sx={{
        width: "85%",
        // width: "256px",
        cursor: "pointer",
        borderRadius: "8px",
        opacity: !selected ? 0.5 : 1,
        border: selected && 2,
        borderColor: selected && mainColors.darkOrange,
        minHeight: "300px",
      }}
    >
      <NetworkImage
        src={`${BASE_URL.split("/api")[0]}/${image}`}
        sx={{ height: "256px", mb: 1, objectFit: "contain" }}
      />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={1}
      >
        <EllipsisText
          maxWidth={!selected ? "100%" : 150}
          sx={{ fontSize: "18px", mb: 1 }}
        >
          {name}
        </EllipsisText>

        {selected && (
          <CountSelector {...{ count: amount, setCount: setAmount }} />
        )}
      </Box>
    </Card>
  );
}

export default SelectProductItem;
