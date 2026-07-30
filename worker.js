import { Resend } from "resend";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle contact form
    if (url.pathname === "/contact" && request.method === "POST") {
      try {
        const form = await request.formData();

        const name = form.get("name");
        const email = form.get("email");
        const business = form.get("business");
        const message = form.get("message");

        const resend = new Resend(env.resend_api_key);

        await resend.emails.send({
          from: "Website <noreply@alexlundstrom.fi>",
          to: "alex@alexlundstrom.fi",
          subject: "New website contact form",
          html: `
            <h2>New contact form submission</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Business:</strong> ${business}</p>

            <hr>

            <p>${message}</p>
          `
        });

        return new Response(
          JSON.stringify({ success: true }),
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      } catch (err) {
        return new Response(
          JSON.stringify({
            success: false,
            error: err.message
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      }
    }

    // Let Cloudflare serve all static files
    return env.ASSETS.fetch(request);
  }
};