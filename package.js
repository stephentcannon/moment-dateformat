Package.describe({
  name: 'steeve:moment-dateformat',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'a simple global template helper for formatting dates with moment',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stephentcannon/moment-dateformat.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use([
    'templating',
    'mrt:moment@2.8.1',
  ],'client');
  
  api.addFiles('steeve:moment-dateformat.js');
});

