# Meergo Node SDK

The Meergo Node SDK lets you send customer event data from your Node applications to your specified destinations.

## SDK setup requirements

- Set up a Meergo account.
- Set up a Node source in the dashboard.
- Copy the write key and the endpoint.

## Using the SDK

```js
const Analytics = require('analytics-node');

const client = new Analytics('write key', 'endpoint');

client.track({
  event: 'event name',
  userId: 'user id'
});
```

## Sending events

Refer to the Meergo events documentation for more information on the supported event types.

## License

The Meergo Node SDK is released under the [MIT license](License.md).

Copyright &copy; 2024 Open2b

Copyright &copy; 2017 Segment Inc. \<friends@segment.com\>
