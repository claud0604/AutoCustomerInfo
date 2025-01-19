export default {
  async fetch(request) {
    if (request.method === 'POST' || request.method === 'GET') {
      try {
        const response = await fetch('https://e4ddcdff.autocustomerinfo.pages.dev/autoCustomerInfo.json');
        const data = await response.json();
        
        // 카카오 챗봇 응답 형식으로 변환
        const kakaoResponse = {
          "version": "2.0",
          "template": data.template
        };

        return new Response(JSON.stringify(kakaoResponse), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          },
        });
      } catch (error) {
        return new Response(JSON.stringify({
          "version": "2.0",
          "template": {
            "outputs": [{
              "simpleText": {
                "text": "오류가 발생했습니다."
              }
            }]
          }
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    }
    
    return new Response('Method not allowed', { status: 405 });
  }
};
