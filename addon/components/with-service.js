import Ember from 'ember';
import layout from '../templates/components/with-service';
import getOwner from 'ember-getowner-polyfill';

export default Ember.Component.extend({
  layout,

  service: Ember.computed('serviceName', function() {
    let owner = getOwner(this);
    let serviceName = this.get('serviceName');
    return owner.lookup(`service:${serviceName}`);
  }),
});
