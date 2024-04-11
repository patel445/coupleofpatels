export async function onRequestPost(context) {
    try {
        let input = await context.request.formData();
    
        // Convert FormData to JSON
        // NOTE: Allows multiple values per key
        let output = {};
        for (let [key, value] of input) {
          let tmp = output[key];
          if (tmp === undefined) {
            output[key] = value;
          } else {
            output[key] = [].concat(tmp, value);
          }
        }
    
        let pretty = JSON.stringify(output, null, 2);
        return new Response(pretty, {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      } catch (err) {
        return new Response('Error parsing JSON content', { status: 400 });
      }
  }
  
  async function handleRequest({ request }) {
    const ip = request.headers.get("CF-Connecting-IP");
  
    const formData = await request.formData();
    const firstname = formData.get("first-name");
    const lastname = formData.get("last-name");
    const email = formData.get("email");
    const message = formData.get("message");
    const token = formData.get("cf-turnstile-response");
  
    const tokenValidated = await validateToken(ip, token);
  
    if (!tokenValidated) {
      return new Response("Token validation failed", { status: 403 });
    }
  
    await forwardMessage(firstname,lastname, email, message);
  
    return new Response("OK", { status: 200 });
  }
  
  async function validateToken(ip, token) {
    const TURNSTILE_SECRET_KEY = "1x0000000000000000000000000000000AA";
  
    const formData = new FormData();
    formData.append("secret", TURNSTILE_SECRET_KEY);
    formData.append("response", token);
    formData.append("remoteip", ip);
  
    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  
    const result = await fetch(url, {
      body: formData,
      method: "POST",
    });
  
    const outcome = await result.json();
  
    return outcome.success;
  }
  
  async function forwardMessage(firstname, lastname, email, message) {
    
  }