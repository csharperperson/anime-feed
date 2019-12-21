/* eslint-disable no-unused-vars */
const request = require("request-promise");
const Mailchimp = require("mailchimp-api-v3");

const mailchimp = new Mailchimp("api-key");

exports.MailingList = class MailingList {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    return [];
  }

  async get(id, params) {
    return {
      id,
      text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    mailchimp
      .post("/lists/listid/members", data)
      .then(function(results) {
        res.send(results);
      })
      .catch(function(err) {
        res.send(err);
      });
  }

  async update(id, data, params) {
    return data;
  }


  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }
};
