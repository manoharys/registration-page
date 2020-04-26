
// 1) Personal details: First name: Should be only alphabets with min 4 and max 10 characters. Email-id: Should be a valid email id with @ symbol. Gender: Male, Female or other- Only 1 should be selected. Age: Should only be numbers between 20-23. DOB: Should match with age field value. Phone: Should be exactly 10 digits.

// 2) Upload section: Resume upload option.

// 3) Marks section: 12th marks: Should have only 2 digits & must be a number.

// 4) Specialization: Dropdown should have all engineering specialization options like (CSE, IT, ECE, EEE, CIVIL, MECHANICAL)

// 5) Password Section: Create two fields: Password (characters should be hidden, should be greater than 7 characters, at least;one number and special character should be included) and Confirm password (should match with the password field value).

// Optional: If password condition is satisfied, Strong password message should be displayed.

// 6) Technical skills section:

// C, PYTHON, JAVA, HTML, JAVASCRIPT ;(the checkbox should be developed to select more than one option).

// 7) Submit and reset button.

// On successful registration the student should get alert message – “Successfully registered” and the Registration page should be directed to your college website in a different window tab.

// Note: If any field remains empty or condition is not specified for any field, respective error message or alert box should be displayed.

const btn = document.querySelector('#button');
const name = document.getElementById('firstName');
const ph = document.getElementById('phoneNo');
const marks = document.getElementById('marks');

btn.addEventListener('click',validate);

function validate(e){
    e.preventDefault();
    let x = name.value;  
    if(x.isNaN){
        alert("Should be only alphabets with min 4 and max 10 characters");
        return false; 
    }
    if (x.length<4 || x.length>10 ) {
        alert("Should be only alphabets with min 4 and max 10 characters");
        return false;
      }
    let phone = ph.value;
    if(!phone.isNaN){
       if(phone.length>10 ){
           alert("invalid phone number");
           return false;
       }
    }

    let mark = marks.value;
    if(mark.length>3){
        alert("invalid marks");
        return false;
        
    }
    
}
