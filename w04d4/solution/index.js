import sass from "sass";
import { promisify } from "util";
import { writeFile } from "fs";
const sassRenderPromise = promisify(sass.render);
const writeFilePromise = promisify(writeFile);

async function main() {
  const styleResult = await sassRenderPromise({
    file: `${process.cwd()}/test.scss`,
    outFile: `${process.cwd()}/test.css`,
  });

  console.log(styleResult.css.toString());

  await writeFilePromise("styles.css", styleResult.css, "utf8");
}
main();