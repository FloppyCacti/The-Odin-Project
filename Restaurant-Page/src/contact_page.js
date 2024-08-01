function contactPage(){
    const container = document.querySelector('#content');

    const address = document.createElement('div');
    address.innerHTML = 'Address: 12000 – 12100 Coors Rd SW, Albuquerque, New Mexico 87045';

    const phoneNumber = document.createElement('div');
    phoneNumber.innerHTML = 'Phone Number: (505) 146-0195';

    container.appendChild(address);
    container.appendChild(phoneNumber);
}

export default contactPage;