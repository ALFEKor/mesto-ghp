let profileName = document.querySelector('.profile__title')
let profileJob = document.querySelector('.profile__subtitle')

let nameInput = document.querySelector('.popup__input-title');
let jobInput = document.querySelector('.popup__input-subtitle');
let popupButton = document.querySelector('.popup__button');
let popupContainer = document.querySelector('.popup__container');


const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');

function popupToggle() {
    popup.classList.toggle('popup_opened')

    nameInput.value = profileName.textContent
    jobInput.value = profileJob.textContent
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)


function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    console.log(nameInput)

    popupToggle()
}

popupContainer.addEventListener('submit', formSubmitHandler);
