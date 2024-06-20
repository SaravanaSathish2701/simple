function createTable() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const mobileNo = document.getElementById('mobileNo').value;

    const error1 = document.getElementById('error1');
    const error2 = document.getElementById('error2');
    const error3 = document.getElementById('error3');
    const error4 = document.getElementById('error4');

    error1.innerHTML = (!firstName)? 'First Name is required.' : '';
    error2.innerHTML = (!lastName)? 'Last Name is required.' : '';
    error3.innerHTML = (!email)? 'Email is required.' : '';
    error4.innerHTML = (!mobileNo)? 'Mobile Number is required.' : '';

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

        document.getElementById('submit-btn').addEventListener('click', (e) => {
            e.preventDefault();
        })
    }
}