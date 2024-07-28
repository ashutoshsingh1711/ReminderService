const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const ticketRepository = new TicketRepository();

const fetchPendingEmails = async () => {
  try {
    const response = await ticketRepository.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const response = await ticketRepository.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    const response = await ticketRepository.update(ticketId, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  fetchPendingEmails,
  createNotification,
  updateTicket,
};
