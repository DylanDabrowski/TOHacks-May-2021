import * as reactAdapter from "./react.js";
import * as vueAdapter from "./vue.js";

export function getFrameworkAdapter(frameworkId) {
  if (frameworkId === "vue") return vueAdapter;
  return reactAdapter;
}
