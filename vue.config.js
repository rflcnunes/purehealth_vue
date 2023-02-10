const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/style/sass/_variables.scss";
        @import "@/style/sass/_mixins.scss";
        `,
      },
    },
  },
};
