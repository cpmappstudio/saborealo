import { jsx } from 'react/jsx-runtime';

function PannaSectionNotch({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      viewBox: "0 0 1000 100",
      preserveAspectRatio: "none",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsx("path", { d: "M500,98.9L0,6.1V0h1000v6.1L500,98.9z", fill: "currentColor" })
    }
  );
}

export { PannaSectionNotch as P };
