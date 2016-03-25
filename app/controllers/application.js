import Ember from 'ember';

const { Controller, inject: {service }} = Ember;

export default Controller.extend({
  store: service('store'),

  actions: {
    createRecords() {
      const store = this.get('store');
      let person = store.createRecord('person', {
        firstName: 'Joe',
        lastName: 'Schmoe'
      });

      let address = store.createRecord('address', {
        address1: '123 Main St.',
        city: 'Atlanta',
        province: 'GA',
        postalCode: '30126',
        country: 'US'
      });

      person.get('addresses').addObject(address);
      this.set('person', person);
    },

    saveRecords() {
			return this.get('person').save();
    }
  }
});
