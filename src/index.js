"use strict";

import runKyleForm from "./forms/Kyle9_23_18";
import runSmithForm from "./forms/Smith2_7_19";

const runCount = 10000;
const headless = true;

/**
 * Spammer for Google Forms that do not require sign-in
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
(  async () => {
    console.log("Starting Google Form Spammer");
    await runSmithForm(runCount, headless);
})();