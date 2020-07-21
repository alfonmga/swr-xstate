const sveltePreprocess = require('svelte-preprocess');

const dev = process.env.NODE_ENV === 'development';

module.exports = {
  preprocess: sveltePreprocess({
    postcss: require('./postcss.config'),
    aliases: [['ts', 'typescript']],
  }),
};
