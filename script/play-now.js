console.log("I'm here")

const buttonObj = document.getElementById("btn-submit")

console.log(buttonObj)

buttonObj.onclick = function () {
    try {
        //variable to store form input
        var nama = document.form.name.value.trim();
        var email = document.form.email.value.trim();
        var password = document.form.password.value.trim();
        var genderMale = document.form.gender[0];
        var genderFemale = document.form.gender[1];
        var toc = document.form.toc.checked;

        console.log(nama)
        console.log(email)

        //variable to get error span
        const errNamaObj = document.getElementById("error-name")
        const errEmailObj = document.getElementById("error-email")
        const errPasswordObj = document.getElementById("error-password")
        const errGender = document.getElementById("error-gender")
        const errToc = document.getElementById("error-toc")

        var flag = true

        //validation
        //1. NAMA
        if (nama == "" || nama == null){
            errNamaObj.innerText = "Name is required"
            flag = false
        }
        else if (nama.length < 6) {
            errNamaObj.innerText = "Name must be at least 6 characters long"
            flag = false
        }
        else{
            errNamaObj.innerText = ""
        }

        //2.Email
        var atSymbolIdx = email.indexOf("@")
        var parts = email.split("@")
        var domain = parts[1] ?? ""
        var dotIdx = domain.indexOf(".")

        if (email == "" || email == null){
            errEmailObj.innerText = "Email is required"
            flag = false
        }
        // ( Check @ symbol || Check if domain has dot symbol || check if the dot is not at the end)
        else if(atSymbolIdx < 1 || dotIdx < 1 || dotIdx === domain.length - 1){
            errEmailObj.innerText = "Invalid email address"
            flag = false;
        }
        else {
            errEmailObj.innerText = ""
        }
        
        //3. Password
        if (password == ""){
            errPasswordObj.innerText = "Please enter your password"
            flag = false
        }
        else if (password.length < 6) {
            errPasswordObj.innerText = "Password must be at least 6 characters long"
            flag = false
        }
        else {
            errPasswordObj.innerText = ""
        }

        //4. Gender
        if (genderMale.checked || genderFemale.checked)
            errGender.innerText = ""
        else{
            errGender.innerText = "Please select your gender"
            flag = false
        }
            

        //5. TOC
        console.log(toc)
        if (toc == true)
            errToc.innerText = "" 
        else{
            errToc.innerText = "You haven't agreed to the terms & condition"
            flag = false
        }

        if(flag){
            alert("Congratulations! You've sucessfully registered!")
            window.location.replace("../home.html")
        }

    } catch (err) {
        console.log(err)
        return false
    }
    return false
}