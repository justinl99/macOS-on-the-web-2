import { createAppConfig } from '__/helpers/create-app-config';

export const purusTwitterAppConfig = createAppConfig({
  title: `JustinL's Twitter`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://twitter.com/Anhc02575791', '_blank'),

  dockBreaksBefore: true,
});
