// calcularea mediei aritmetice a doua sau mai multe numere naturale
//  - medie aritmetica = suma a n numere impartit la n (a1+a2+a3+...+an)/n

// ----------
// numar_de_valori = n // asignare
// suma = a1 + a2 + a3 + ... + an // asignare
// media_aritmetica = suma / numar_de_valori 
// ----------
// functie // este o grupare de comenzi care se pot actiona la un moment dat
// lista // o insiruire de elemente 
// lista_de_numere[2] -> valoare



// functie medie(lista_de_numere, n) // poate avea mai multe inputuri dar poate da doar un output
//   suma = 0
//   pentru (i = 0; i < n; i = i + 1)
//     suma = suma + lista_de_numere[i]
  
//   medie_numere = suma / n
//   returneaza medie_numere

// medie_aritmetica = medie([2, 3, 6, 8, 22, 54, 89], 7)

// functie medie_while(lista_de_numere, n)
//   suma = 0
//   i = 0

//   cat timp (i < n)
//     suma = suma + lista_de_numere[i]
//     i = i + 1

//   medie_numere = suma / n
//   returneaza medie_numere

// ----------

// Operatori matematici
// - -> scadere
// + -> adunare
// / -> impartire
// * -> inmultire

// Operatori conditionali
// == -> egaliate //         a == b (True / False)
// != -> diferit //          a != b
// < -> mai mic //           a < b
// > -> mai mare //          a > b
// <= -> mai mic sau egal    a <= b // a = 5 | b = 5 -> TRUE ------- a = 5 | b = 6 -> TRUE ------- a = 7 | b = 6 -> FALSE
// >= -> mai mare sau egal   a >= b // a = 5 | b = 5 -> TRUE ------- a = 5 | b = 6 -> FALSE ------- a = 7 | b = 6 -> TRUE

// = -> operator de atribuire / asignare

// 2, 3, 6, 8, 22, 54, 89
// numar_de_valori -> 7
// suma -> 2 + 3 + 6 + 8 + 22 + 54 + 89 -> 184
// media_aritmetica -> 184 / 7 -> 26.2857....

// -------------------------------------------------------------------------------------------------------------------------
// gasirea numarului lui Costel Popescu in cartea de telefoane

// // [
// //   {
// //     nume: "Costel Popescu",
// //     telefon: "0768959655"
// //   },
// //   {
// //     nume: "X C",
// //     telefon: "ba"
// //   }
// // ]

// functie cauta(cartea, nume)
//   pentru (i = 0; i < cartea.length; i = i + 1)
//     persoana = cartea[i]
//     daca (persoana.nume == nume) atunci
//       returneaza persoana.telefon
  
//   returneaza "nu s-a gasit persoana"

// daca (expresie) atunci
//   operatie 1
// altfel
//   operatie 2

// gasirea celui mai mic numar dintr-o lista de numere

// [1, 2, -1, 5, -25, 40, 3]

// functie find_min(lista)
//   min = lista[0]
//   pentru (i = 1; i < lista.length; i++)
//     daca (lista[i] < min)
//       min = lista[i]
  
//   returneaza min

// vanzarea de bilete de cinema cu reducere celor sub 15 ani