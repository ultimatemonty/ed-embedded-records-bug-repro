import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  person: belongsTo('person'),
  address1: attr('string'),
  address2: attr('string'),
  city: attr('string'),
  state: attr('string'),
  postalCode: attr('string'),
  country: attr('string')
});
