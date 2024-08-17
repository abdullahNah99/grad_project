import { useGetAllPreviousWorks } from "../features/previous_works/useGetAllPreviousWorks";
import AddPreviousWork from "../features/previous_works/AddPreviousWork";
import PreviousWorkItem from "../features/previous_works/PreviousWorkItem";
import ErrorMessage from "../ui/ErrorMessage";
import Loader from "../ui/Loader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import NoDataMessage from "../ui/NoDataMessage";

function PreviousWorksPage() {
  const { previousWorks, isLoading, error, refetch } = useGetAllPreviousWorks();

  if (isLoading) return <Loader />;

  if (error)
    return (
      <Box sx={{ mt: 10, mx: 10 }}>
        <ErrorMessage resourceName="الأعمال السابقة" onRefetch={refetch} />
      </Box>
    );

  console.log(previousWorks);

  return (
    <Box p={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4" color="initial" fontWeight="bold">
          الأعمال السابقة
        </Typography>

        <AddPreviousWork />
      </Box>

      {Boolean(!previousWorks.length) && <NoDataMessage resourceName="عمل" />}

      {Boolean(previousWorks.length) &&
        previousWorks.map((previousWork, index) => (
          <Box key={index}>
            <PreviousWorkItem previousWork={previousWork} />

            {index < previousWorks.length - 1 && <Divider sx={{ my: 1 }} />}
          </Box>
        ))}
    </Box>
  );
}

export default PreviousWorksPage;
