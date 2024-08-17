import { capitalize } from "../../utils/helpers";
import { mainColors } from "../../style/mainColors";
import { useGetTeamDates } from "../teams/useGetTeamDates";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Loader from "../../ui/Loader";
import RefetchButton from "../../ui/RefetchButton";
import TeamDateRow from "../teams/TeamDateRow";
import List from "@mui/material/List";

function HandleOrderSideBar({ selectedTeam }) {
  const { isLoading, getTeamDates, error } = useGetTeamDates();
  const [teamDates, setTeamDates] = useState([]);

  useEffect(
    function () {
      if (!selectedTeam) return;
      getTeamDates(
        { teamID: selectedTeam.id },
        {
          onSuccess: (res) => {
            setTeamDates(res.teamDate);
          },
        }
      );
    },
    [getTeamDates, selectedTeam]
  );

  return (
    <>
      {isLoading && <Loader />}

      <Box
        sx={{
          bgcolor: mainColors.lightYellow,
          borderLeft: 1,
          borderLeftColor: mainColors.mainYellow,
          width: "30%",
          height: "100%",
          minHeight: "calc(100vh - 64px)",
          px: 1,
          bottom: 0,
          position: "sticky",
        }}
      >
        {!selectedTeam && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography variant="h6" align="center">
              يرجى اختيار فريق لاستعراض المواعيد المحجوزة
            </Typography>
          </Box>
        )}

        {selectedTeam && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: error && "center",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              pt={1}
              fontWeight="bold"
              fontSize="18px"
              align="center"
            >
              {!isLoading && error && "حدث خطأ ما يرجى اعادة المحاولة"}

              {!isLoading &&
                !error &&
                `${capitalize(selectedTeam.name)} المواعيد المحجوزة ل`}
            </Typography>

            {!isLoading && error && (
              <RefetchButton
                sx={{ width: "33px", height: "33px", mx: "auto", mt: 1 }}
                onRefetch={() => getTeamDates({ teamID: selectedTeam.id })}
              />
            )}

            {!isLoading &&
              !error &&
              (teamDates?.length ? (
                <List sx={{ width: "100%" }}>
                  {teamDates?.map((teamDate, index) => (
                    <TeamDateRow
                      key={index}
                      id={index + 1}
                      startDate={teamDate.start_time}
                      endDate={teamDate.end_time}
                    />
                  ))}
                </List>
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    mt: "75%",
                    fontWeight: "bold",
                    color: mainColors.darkGrey,
                    fontSize: "18px",
                  }}
                >
                  لا يوجد مواعيد محجوزة
                </Typography>
              ))}
          </Box>
        )}
      </Box>
    </>
  );
}

export default HandleOrderSideBar;
