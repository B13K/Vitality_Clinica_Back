const { Router } = require("express");
const {
  ticketMedicalHandler,
  confirmTicketHandler,
  allTicketHandler,
  ticketIdHandler,
  deleteTicketHandler,
  destroyTicketHandler,
  destroyAllTicketHandler,
  allTicketByDateHandler,
} = require("../handlers/ticketMedicalHandlers/ticketMedicalHandlers.js");
const {
  validatorCreateTicketMedical,
} = require("../middlewares/validators.js");

// *Acá definimos las rutas de turnos médicos:
const ticketMedicalRouter = Router();

ticketMedicalRouter.get("/", allTicketHandler);

ticketMedicalRouter.get("/ticketsByDate", allTicketByDateHandler);

ticketMedicalRouter.get("/:id", ticketIdHandler);

ticketMedicalRouter.post(
  "/createTicketMedical",
  validatorCreateTicketMedical,
  ticketMedicalHandler
);

ticketMedicalRouter.put("/confirmTicket", confirmTicketHandler);

ticketMedicalRouter.delete("/destroyTicket", destroyTicketHandler);

ticketMedicalRouter.delete("/destroyAllTicket", destroyAllTicketHandler);

ticketMedicalRouter.delete("/:id/delete", deleteTicketHandler);

module.exports = ticketMedicalRouter;
