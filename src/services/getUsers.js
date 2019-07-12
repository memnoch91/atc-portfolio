export default async function() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
