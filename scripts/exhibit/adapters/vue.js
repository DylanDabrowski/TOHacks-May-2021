export function createPreviewAppSource() {
  return `import { defineComponent, h, onBeforeUnmount, onErrorCaptured, onMounted, ref } from "vue";
import { components } from "./components";

type PreviewStatus = "loading" | "ready" | "error";

function resolveProps() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("props");
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function resolveTargetPath() {
  const params = new URLSearchParams(window.location.search);
  return params.get("path");
}

export default defineComponent({
  name: "PreviewApp",
  setup() {
    const status = ref<PreviewStatus>("loading");
    const error = ref<string | null>(null);
    const componentRef = ref<any>(null);
    const props = ref(resolveProps());
    const targetPath = ref(resolveTargetPath());
    const containerStyle = {
      minHeight: "100vh",
      background: "transparent",
      padding: "24px",
      boxSizing: "border-box",
    };
    const errorStyle = {
      border: "1px solid #e5e7eb",
      padding: "16px",
      borderRadius: "12px",
      color: "#111827",
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
    };

    const loadComponent = async () => {
      const path = targetPath.value;
      if (!path) {
        status.value = "error";
        error.value = "Missing component path";
        return;
      }
      const entry = components.find((c) => c.path === path);
      if (!entry) {
        status.value = "error";
        error.value = "Component not found";
        return;
      }
      try {
        const mod = await entry.importer();
        const preferredName = entry?.name;
        const isComponent = (value) =>
          typeof value === "function" ||
          (value && typeof value === "object");
        const pickExport = () => {
          if (preferredName && isComponent(mod[preferredName])) {
            return mod[preferredName];
          }
          if (isComponent(mod.default)) return mod.default;
          for (const key of Object.keys(mod)) {
            if (key === "default") continue;
            if (isComponent(mod[key])) return mod[key];
          }
          return mod.default || mod[Object.keys(mod)[0]];
        };
        const Exported = pickExport();
        if (!Exported) {
          throw new Error("No component export found");
        }
        componentRef.value = Exported;
        status.value = "ready";
      } catch (err) {
        status.value = "error";
        error.value = err instanceof Error ? err.message : String(err);
      }
    };

    const syncFromLocation = () => {
      targetPath.value = resolveTargetPath();
      props.value = resolveProps();
      status.value = "loading";
      error.value = null;
      componentRef.value = null;
      loadComponent();
    };

    onMounted(() => {
      syncFromLocation();
      window.addEventListener("popstate", syncFromLocation);
      window.addEventListener("hashchange", syncFromLocation);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("popstate", syncFromLocation);
      window.removeEventListener("hashchange", syncFromLocation);
    });
    onErrorCaptured((err) => {
      status.value = "error";
      error.value = err instanceof Error ? err.message : String(err);
      return false;
    });

    return () =>
      h(
        "div",
        {
          id: "exhibit-preview",
          "data-exhibit-preview": status.value,
          style: containerStyle,
        },
        [
          status.value === "error"
            ? h("div", { style: errorStyle }, "Preview error: " + error.value)
            : null,
          status.value === "ready" && componentRef.value
            ? h(componentRef.value, props.value || {})
            : null,
        ],
      );
  },
});
`;
}

export function createBundleAppSource() {
  return `import { defineComponent, h, onErrorCaptured, ref } from "vue";
import { components } from "./bundle-components";

type PreviewStatus = "loading" | "ready" | "error";

function resolveTargetPath() {
  const win = window as any;
  if (win.__EXHIBIT_COMPONENT_PATH__) return win.__EXHIBIT_COMPONENT_PATH__;
  const params = new URLSearchParams(window.location.search);
  return params.get("path");
}

function resolveProps() {
  const win = window as any;
  if (win.__EXHIBIT_COMPONENT_PROPS__) return win.__EXHIBIT_COMPONENT_PROPS__;
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("props");
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export default defineComponent({
  name: "BundleApp",
  setup() {
    const status = ref<PreviewStatus>("loading");
    const error = ref<string | null>(null);
    const componentRef = ref<any>(null);
    const props = ref(resolveProps());
    const containerStyle = {
      minHeight: "100vh",
      background: "transparent",
      padding: "24px",
      boxSizing: "border-box",
    };
    const errorStyle = {
      border: "1px solid #e5e7eb",
      padding: "16px",
      borderRadius: "12px",
      color: "#111827",
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
    };

    const loadComponent = async () => {
      const targetPath = resolveTargetPath();
      if (!targetPath) {
        status.value = "error";
        error.value = "Missing component path";
        return;
      }
      const entry = components.find((c) => c.path === targetPath);
      if (!entry) {
        status.value = "error";
        error.value = "Component not found";
        return;
      }
      try {
        const mod = await entry.importer();
        const preferredName = entry?.name;
        const isComponent = (value) =>
          typeof value === "function" ||
          (value && typeof value === "object");
        const pickExport = () => {
          if (preferredName && isComponent(mod[preferredName])) {
            return mod[preferredName];
          }
          if (isComponent(mod.default)) return mod.default;
          for (const key of Object.keys(mod)) {
            if (key === "default") continue;
            if (isComponent(mod[key])) return mod[key];
          }
          return mod.default || mod[Object.keys(mod)[0]];
        };
        const Exported = pickExport();
        if (!Exported) {
          throw new Error("No component export found");
        }
        componentRef.value = Exported;
        status.value = "ready";
      } catch (err) {
        status.value = "error";
        error.value = err instanceof Error ? err.message : String(err);
      }
    };

    loadComponent();
    onErrorCaptured((err) => {
      status.value = "error";
      error.value = err instanceof Error ? err.message : String(err);
      return false;
    });

    return () =>
      h(
        "div",
        {
          id: "exhibit-preview",
          "data-exhibit-preview": status.value,
          style: containerStyle,
        },
        [
          status.value === "error"
            ? h("div", { style: errorStyle }, "Preview error: " + error.value)
            : null,
          status.value === "ready" && componentRef.value
            ? h(componentRef.value, props.value || {})
            : null,
        ],
      );
  },
});
`;
}
