export function getImages(inputValue) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
      key: '44652974-093c0b9338f58db6242e87a44',
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
    return fetch(url)
      .then(res => res.json())
      .catch(err => {
        iziToast.error({
          title: 'Error',
          message: `${err}`,
          layout: 2,
          displayMode: 'once',
          backgroundColor: '#ef4040',
          progressBarColor: '#B51B1B',
          position: 'topRight',
        });
      });
  }
  
