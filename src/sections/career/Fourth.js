import mapImg from "../../assets/careers/map.png";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import { settings } from "../../slickSliderSettings";
import { testimonialData } from "./data/career";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#04111D",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#04111D",
    color: "rgb(229, 232, 235)",
    maxWidth: 220,
    borderRadius: 15,
    textAlign: "center",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
}));

const useStyles = makeStyles(() => ({
  textField: {
    fontSize: "15px",
    fontWeight: "600",
  },
}));

const Fourth = () => {
  const classes = useStyles();
  const [openO, setOpenO] = React.useState(false);
  const [openT, setOpenT] = React.useState(false);
  const [openTh, setOpenTh] = React.useState(false);
  const [openF, setOpenF] = React.useState(false);
  const [openFi, setOpenFi] = React.useState(false);
  const [openS, setOpenS] = React.useState(false);
  const [openSe, setOpenSe] = React.useState(false);
  const [openE, setOpenE] = React.useState(false);
  const [openN, setOpenN] = React.useState(false);
  const [openTe, setOpenTe] = React.useState(false);
  const [openEl, setOpenEl] = React.useState(false);
  const [openTw, setOpenTw] = React.useState(false);
  const [openThi, setOpenThi] = React.useState(false);
  const [openFo, setOpenFo] = React.useState(false);

  return (
    <div className="fourth">
      <div className="inFourth">
        <img src={mapImg} alt="" />
        <BootstrapTooltip
          open={openO}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                New York, USA
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL o"
            onClick={() => setOpenO(!openO)}
            onMouseEnter={() => setOpenO(true)}
            onMouseLeave={() => setOpenO(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openT}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                Port of Spain, Trinidad
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL t"
            onClick={() => setOpenT(!openO)}
            onMouseEnter={() => setOpenT(true)}
            onMouseLeave={() => setOpenT(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openTh}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                San Antonio, USA
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL th"
            onClick={() => setOpenTh(!openTh)}
            onMouseEnter={() => setOpenTh(true)}
            onMouseLeave={() => setOpenTh(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openF}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>Denver, USA</Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL f"
            onClick={() => setOpenF(!openF)}
            onMouseEnter={() => setOpenF(true)}
            onMouseLeave={() => setOpenF(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openFi}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                Redwood city, USA <br />
                Santa clara, USA
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL fi"
            onClick={() => setOpenFi(!openFi)}
            onMouseEnter={() => setOpenFi(true)}
            onMouseLeave={() => setOpenFi(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openS}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                Cleveland, Mexico
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL s"
            onClick={() => setOpenS(!openS)}
            onMouseEnter={() => setOpenS(true)}
            onMouseLeave={() => setOpenS(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openSe}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                Seattle, USA
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL se"
            onClick={() => setOpenSe(!openSe)}
            onMouseEnter={() => setOpenSe(true)}
            onMouseLeave={() => setOpenSe(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openE}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                Montreal, Canada
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL e"
            onClick={() => setOpenE(!openE)}
            onMouseEnter={() => setOpenF(true)}
            onMouseLeave={() => setOpenF(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openN}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                Grenoble, France
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL n"
            onClick={() => setOpenN(!openN)}
            onMouseEnter={() => setOpenN(true)}
            onMouseLeave={() => setOpenN(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openTe}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>London, UK</Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL te"
            onClick={() => setOpenTe(!openTe)}
            onMouseEnter={() => setOpenTe(true)}
            onMouseLeave={() => setOpenTe(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openEl}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                Maribor, Slovenia
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL el"
            onClick={() => setOpenEl(!openEl)}
            onMouseEnter={() => setOpenEl(true)}
            onMouseLeave={() => setOpenEl(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openTw}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                Moscow, Russia
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL tw"
            onClick={() => setOpenTw(!openTw)}
            onMouseEnter={() => setOpenTw(true)}
            onMouseLeave={() => setOpenTw(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openThi}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                Mexico City, Mexico
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL thi"
            onClick={() => setOpenThi(!openThi)}
            onMouseEnter={() => setOpenThi(true)}
            onMouseLeave={() => setOpenThi(false)}
          ></div>
        </BootstrapTooltip>
        <BootstrapTooltip
          open={openFo}
          placement="top"
          title={
            <React.Fragment>
              <Typography className={classes.textField}>
                Taipei, Taiwan
              </Typography>
            </React.Fragment>
          }
          arrow
        >
          <div
            className="mapL fo"
            onClick={() => setOpenFo(!openFo)}
            onMouseEnter={() => setOpenFo(true)}
            onMouseLeave={() => setOpenFo(false)}
          ></div>
        </BootstrapTooltip>
      </div>
      <div className="slickSliderContainer">
        <Slider {...settings}>
          {testimonialData.map((testimonialsData, id) => {
            return (
              <div key={id} className="testimonial">
                <div className="inTm">
                  <p>{testimonialsData.msg}</p>
                  <div className="inTmImg">{testimonialsData.img}</div>
                  <p className="tMname">{testimonialsData.name}</p>
                  <p>{testimonialsData.field}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Fourth;
