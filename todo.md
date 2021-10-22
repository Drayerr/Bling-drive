# Links úteis:
https://github.com/pipedrive/client-nodejs
https://github.com/pipedrive/client-nodejs/blob/master/docs/DealsApi.md
https://developers.pipedrive.com/docs/api/v1/Deals#getDeals

# Rotas
* Criar rota para buscar dados consolidados direto do MongoDB
* Criar rota para inserir dados do pipedrive no Bling

# Controllers
* dealController. Trazer informações de transações dadas como "ganhas" do pipedrive
  
# BD
* Consultar todos as transações ganhas que tem o campo "Sincronizado" diferente de "1".
* Subir elas no bling e após isso alterar o campo "Sincronizado" para "1"
* Acho q a ideia de alterar o campo "Sincronizado" não vai rolar, pq aparentemente não tem como alterar um campo customizado
pela API do pipedrive (sadface). Então vou ver se da pra fazer isso alterando o "title"

# Paginação