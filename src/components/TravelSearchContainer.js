import { useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./TravelSearchContainer.css";

const TravelSearchContainer = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);

  const onSearchFlightsButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="search-section">
        <div className="search-container">
          <div className="title">
            <h1 className="lets-explore">{`Let’s explore & travel the world`}</h1>
            <h3 className="find-the-best">
              Find the best destinations and the most popular stays!
            </h3>
          </div>
          <div className="search-form">
            <div className="form-title-group">
              <b className="search-flights">Search flights</b>
              <div className="flight-options">
                <div className="flight-type">
                  <FormControlLabel
                    className="radio"
                    label="Return"
                    labelPlacement="end"
                    control={<Radio size="medium" />}
                  />
                  <FormControlLabel
                    className="radio1"
                    label="One-way"
                    labelPlacement="end"
                    control={<Radio color="primary" checked size="medium" />}
                  />
                </div>
              </div>
            </div>
            <div className="form-inputs-row">
              <div className="inputs-row">
                <Autocomplete
                  className="departure-field"
                  size="medium"
                  disablePortal
                  options={[
                    "Singapore (SIN)",
                    "Sydney (SYD)",
                    "Siem Reap (REP)",
                    "Shanghai (PVG)",
                    "Sanya (SYX)",
                  ]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Departure"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue="Singapore -  Changi (SIN)"
                />
                <div className="arrival-field">
                  <div className="input">
                    <div className="label-container">
                      <div className="arrival">Arrival</div>
                    </div>
                    <div className="active">
                      <div className="muiautocompletetag">
                        <div className="chip">
                          <div className="container">
                            <div className="avatar">
                              <div className="op">F</div>
                            </div>
                            <div className="typography">
                              <div className="chip1">Chip</div>
                            </div>
                            <img
                              className="cancel-icon"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="chip">
                          <div className="container">
                            <div className="avatar">
                              <div className="op">F</div>
                            </div>
                            <div className="typography">
                              <div className="chip1">Chip</div>
                            </div>
                            <img
                              className="cancel-icon"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="los-angeles-la">Los Angeles (LA)</div>
                    </div>
                  </div>
                </div>
                <div className="departure-field">
                  <DatePicker
                    label="Date"
                    value={selectOutlinedDateTimePickerValue}
                    onChange={(newValue) => {
                      setSelectOutlinedDateTimePickerValue(newValue);
                    }}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        size: "medium",
                        fullWidth: true,
                        color: "primary",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="button-group">
                <button
                  className="search-flights-button"
                  onClick={onSearchFlightsButtonClick}
                >
                  <div className="button1">Search flights</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default TravelSearchContainer;
