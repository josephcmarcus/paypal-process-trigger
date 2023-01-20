# PayPal Process Trigger

This Azure Function serves as a trigger to send an http request to a specified url endpoint according to a CRON schedule. 

* This function assumes you are triggering another Azure Function and therefore includes a ?code= query param on the axios request
* The CRON schedule is customizable at mv-paypal-process-trigger > function.json
* The url endpoint and code query param are configurable within the .env.placeholder file. After populating your values and before deployment, rename the file from ".env.placeholder" to ".env"

## Key Dependencies

* axios to send API queries: <https://github.com/axios/axios>
* dotenv to load environment variables from a .env file: <https://github.com/motdotla/dotenv>