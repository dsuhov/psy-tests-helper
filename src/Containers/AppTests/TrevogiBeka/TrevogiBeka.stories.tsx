import React from "react";
import { RawTrevogiBeka } from "./TrevogiBeka";
import { trevBeka } from "../../../testsData/trevBeka";
import { action } from "@storybook/addon-actions";

export default {
  title: "Trovgi Beka",
};

export const ShkalaTrevogiBeka = () => <div style={{ maxWidth: 800 }}>
  <RawTrevogiBeka 
    testData={trevBeka}
    sending={false}
    sendStatus=""
    error=""
    onReady={action("On Ready Triggered")}
    onExit={action("On Exit Triggered")}
  />
</div>