export function createPreviewAppSource() {
  return `import React, { useEffect, useMemo, useState } from "react";
import { components } from "./components";
import PreviewWrapper from "./preview-wrapper";

class PreviewErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    this.props.onError(error);
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

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

function transformPropValue(value) {
  if (!value || typeof value !== "object") return value;
  if (value.__exhibitHtml && typeof value.__exhibitHtml === "string") {
    return React.createElement("span", {
      dangerouslySetInnerHTML: { __html: value.__exhibitHtml },
    });
  }
  if (Array.isArray(value)) return value.map(transformPropValue);
  const entries = Object.entries(value).map(([key, val]) => [
    key,
    transformPropValue(val),
  ]);
  return Object.fromEntries(entries);
}

function transformProps(raw) {
  if (!raw || typeof raw !== "object") return raw;
  return Object.fromEntries(
    Object.entries(raw).map(([key, val]) => [key, transformPropValue(val)]),
  );
}

export default function App() {
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [Component, setComponent] = useState(null);

  const targetPath = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("path");
  }, []);
  const props = useMemo(() => resolveProps(), []);
  const resolvedProps = useMemo(() => transformProps(props), [props]);

  useEffect(() => {
    if (!targetPath) {
      setStatus("error");
      setError("Missing component path");
      return;
    }
    const entry = components.find((c) => c.path === targetPath);
    if (!entry) {
      setStatus("error");
      setError("Component not found");
      return;
    }
    entry
      .importer()
      .then((mod) => {
        const preferredName = entry?.name;
        const isComponent = (value) =>
          typeof value === "function" ||
          (value && typeof value === "object" && "$$typeof" in value);
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
        setComponent(() => Exported);
        setStatus("ready");
      })
      .catch((err) => {
        setStatus("error");
        setError(err.message);
      });
  }, [targetPath]);

  return (
    <div
      id="exhibit-preview"
      data-exhibit-preview={status}
      style={{
        minHeight: "100vh",
        background: "transparent",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      {status === "error" && (
        <div
          style={{
            border: "1px solid #e5e7eb",
            padding: "16px",
            borderRadius: "12px",
            color: "#111827",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Preview error: {error}
        </div>
      )}
      {status === "ready" && Component ? (
        <PreviewErrorBoundary
          onError={(err) => {
            setStatus("error");
            setError(err.message || "Render failed");
          }}
        >
          <PreviewWrapper>
            <Component {...resolvedProps} />
          </PreviewWrapper>
        </PreviewErrorBoundary>
      ) : null}
    </div>
  );
}
`;
}

export function createBundleAppSource() {
  return `import React, { useEffect, useMemo, useState } from "react";
import { components } from "./bundle-components";
import PreviewWrapper from "./bundle-wrapper";

class PreviewErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    this.props.onError(error);
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

function resolveTargetPath() {
  const win = window;
  if (win.__EXHIBIT_COMPONENT_PATH__) return win.__EXHIBIT_COMPONENT_PATH__;
  const params = new URLSearchParams(window.location.search);
  return params.get("path");
}

function resolveProps() {
  const win = window;
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

function transformPropValue(value) {
  if (!value || typeof value !== "object") return value;
  if (value.__exhibitHtml && typeof value.__exhibitHtml === "string") {
    return React.createElement("span", {
      dangerouslySetInnerHTML: { __html: value.__exhibitHtml },
    });
  }
  if (Array.isArray(value)) return value.map(transformPropValue);
  const entries = Object.entries(value).map(([key, val]) => [
    key,
    transformPropValue(val),
  ]);
  return Object.fromEntries(entries);
}

function transformProps(raw) {
  if (!raw || typeof raw !== "object") return raw;
  return Object.fromEntries(
    Object.entries(raw).map(([key, val]) => [key, transformPropValue(val)]),
  );
}

export default function BundleApp() {
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [Component, setComponent] = useState(null);

  const targetPath = useMemo(() => resolveTargetPath(), []);
  const props = useMemo(() => resolveProps(), []);
  const resolvedProps = useMemo(() => transformProps(props), [props]);

  useEffect(() => {
    if (!targetPath) {
      setStatus("error");
      setError("Missing component path");
      return;
    }
    const entry = components.find((c) => c.path === targetPath);
    if (!entry) {
      setStatus("error");
      setError("Component not found");
      return;
    }
    entry
      .importer()
      .then((mod) => {
        const preferredName = entry?.name;
        const isComponent = (value) =>
          typeof value === "function" ||
          (value && typeof value === "object" && "$$typeof" in value);
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
        setComponent(() => Exported);
        setStatus("ready");
      })
      .catch((err) => {
        setStatus("error");
        setError(err.message);
      });
  }, [targetPath]);

  return (
    <div
      id="exhibit-preview"
      data-exhibit-preview={status}
      style={{
        minHeight: "100vh",
        background: "transparent",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      {status === "error" && (
        <div
          style={{
            border: "1px solid #e5e7eb",
            padding: "16px",
            borderRadius: "12px",
            color: "#111827",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Preview error: {error}
        </div>
      )}
      {status === "ready" && Component ? (
        <PreviewErrorBoundary
          onError={(err) => {
            setStatus("error");
            setError(err.message || "Render failed");
          }}
        >
          <PreviewWrapper>
            <Component {...resolvedProps} />
          </PreviewWrapper>
        </PreviewErrorBoundary>
      ) : null}
    </div>
  );
}
`;
}
