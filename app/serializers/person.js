import RESTSerializer from 'ember-data/serializers/rest';
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default RESTSerializer.extend(EmbeddedRecordsMixin, {
	attrs: {
		addresses: { embedded: 'always' }
	},

	serializeIntoArray(data, type, snapshot, options) {
		let serializedRecord = this.serialize(snapshot, options);
		data = [ serializedRecord ];
		return data;
	}
});
