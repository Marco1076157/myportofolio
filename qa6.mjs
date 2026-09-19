export default async function run(page) {
  await page.goto("http://localhost:5199/");
  await page.waitForSelector("h1");
  const sample = () => page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const grad = h1.querySelector(".gradient-text");
    return { full: h1.textContent, gradient: grad ? grad.textContent : null, cursor: h1.querySelector("span[aria-hidden='true']") ? h1.querySelector("span[aria-hidden='true']").textContent : null, hasBook: !!document.querySelector("img[src*='notebook']") };
  });
  const t1 = await sample();
  await page.waitForTimeout(900);
  const t2 = await sample();
  await page.waitForTimeout(900);
  const t3 = await sample();
  return { t1, t2, t3 };
}
