const Controller = require("egg").Controller;
const next = require("next");

class HomeController extends Controller {
  async index() {
    const dev = process.env.NODE_ENV !== "production";
    const nextServer = next({ dev });
    await nextServer.prepare();

    const { ctx } = this;
    
    ctx.body=await nextServer.renderToHTML(ctx.req,ctx.res,'/');
  }
}
module.exports = HomeController;
