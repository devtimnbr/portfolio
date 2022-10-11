export async function onRequest(context) {
  console.log({ context });
  return "Hello world"
}
