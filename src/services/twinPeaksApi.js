export const fetchApi = async () => {
  const res = await fetch('https://damp-cove-34137.herokuapp.com/api/quotes/');
  const json = await res.json();

  return json.quoteText;
};
