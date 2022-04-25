import { rest } from "msw";
import { event, categoryMenus } from "./MockData";

const handlers = [
  rest.get("/api/event-categories", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(event));
  }),
  rest.get(/[0-9]$/, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(categoryMenus));
  }),
  rest.get(/(img)*/, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(categoryMenus));
  }),
];

export default handlers;
