import React, { useEffect } from "react";
import { ssoDemo } from "../test";
import * as microsoftTeams from "@microsoft/teams-js";

function SSODemo() {
  console.log("First Render");
  useEffect(() => {
    console.log("Inside useeffect");
    microsoftTeams.app.initialize((res) => {
      console.log("MICROSOFT INITIALIZED", res);
      ssoDemo();
    });
  }, []);
  return <div>This is testing sso route</div>;
}

export default SSODemo;
