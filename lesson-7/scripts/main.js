//get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the IntersectionalObserver
const ImgOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px 0px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

//first check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, ImgOptions);
  // Loop through each img on check status and load if necessary
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
