"use strict";

import runKyleForm from "./forms/Kyle9_23_18";

const runCount = 150;
const headless = false;

/**
 * Spammer for Google Forms that do not require sign-in
 * @author Dylan L. Cheung <cheund3@rpi.edu>
 */
(  async () => {
    console.log("Starting Google Form Spammer");
    await runKyleForm(runCount, headless);
})();