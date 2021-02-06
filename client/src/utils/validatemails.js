const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default (recipients) => {
  if (!recipients) return;
  const invalidMailArr = recipients
    .split(",")
    .map((recipient) => recipient.trim())
    .filter((recipient) => !re.test(recipient));

  if (invalidMailArr.length > 0) {
    return `These emails are invalid: ${invalidMailArr}`;
  }
  return;
};
