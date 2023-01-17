const dotenv = require('dotenv').config();
const axios = require('axios');

module.exports = async function (context, myTimer) {
  try {
    let date = new Date();

    const response = await axios({
      method: 'post',
      url: `${process.env.PAYPAL_PROCESS_SERVICE_URL}?code=${process.env.AUTH_CODE}`,
      headers: {
        Accept: '*/*',
      },
    });
    context.log(`Trigger succeeded at ${date}`)
  } catch (err) {
    context.log(`Trigger failed at ${date}: ${err}`)
  }
};
