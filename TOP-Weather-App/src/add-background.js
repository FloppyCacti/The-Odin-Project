const addBackground = async (condition) => {
  const background = document.querySelector("body");
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=qbMF3K0V1W6BFooM3Iyu5JO14AR1FknC&s=${condition}`,
      { mode: "cors" }
    );
    const data = await response.json();
    background.style.backgroundImage = `url(${data.data.images.original.url})`;
    console.log(data.data.images.original.url);
  } catch {
    document.querySelector("body").style.backgroundColor = "white";
  }
};

export { addBackground };
