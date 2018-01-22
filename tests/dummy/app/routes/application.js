import Route from '@ember/routing/route';
import { inject as injectService } from '@ember/service';

export default Route.extend({
  intl: injectService(),
  beforeModel() {
    this.get('intl').setLocale('en-us');
  }
});
