import Ember from 'ember';
import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
	createRecord(store, type, snapshot) {
		let data = {};
		let serializer = store.serializerFor(type.modelName);
		let url = this.buildURL(type.modelName, null, snapshot, 'createRecord');

		data = serializer.serializeIntoArray(data, type, snapshot, { includeId: true });
		return this.ajax(url, "POST", { data: data });
	},

	ajax(url, method, options) {
		let response = {};
		response.people = options.data.map((person) => {
			debugger;
			person.id = Ember.generateGuid(person);
			person.addresses = person.addresses.map((address) => {
				address.id = Ember.generateGuid(address);
				return address;
			});
			return person;
		});
		debugger;
		return Ember.RSVP.resolve(response);
	}
});
