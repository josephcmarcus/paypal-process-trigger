# PayPal Process Trigger

This Azure Durable Function serves as a trigger to send an http request to a specified endpoint according to a CRON schedule.

* The CRON schedule is customizable at mv-paypal-process-trigger > function.json
* The endpoint is configurable at mv-paypal-process-trigger > index.js

## Key Dependencies

* axios to send API queries: <https://github.com/axios/axios>
* dotenv to load environment variables from a .env file: <https://github.com/motdotla/dotenv>
