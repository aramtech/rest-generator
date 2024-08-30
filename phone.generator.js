const no_gen = (await import("./number.generator.js")).default;
const phone_keys = ["091", "0021891", "092", "0021892", "094", "0021894", "021", "0021821"];

export default () => {
    return "" + phone_keys[Math.floor(Math.random() * phone_keys.length)] + no_gen(7);
};
