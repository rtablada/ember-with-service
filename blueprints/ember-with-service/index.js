/*jshint node:true*/
module.exports = {
  description: 'install ember-with-service into a typical project',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  beforeInstall: function(options) {
    return this.addPackageToProject('ember-getowner-polyfill');
  },
};
