export default {
  async fetch(request) {
    if (request.method === 'POST') {
      const response = await fetch('https://autocustomerinfo.pages.dev/autoCustomerInfo.json');
      const data = await response.json();
      
      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        },
      });
    }
    
    return new Response('Method not allowed', { status: 405 });
  }
};