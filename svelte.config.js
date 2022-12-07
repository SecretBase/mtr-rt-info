import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

const production = !process.env.ROLLUP_WATCH;

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    sourceMap: !production,
    postcss: true,
  }),
};
