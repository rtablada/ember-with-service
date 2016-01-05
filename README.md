# Ember-with-service

[![npm version](https://badge.fury.io/js/ember-with-service.svg)](http://badge.fury.io/js/ember-with-service)
[![Ember Observer Score](http://emberobserver.com/badges/ember-with-service.svg)](http://emberobserver.com/addons/ember-with-service)
This README outlines the details of collaborating on this Ember addon.

## Installation

* `ember install ember-with-service`

## Use

Let's say we wanted to inject the `session` service into our template:

```hbs
<nav>
  {{#with-service 'session' as |session|}}
    <ul>
      {{#if session.isAuthenticated}}
        <li>{{#link-to 'logout'}}Logout{{/link-to}}</li>
      {{/if}}
    </ul>
  {{/with-service}}
</nav>
```
