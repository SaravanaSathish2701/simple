function createTable() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const error = document.getElementById('error');
    error.innerHTML = (!firstName ||!lastName ||!email ||!mobileNo)? 'All fields are required.' : '';

    if(firstName && lastName && email && mobileNo) {
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const firstNameEle = document.createElement('td');
        const lastNameEle = document.createElement('td');
        const emailEle = document.createElement('td');
        const mobileNoEle = document.createElement('td');
        firstNameEle.innerHTML = firstName;
        lastNameEle.innerHTML = lastName;
        emailEle.innerHTML = email;
        mobileNoEle.innerHTML = mobileNo;
        trElement.appendChild(firstNameEle);
        trElement.appendChild(lastNameEle);
        trElement.appendChild(emailEle);
        trElement.appendChild(mobileNoEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }
}