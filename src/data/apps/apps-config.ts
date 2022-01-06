import { finderAppConfig } from './finder.app-config';
import { calculatorAppConfig } from './calculator.app-config';
import { weatherAppConfig } from './weather.app-config.ts';
import { calendarAppConfig } from './calendar.app-config';
import { facetimeAppConfig } from './facetime.app-config';
import { launchpadAppConfig } from './launchpad.app-config';
import { mailAppConfig } from './mail.app-config';
import { messagesAppConfig } from './messages.app-config';
import { photosAppConfig } from './photos.app-config';
import { safariAppConfig } from './safari.app-config';
import { systemPreferencesAppConfig } from './system-preferences.app-config';
import { viewSourceAppConfig } from './view-source.app-config';

export const appsConfig = {
  finder: finderAppConfig,
  calculator: calculatorAppConfig,
  weather: weatherAppConfig,
  calendar: calendarAppConfig,
  safari: safariAppConfig,
  messages: messagesAppConfig,
  mail: mailAppConfig,
  photos: photosAppConfig,
  facetime: facetimeAppConfig,
  'system-preferences': systemPreferencesAppConfig,
  'view-source': viewSourceAppConfig,
};
