 

async function sendSMS(phone, message) {
  const apiKey = process.env.SMS_API_KEY; // store in .env
  const url = `https://sms.to/api/v1/send?apiKey=${apiKey}&to=${phone}&message=${encodeURIComponent(message)}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

module.exports = { sendSMS };
