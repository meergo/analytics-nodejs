# Krenalis Node.js SDK

The Krenalis Node.js SDK lets you send customer event data from your Node applications to your specified destinations.

## SDK setup requirements

- Set up a Krenalis account.
- Set up a Node source in the dashboard.
- Copy the event write key and the endpoint.

## Using the SDK

```js
import Analytics from '@krenalis/nodejs-sdk';

const client = new Analytics('<event write key>', '<endpoint>');

client.track({
    event: 'Workout Completed',
    userId: "user-123",
    properties: {
        workout_type: 'Cardio',
        duration_minutes: 45,
        calories_burned: 380,
        device: 'Smartwatch'
    }
});
```

## Sending events

Refer to the Krenalis events documentation for more information on the supported event types.

## License

The Krenalis Node.js SDK is released under the [MIT license](License.md).

Copyright &copy; 2026 Open2b

Copyright &copy; 2017 Segment Inc. \<friends@segment.com\>
