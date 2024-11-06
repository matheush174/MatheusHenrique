SWAPI Test Project
Este projeto é dedicado a realizar testes automatizados nos endpoints da API pública Star Wars (SWAPI). Usando ferramentas como Jest e Supertest, o projeto faz requisições a diferentes endpoints da API e verifica se as respostas recebidas estão de acordo com o esperado. Além disso, os testes estão organizados para serem executados de forma independente no GitHub Actions, garantindo a integração contínua e a confiabilidade dos resultados em cada mudança feita no repositório.

Objetivo
O objetivo deste projeto é validar a consistência e a precisão das informações fornecidas pela SWAPI em diferentes endpoints, como planetas, naves, filmes, espécies e veículos, além de testar rotas inexistentes para garantir o tratamento adequado de erros. Essa verificação automatizada permite monitorar o funcionamento da API, aumentando a confiabilidade dos dados e a estabilidade dos serviços que dependem desses dados.

Organização e Estrutura do Projeto
A estrutura do projeto está organizada em uma pasta chamada tests, onde cada arquivo representa um teste de um endpoint específico da SWAPI. Cada teste tem um arquivo individual e verifica as respostas da API de maneira isolada. Essa organização permite identificar com precisão qualquer problema em endpoints específicos e facilita a manutenção e a expansão dos testes conforme novas funcionalidades ou rotas sejam incorporadas à API.

Cada arquivo de teste é responsável por fazer a requisição a um endpoint específico e verificar se a resposta obtida contém os dados esperados, como status correto e presença de propriedades essenciais no corpo da resposta. Testes adicionais também estão implementados para validar rotas inexistentes e o tratamento adequado de erros.

Integração Contínua com GitHub Actions
Para automatizar a execução dos testes a cada mudança no repositório, o projeto utiliza GitHub Actions. Cada teste possui seu próprio arquivo de workflow, o que permite uma execução separada e organizada no pipeline. Isso garante que qualquer alteração no código seja verificada automaticamente, identificando rapidamente possíveis falhas nos endpoints ou no comportamento da API.

