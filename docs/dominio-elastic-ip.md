# Configurar domínio com Elastic IP na AWS

## 1. Criar e associar Elastic IP

1. **EC2 → Elastic IPs → Allocate Elastic IP address**
2. Selecione o IP alocado → **Actions → Associate Elastic IP address**
3. Selecione a instância (`website_server`) → **Associate**

> O Elastic IP é fixo e não muda ao parar/iniciar a instância. É gratuito enquanto estiver associado a uma instância em execução.

## 2. Atualizar secret no GitHub Actions

**Settings → Secrets and variables → Actions → `IP_PUBLIC`** → edite com o novo Elastic IP.

## 3. Configurar DNS no registro.br

Acesse o painel do domínio em [registro.br](https://registro.br) e adicione os registros:

| Tipo | Nome | Valor            | TTL  |
|------|------|------------------|------|
| A    | @    | `<elastic-ip>`   | 3600 |
| A    | www  | `<elastic-ip>`   | 3600 |

> `@` representa o domínio raiz (ex: `fabiovigedev.com.br`).

## 4. Verificar propagação DNS

```bash
nslookup fabiovigedev.com.br
dig fabiovigedev.com.br
```

A propagação pode levar até 24h, geralmente ocorre em minutos.

## Referência deste projeto

- Elastic IP: `18.218.206.208`
- Domínio: `fabiovigedev.com.br`
- Instância: `website_server` (t3.micro · us-east-2)
- Secret GitHub: `IP_PUBLIC`
