export class SignInForm {
    elements = {
        userNameInput: () => "[formcontrolname=email] input",
        passwordInput: () => "[formcontrolname=password] input",
        signInButton: () => 'form button._x_bg-purple',
    }
}

export default new SignInForm()