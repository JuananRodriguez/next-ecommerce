export interface Query {
  [key: string]: string | number;
}

function serialize(obj: Query) {
  var str = [];
  for (var p in obj) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  }
  return str.join("&");
}

function getAuth64() {
  return Buffer.from(
    `${process.env.WOO_COMMERCE_CLIENT_API_KEY}:${process.env.WOO_COMMERCE_SECRET_API_KEY}`
  ).toString("base64");
}

function fetchFromWoocommerce(url: string, query: Query) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Basic ${getAuth64()}`);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  } as RequestInit;

  return fetch(`${url}?${serialize(query)}`, requestOptions);
}

export { fetchFromWoocommerce };
