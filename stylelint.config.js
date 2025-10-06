module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-order/config-recommended",
    "stylelint-config-prettier",
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-selector-bem-pattern",
  ],
  rules: {
    indentation: 2,
    "number-leading-zero": "always",
    "string-quotes": "double",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "block-no-empty": true,
    "no-duplicate-selectors": true,
    "declaration-block-no-duplicate-properties": true,
    "selector-max-id": 0,

    "plugin/selector-bem-pattern": {
      preset: "bem",
      componentName: "[A-Z]+",
      componentSelectors: {
        initial: "^\\.{component}(?:__[a-z0-9]+)?(?:--[a-z0-9]+)?$",
      },
      implicitComponents: "src/**/*.scss",
    },

    "order/properties-order": [
      [
        {
          groupName: "Positioning",
          properties: ["position", "top", "right", "bottom", "left", "z-index"],
        },
        {
          groupName: "Display & Box",
          properties: [
            "display",
            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "align-items",
            "justify-content",
            "float",
            "clear",
            "overflow",
          ],
        },
        {
          groupName: "Box Model",
          properties: [
            "width",
            "height",
            "padding",
            "margin",
            "border",
            "border-radius",
          ],
        },
        {
          groupName: "Typography",
          properties: [
            "font",
            "font-size",
            "font-weight",
            "line-height",
            "text-align",
            "text-transform",
            "color",
          ],
        },
        {
          groupName: "Background",
          properties: [
            "background",
            "background-color",
            "background-image",
            "background-size",
            "background-repeat",
            "background-position",
          ],
        },
        { groupName: "Animation", properties: ["transition", "animation"] },
        { groupName: "Other", properties: ["cursor", "opacity", "visibility"] },
      ],
      { unspecified: "bottomAlphabetical" },
    ],

    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/dollar-variable-pattern": "^[_a-z]+[a-z0-9-]*$",
    "scss/percent-placeholder-pattern": "^[_a-z]+[a-z0-9-]*$",

    "no-descending-specificity": null,
  },
};
