import { CallbackStepDefinition as CB, Given, When, Then } from 'cucumber';

Given(/given 2/, function(callback: CB) {
  callback();
});

When(/when 2/, function(callback: CB) {
  callback();
});

Then(/then 2/, function(callback: CB) {
  callback();
});