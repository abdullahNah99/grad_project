import { formatNumber } from "../../utils/helpers";
import { mainColors } from "../../style/mainColors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import InvoiceDetailsTitle from "./InvoiceDetailsTitle";

const titles = ["الاجمالي", "سعر الوحدة", "الكمية"];

function InvoiceProductsList({ products }) {
  return (
    <Box>
      <InvoiceDetailsTitle title="قائمة المشتريات" />

      <Box
        sx={{
          mt: 2,
          border: 1,
          borderColor: mainColors.lightGrey,
          pt: 1,
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "42%",
            justifyContent: "space-between",
            mx: 1,
            pb: 1,
            // bgcolor: "red",
          }}
        >
          {titles.map((title, index) => (
            <Typography
              key={title}
              variant="body1"
              sx={{
                fontWeight: "bold",
                ml: index === 0 && "9%",
                mr: index === 1 && "16%",
                // eslint-disable-next-line no-dupe-keys
                mr: index === 2 && "14%",
              }}
            >
              {title}
            </Typography>
          ))}
        </Box>
        <Divider />
        <List>
          {products.map((product, index) => (
            <Box key={index}>
              <ListItem
                sx={{
                  justifyContent: "right",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "40%",
                      justifyContent: "space-between",
                      // bgcolor: "red",
                    }}
                  >
                    <ProductListItemNumber
                      number={formatNumber(product.amount * product.price)}
                    />
                    <ProductListItemNumber
                      number={formatNumber(product.price)}
                      sx={{ ml: 2 }}
                    />

                    <ProductListItemNumber
                      number={product.amount}
                      sx={{ ml: 2 }}
                    />
                  </Box>

                  <Typography variant="body1">{product.name}</Typography>
                </Box>
              </ListItem>

              {index < products.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default InvoiceProductsList;

function ProductListItemNumber({ number, sx }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "33%",
        // bgcolor: "red",
        ...sx,
      }}
    >
      <Typography variant="body1">{number}</Typography>
    </Box>
  );
}
