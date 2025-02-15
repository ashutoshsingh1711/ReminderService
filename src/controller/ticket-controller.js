const TicketService = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await TicketService.createNotification(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      err: [],
      message: "Successfully registered an email reminder",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: [],
      err: error,
      message: "Unable to register an email address",
    });
  }
};

module.exports = {
  create,
};
