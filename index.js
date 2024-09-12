const build = (await import("$/server/utils/utility_builder/index.js")).default;
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export default await build(__dirname, ".generator.js");
