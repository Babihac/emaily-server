const keys = require("../../config/keys");
module.exports = (survey) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div style= "text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Plese answer the following question</p>
          <p style="font-size:15px">${survey.body}</p>
          <div><a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a></div>
          <div><a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a></div>
      </div>
  </body>
  </html>
  `;
};
