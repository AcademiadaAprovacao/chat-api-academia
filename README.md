
# Proxy Seguro para Chat da Academia da Aprovação

Este projeto é um servidor intermediário para proteger a chave da OpenAI.

## Endpoint
Após o deploy no Vercel, use o endpoint:
https://SEU_PROJETO.vercel.app/api/chat

## Variáveis de ambiente
No painel da Vercel, adicione:
- OPENAI_API_KEY=sk-... (sua chave secreta)

## Requisição esperada
```json
{
  "message": "Qual sua dúvida de Matemática?"
}
```
