export async function fetchCars() {
  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key":
      process.env.NEXT_PUBLIC_RAPID_API_KEY ||
      "d014eebcd9msh9d8d1a7b8a7bb5cp17b677jsn78e719474a7a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}
