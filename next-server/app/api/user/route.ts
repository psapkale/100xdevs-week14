export async function GET() {
   const responseBody = { name: 'harkirat', email: 'harkirat@gmail.com' };
   const responseInit = {
      headers: {
         'Content-Type': 'application/json',
      },
   };

   return new Response(JSON.stringify(responseBody), responseInit);
}
