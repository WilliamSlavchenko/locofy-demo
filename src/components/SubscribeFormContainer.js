import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import VariantContainedSizeLarge from "./VariantContainedSizeLarge";
import "./SubscribeFormContainer.css";

const SubscribeFormContainer = () => {
  return (
    <div className="subscribe-section">
      <div className="share-your-travels-form">
        <div className="form-header">
          <b className="form-title-subtext">subscribe to our newsletter</b>
          <h2 className="form-title">Get weekly updates</h2>
        </div>
        <div className="form">
          <div className="form-text">
            <div className="fill-in-your">
              Fill in your details to join the party!
            </div>
          </div>
          <div className="form-fields">
            <div className="form-text">
              <TextField
                className="input1"
                color="primary"
                label="Your name"
                size="medium"
                variant="outlined"
                type="text"
              />
            </div>
            <div className="form-text">
              <TextField
                className="input1"
                color="primary"
                label="Email address"
                size="medium"
                variant="outlined"
                type="text"
              />
            </div>
          </div>
          <button className="button3">
            <VariantContainedSizeLarge
              button="submit"
              variantContainedSizeLargeBoxSizing="border-box"
              buttonColor="#fff"
              buttonDisplay="inline-block"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeFormContainer;
