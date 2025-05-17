# Instalacao-github-copilot-vscode
Projeto do laboratório do curso Instalação do GitHub Copilot com o VS Code da Dio.me (Microsoft Azure Native Cloud) 

O projeto visa mostrar a utilização do Copilot na criação e edição de códigos, nas suas diferentes llms.

Primeiramente, como possuo a versão free, o copilot não me apresentou as últimas versões disponibilizadas das LLMs.

![Image](https://github.com/user-attachments/assets/02a68237-cf8b-46a5-80b9-dba8fa96a031)

Criando uma roleta de jogo com diferentes llms

Jogamos o texto conforme o professor colocou, usamos o Claude 3.5 Sonnet:

"vamos criar um jogo de roleta com a velocidade mantendo a rotação e uma bolinha batendo no meio seguindo as leis da fisica no planeta terra, podemos utilizar html, css, javascript, canva no html para criar as formas e animação."

Logo de cara já percebemos que o código gerado é diferente do professor.

![Image](https://github.com/user-attachments/assets/b517d2a6-678f-495d-82fc-88dd6df50730)

O primeiro resultado da página não apresentou resultado satisfatório, assim como o do professor:

![Image](https://github.com/user-attachments/assets/5aeaa6c1-ca91-40d5-ad90-a73485599fe0)

![Image](https://github.com/user-attachments/assets/2f5e1ba3-7c76-4f04-a5bd-7ac9dd9b8b75)

Verificado os erros no console, copiamos e jogamos no copilot, usando desta vez o o3 para correção dos erros:

![Image](https://github.com/user-attachments/assets/b72a8f9c-bec7-41d0-adf2-5b12439d1a24)

O resultado continua insatisfatório, pegamos novamente o erro para o copilot tentar corrigir.

![Image](https://github.com/user-attachments/assets/97a9530b-48e7-435b-9ec2-0207e439a6e4)

Enfim.. o resultado não chegou perto do resultado do professor, partimos para o proximo..

![Image](https://github.com/user-attachments/assets/379e6494-2d5b-4922-93fc-6600fea7e090)

Seguimos para o teste seguinte de criação de um jogo utilizando o o3-mini:
Texto utilizado na pesquisa: "vamos criar um jogo de roleta com a velocidade mantendo a rotação e uma bolinha batendo no meio seguindo as leis da fisica no planeta terra, podemos utilizar html, css, javascript, canva no html para criar as formas e animação."

O resultado neste caso mesmo não sendo parecido com o do professor, ainda apresentou algo.

![Image](https://github.com/user-attachments/assets/0cb9e325-f38a-4fd7-a6c1-a27f39f57305)
![Image](https://github.com/user-attachments/assets/a16e7c0b-907f-4ced-9156-46673c5864df)

Vemos que o o3 obteve resultado melhor que o Claude 3.5 Sonnet!

Seguindo, vamos testar um novo código utilizando o gemini 2.0 flash
Texto utilizado na pesquisa: "gostaria de criar uma game chamado flapbird usando a imagem do mario bross como personagem no lugar do peixe em html, css, javascript e canvas"

![Image](https://github.com/user-attachments/assets/82654dac-22ea-4284-bf3d-99e59d9822bd)

Neste caso até mostra a criação, mas os arquivos estão vazios. O gemini não funcionou no meu caso.


Testando novamente agora com o o3:
O resultado não foi o esperado assim como o do professor, 
![Image](https://github.com/user-attachments/assets/94bfd650-304b-4979-9cec-fd51d97aebf3)

Após nova correção, inserimos manualmente a imagem do Mário, segue resultado:
![Image](https://github.com/user-attachments/assets/065b1364-88ce-4429-a2df-5cc3ae575815)
https://github.com/user-attachments/assets/ec805ade-1e63-4dc3-b532-b431cc1316f6

A utilização do o3-mini da OpenAi apresentou a melhor perfomance no meu caso.
