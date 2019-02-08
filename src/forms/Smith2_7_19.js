import puppeteer from "puppeteer";
import chance from "chance";
import Delay from "../utilities/Delay";

const Chance = new chance();

const URL = "";

const FORM_1 = '#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div.freebirdFormviewerViewItemsTextItemWrapper > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input';
const FORM_2 = '#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div:nth-child(2) > div > content > div > div:nth-child(1) > label > div > div.docssharedWizToggleLabeledContent > div';
const FORM_3 = '#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(3) > div > div.freebirdFormviewerViewItemsTextItemWrapper > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input';
const SUBMIT = '#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewNavigationNavControls > div.freebirdFormviewerViewNavigationButtonsAndProgress > div > div > content > span';

export default async function runSmithForm( runCount, headless ) {
    console.log("Running on Luke Smith's form from 2/7/19");

    /* Launch browser and go to page */
    const browser = (headless ? await puppeteer.launch() : await puppeteer.launch({ headless: false }));

    /* Fill out the form for given amount of times */
    for(let i = 0; i < runCount; i++){

        /* Stall to avoid rate limiting */
        await Delay.delay();

        /* Load a new page */
        const page = await browser.newPage();
        await page.goto(URL);

        /* Question 1 */
        await page.click(FORM_1);
        const name = await Chance.name();
        await page.keyboard.type(name);

        /* Question 2 */
        await page.click(FORM_2);

        /* Question 3 */
        await page.click(FORM_3);
        const name2 = await Chance.name();
        await page.keyboard.type(name2);

        /* Submit Google Form */
        await page.click(SUBMIT);
        console.log("Completed form count: " + (i+1));

        /* Close the current page */
        await page.close();
    }

    /* Cleanly close browser */
    browser.close();
}
