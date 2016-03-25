import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

let inflector = new Ember.Inflector(Ember.Inflector.defaultRules);
inflector.irregular('person', 'people');

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  addresses: hasMany('address')
});
