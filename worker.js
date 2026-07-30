//import { Resend } from "resend";

export default {
  async fetch(request, env) {
    return new Response(JSON.stringify({
      hasKey: !!env.resend_api_key
    }), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};