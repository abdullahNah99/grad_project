import { useState } from "react";
import { useGetAllTeams } from "../teams/useGetAllTeams";
import { alpha, Typography } from "@mui/material";
import { mainColors } from "../../style/mainColors";
import { useQueryClient } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TeamDialogItem from "../teams/TeamDialogItem";
import Loader from "../../ui/Loader";
import StyledScrollbarList from "../../mui_custom_components/StyledScrollbarList";

function TeamsDialog({
  open,
  setOpen,
  title,
  onSubmit,
  onSelect,
  isMultiple = true,
}) {
  const [selected, setSelected] = useState(isMultiple ? [] : null);
  const queryClient = useQueryClient();
  const teamsData = queryClient.getQueryData(["Teams"]);
  const { refetch, isLoading } = useGetAllTeams();

  if (!teamsData) refetch();
  if (isLoading) return <Loader />;

  const { team: teams } = teamsData;

  function handleSelect(teamID) {
    // console.log(teamID);
    onSelect?.(teams.find((team) => team.id === teamID));
    if (isMultiple) {
      if (selected.includes(teamID))
        setSelected(selected.filter((id) => id !== teamID));
      else setSelected([...selected, teamID]);
    } else {
      setSelected(teamID);
      setOpen(false);
    }
  }

  function handleSubmit() {
    const selectedTeams = selected.map((id) =>
      teams.find((team) => team.id === id)
    );
    console.log(selectedTeams);
    onSubmit?.();
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle align="right">{title}</DialogTitle>

      <DialogContent>
        <Box sx={{ width: "33vw" }}>
          {Boolean(!teams.length) && (
            <Typography variant="body1" align="center" mt={3}>
              لم تقم بإضافة أي فريق بعد
            </Typography>
          )}

          {Boolean(teams.length) && (
            <StyledScrollbarList sx={{ maxHeight: "39vh" }}>
              {teams.map((team, index) => (
                <TeamDialogItem
                  key={index}
                  team={team}
                  onClick={() => handleSelect(team.id)}
                  selected={isMultiple && selected.includes(team.id)}
                />
              ))}
            </StyledScrollbarList>
          )}
        </Box>
      </DialogContent>

      {isMultiple && (
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            // disabled={isSubmitting}
            sx={{
              color: mainColors.mainBlue,
            }}
          >
            إلغاء
          </Button>
          <Button
            // disabled={isSubmitting}
            onClick={handleSubmit}
            autoFocus
            variant="contained"
            sx={{
              bgcolor: alpha(mainColors.darkBlue, 0.9),
              ":hover": {
                bgcolor: mainColors.darkBlue,
              },
            }}
          >
            إضافة
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}

export default TeamsDialog;
