// console.log('check connection');

const { search, filter } = document.forms;
const searchInput = document.querySelector('.search');
const selectFilter = filter.querySelector('.filter');
const cardContainer = document.querySelector('.cardContainer');

search.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = searchInput.value;
  try {
    const response = await fetch(`/cards/title/${title}`);
    if (response.ok) {
      window.location.href = `/cards/title/${title}`;
    }
  } catch (error) {
    console.log(error);
  }
});

filter.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = selectFilter.value;
  try {
    const response = await fetch(`/cards/city/${city}`);
    if (response.ok) {
      window.location.href = `/cards/city/${city}`;
    }
  } catch (error) {
    console.log(error);
  }
});
