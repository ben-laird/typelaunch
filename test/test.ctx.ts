import { createLogger, transports, format } from "winston";

const { cli } = format;

export const log = createLogger({
  level: "debug",
  format: cli({ all: true }),
  transports: new transports.Console(),
});
