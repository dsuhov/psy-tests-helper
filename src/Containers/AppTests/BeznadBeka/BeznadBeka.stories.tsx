import React from "react";
import { RawBeznadBeka } from "./BeznadBeka";
import { beznadBeka } from "../../../testsData/beznadBeka";
import { action } from "@storybook/addon-actions";

export default { title: 'Beznad Beka' };


export const testWithData = () => <div style={{ maxWidth: 800 }}>
  <RawBeznadBeka
    testData={beznadBeka}
    sending={false}
    sendStatus=""
    error={null}
    onReady={action("On Ready Btn")}
    onExit={action("On Exit Trigger")}
  />
</div>