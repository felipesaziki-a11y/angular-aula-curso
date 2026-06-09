import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Navbar } from 'C:/Users/61193/Desktop/angular-aula-curso/src/app/navbar/navbar';

@Component({
  selector: 'app-formulario-basico',
  imports: [FormsModule],
  templateUrl: './formulario-basico.html',
  styleUrl: './formulario-basico.scss',
})
export class FormularioBasico {

  nome = signal<string>("");
  sobrenome = signal<string>("")

  numero01 = signal<number | null>(null);
  numero02 = signal<number | null>(null);

  operacao = signal<string>("")

  apresentarNome(): void{
    let nomeCompleto = `${this.nome()} ${this.sobrenome()}`
    alert(`${nomeCompleto}`)
  }
  
  realizarCalculo(): void{
  if (this.operacao() === "somar"){
    const somar: number = this.numero01()! + this.numero02()!;
    alert(`${this.numero01()} + ${this.numero02()} = ${somar}`)
  } else if (this.operacao() === "subtrair"){
    const subtrair: number = this.numero01()! - this.numero02()!;
    alert(`${this.numero01()} - ${this.numero02()} = ${subtrair}`)
  } else if (this.operacao() === "multiplicar"){
    const multiplicar: number = this.numero01()! * this.numero02()!;
    alert(`${this.numero01()} * ${this.numero02()} = ${multiplicar}`)
  } else if (this.operacao() === "dividir"){
    const dividir: number = this.numero01()! / this.numero02()!;
    alert(`${this.numero01()} / ${this.numero02()} = ${dividir}`)
  } else if (this.numero01() === null || this.numero02() === null){
    alert("Erro")
    return
  }
  }
}