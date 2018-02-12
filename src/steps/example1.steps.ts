import { CallbackStepDefinition as CB, Given, When, Then } from 'cucumber';

Given(/given 1/, function(callback: CB) {
  callback();
});

When(/when 1/, function(callback: CB) {
  callback();
});

Then(/then 1/, function(callback: CB) {
  callback();
});