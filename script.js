function toggleMode (){
    const html = document.documentElement
    html.classList.toggle("light")

   /* if (html.classList.contains('light'))
    html.classList.remove('light')

    else{
        html.classList.add('light')
    } */

    //pegar tag img
    const img = document.querySelector("#profile img")
   
    if (html.classList.contains("light")){

        img.setAttribute("src" , "./assets/perfil-light.png")
    }else{
        img.setAttribute("src", "./assets/perfil.png")
    }
 
}   