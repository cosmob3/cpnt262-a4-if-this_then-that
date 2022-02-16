const form = document.querySelector('form');
// const img = document.querySelector('img')

const submitHandler = (event) => {
  event.preventDefault();

  const favPet = form.favpet.value;


  if (favPet === 'dogs') {
    // img.innerHTML = './assets/images/puppy.jpg';
    form.output.value = "Dog's are the best";


  } else if (favPet === 'cats') {
    // img.innerHTML = './assets/images/kitten.jpg';
    form.output.value = "Having a cat, is more like having a roommate that doesn't pay rent";


  }else if (favPet === 'fish') {
    // img.innerHTML = './assets/images/fish.jpg';
    form.output.value = 'Fish are okay, I guess';


  } else {
    // console.warn('Favourite Animal Not Selected');
    console.warn('Service Level not selected.');

  }
}


form.addEventListener('submit', submitHandler);
