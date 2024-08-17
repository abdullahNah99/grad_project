import { mainColors } from "../style/mainColors";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient( 95deg,${mainColors.lightGreen} 0%,${mainColors.mainGreen} 50%,${mainColors.darkGreen} 100%)`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient( 95deg,${mainColors.lightGreen} 0%,${mainColors.mainGreen} 50%,${mainColors.darkGreen} 100%)`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: mainColors.lightGrey,
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState, color }) => ({
  backgroundColor: mainColors.mainGrey,
  zIndex: 1,
  color: mainColors.white,
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: color,
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: color,
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className, step } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      color={step.color}
      className={className}
    >
      {step.icon}
    </ColorlibStepIconRoot>
  );
}

function CustomizedSteppers({ steps, activeStep }) {
  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<ColorlibConnector />}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel
            StepIconComponent={(props) => (
              <ColorlibStepIcon {...props} step={step} />
            )}
          >
            <Typography variant="body1" color="initial">
              {step.label}
            </Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default CustomizedSteppers;
