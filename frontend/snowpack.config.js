// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // Same behavior as the "src" example above:
    src:  "/dist",
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations:
    public: "/"
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    '@snowpack/plugin-sass',
    "@snowpack/plugin-babel", // 👈 have to add babel here
  ],

  packageOptions: {
    knownEntrypoints: [
      "react/jsx-runtime",
      // ...
    ],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
