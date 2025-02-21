const passwordBox = document.getElementById("password")

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm"
const symbol = "!@#$%^&*(){}_+[]|=-";
const number = '1234567890';
const length = 10;

const allChars = upperCase +lowerCase+number+symbol;

const genPass = () => {

    let password = ''

  password +=  upperCase[Math.floor(Math.random()* upperCase.length)]
  password +=  lowerCase[Math.floor(Math.random()* lowerCase.length)]
  password +=  number[Math.floor(Math.random()* number.length)]
  password +=  symbol[Math.floor(Math.random()* symbol.length)]

    while(length > password.length) {
        password +=  allChars[Math.floor(Math.random()* allChars.length)]

    }

    passwordBox.value = password

}

const copyPass = () => {
    passwordBox.select();
    document.execCommand('copy')
}