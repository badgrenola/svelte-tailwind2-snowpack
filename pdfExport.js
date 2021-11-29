const express = require("express");
const puppeteer = require("puppeteer");
const app = express();

const wait = (ms) => new Promise((res, rej) => {
  setTimeout(() => { res() }, ms * 1000)
})

const render = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--font-render-hinting=none', '--force-color-profile=srgb']
  });
  const page = await browser.newPage();
  await page.setViewport({width: 3508, height: 2480})
  await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36");
  const url = "http://localhost:8080";
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 15 * 1000 });
  // console.log("loaded page")
  // await wait(10)
  // console.log("waiting")

  let height = await page.evaluate(() => document.getElementsByTagName("main").item(0).offsetHeight);
  console.log("Height", height);

  // await page.emulateMediaType("screen")
  await page.pdf({
    printBackground: false,
    path: "page.pdf",
    // format: "A4",
    height: (height + 720) + "px",
    margin: "none"
  });
  // await page.screenshot({path: 'screenshot.png'});

  await browser.close();
  process.exit(0)
}

app.listen(3000, () => {
  render()
});