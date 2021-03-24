import axios from 'axios'

function getRequestParams(name, email, subject, message) {
  const Portal_ID = process.env.hubspotPortalId
  const Form_ID = process.env.hubspotFormId

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${Portal_ID}/${Form_ID}`
  const data = {
    "fields": [
      {
        "name": "email",
        "value": email
      },
      {
        "name": "firstname",
        "value": name
      },
      {
        "name": "subject",
        "value": subject
      },
      {
        "name": "message",
        "value": message
      }
    ],
  }

  const headers = {
    "Content-Type": "application/json"
  }

  return {
    url,
    data,
    headers,
  }
}

export default async (req, res) => {
  const { name, email, subject, message } = req.body

  try {
    const { url, data, headers } = getRequestParams(name, email, subject, message);

    const response = await axios.post(url, data, { headers });

    return res.status(201).json({ error: null });

  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong....`,
    });
  }
};
