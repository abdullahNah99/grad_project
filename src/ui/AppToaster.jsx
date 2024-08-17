import { Toaster } from "react-hot-toast";

function AppToaster() {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: { duration: 3000 },
        error: { duration: 5000 },
        style: {
          fontSize: "18px",
          fontFamily: "Cairo, Arial, sans-serif",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "white",
          color: "var(--color-grey-700)",
        },
      }}
    />
  );
}

export default AppToaster;
