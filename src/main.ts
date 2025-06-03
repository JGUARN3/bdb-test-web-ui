import { defineCustomElements } from '@npm-bbta/bbog-dig-dt-webcomponents-lib/loader';
import { defineCustomElements as webComponents } from '@npm-bbta/bbog-dig-dt-webcomponents-lib/loader';
import('./bootstrap').catch((err) => console.error(err));

webComponents(window);
defineCustomElements();