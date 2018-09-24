import puppeteer from "puppeteer";

const URL = null; // add URL of form here...
const FORM_1 = '#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div.freebirdFormviewerViewItemsItemItem.freebirdFormviewerViewItemsTextTextItem > div.freebirdFormviewerViewItemsTextItemWrapper > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input';
const FORM_2 = '#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(2) > div:nth-child(2) > div > content > div > label:nth-child(4)';
const FORM_3 = '#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(3) > div:nth-child(2) > div > content > div > label:nth-child(3)';
const FORM_4 = '#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(4) > div:nth-child(2) > div > content > div > label:nth-child(7)';
const FORM_6 = '#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewNavigationNavControls > div.freebirdFormviewerViewNavigationButtonsAndProgress > div > div';

export default async function runKyleForm( runCount, headless ) {
    console.log("Running on Kyle's form from 9/23/18");

    /* Launch browser and go to page */
    const browser = (headless ? await puppeteer.launch() : await puppeteer.launch({ headless: false }));

    /* Fill out the form for given amount of times */
    for(let i = 0; i < runCount; i++){

        /* Load a new page */
        const page = await browser.newPage();
        await page.goto(URL);

        /* Question 1 */
        await page.click(FORM_1);
        await page.keyboard.type("...");

        /* Question 2 */
        await page.click(FORM_2);

        /* Question 3 */
        await page.click(FORM_3);

        /* Question 4 */
        await page.click(FORM_4);

        /* Submit Google Form */
        await page.click(FORM_6);
        console.log("Completed form count: " + (i+1));

        /* Close the current page */
        await page.close();
    }

    /* Cleanly close browser */
    browser.close();
}
