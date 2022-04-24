import { rest } from "msw";
import { event } from "./MockData";

const handlers = [
  rest.get("/api/event-categories", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(event));
  }),
];

export default handlers;
