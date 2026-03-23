const retryPromise = async (fn, maxAttempts) => {
  let attempt = 0;

  while (attempt < maxAttempts) {
    try {
      attempt++;
      console.log(`Attempt: ${attempt}`);

      const result = await fn(attempt);
      return result;
    } catch (error) {
      console.log(`Failed attempt ${attempt}:`, error.message);

      if (attempt === maxAttempts) {
        throw new Error(`Failed after ${maxAttempts} attempts`);
      }
    }
  }
};

const fetchWithError = async (attempt) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!res.ok) {
    throw new Error(`HTTP Error ${res.status}`);
  }

  const data = await res.json();
  return `Success on attempt ${attempt}`;
};

retryPromise(fetchWithError, 5)
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message));
