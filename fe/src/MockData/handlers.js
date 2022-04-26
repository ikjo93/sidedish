import { rest } from "msw";
import { event, categoryMenus, menuData } from "MockData/MockData";

const handlers = [
  rest.get(`/api/event-categories/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(event));
  }),
  rest.get(`/api/event-categories/0/sidedishes`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(categoryMenus));
  }),
  rest.get(`/api/event-categories/1/sidedishes`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(categoryMenus));
  }),
  rest.get(`/api/menu-categories/first/sidedishes`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(menuData));
  }),
  rest.get(`/api/menu-categories/rest/sidedishes`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(100), ctx.json(menuData));
  }),
];
export default handlers;
