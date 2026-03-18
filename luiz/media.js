let nota1 = Number(prompt("Informe a primeiro nota"))
let nota2 = Number(prompt("Informe a segunda nota"))
let media = (nota1 + nota2)/2
if(media>=6){
    alert("Aprovado")
}else if((media<6)&&(media>=5)){
    alert("Recuperação")
}else{
    alert("Reprovado")
}