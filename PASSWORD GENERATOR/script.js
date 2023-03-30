class PasswordGenerator{
    constructor()
    {
        console.log("Welcome to Password Generator")
    }
    GeneratePassword(length)
    {
        let SmallChar='abcdefghijklmnopqrstuvwxyz';
        let BigChar  ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let symbols  ='!@#$%^&*()_=+/';
        let password="";
        for(let i=0;i<length;i++)
        {
            let a=Math.floor(Math.random()*25);
            let b=Math.floor(Math.random()*12);
            if(i==0)
            {
                password+=BigChar[a];
            }
            else if(i==length-1)
            {
                password+=symbols[b];
            }
            else
            {
                password+=SmallChar[a];
            }
        }
        document.getElementById('message').innerHTML=`Password Generated <br>`;
        document.getElementById('passwords').innerHTML=`${password}`;
    }
}
function passgen()
{
    document.getElementById('message').innerHTML="";
    let a=parseInt(document.getElementById('enter').value);
    let pass=new PasswordGenerator();
    pass.GeneratePassword(a);

}