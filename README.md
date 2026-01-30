# 🧰 Gerador de QR Codes e Senhas Aleatórias (Node.js CLI)

Projeto desenvolvido em **Node.js** que oferece uma ferramenta de **linha de comando (CLI)** para:

- Geração de **QR Codes**
- Geração de **senhas aleatórias e configuráveis**

A aplicação é executada diretamente no **terminal**, sem necessidade de interface gráfica, focando em **simplicidade, automação e eficiência**.

---

## 🚀 Objetivo do Projeto

O objetivo deste projeto é fornecer uma ferramenta prática para:

- Gerar QR Codes a partir de links ou textos
- Criar senhas seguras automaticamente
- Automatizar tarefas comuns via terminal
- Evitar dependência de ferramentas externas ou interfaces gráficas

Inicialmente pensado para **e-commerce**, o projeto foi desenvolvido de forma **genérica**, permitindo uso em diversos outros contextos.

---

## 🌍 Possíveis Aplicações

Embora o projeto seja apresentado com foco em e-commerce, suas funcionalidades podem ser aplicadas em diversos cenários:

### 🛒 E-commerce
- QR Codes para páginas de produtos
- Links de pagamento
- Senhas temporárias para clientes

### 🔐 Segurança e Autenticação
- Geração de senhas temporárias
- Reset de senhas
- Credenciais iniciais de usuários

### 🧪 Desenvolvimento e Testes
- Criação de usuários fictícios
- Simulação de autenticação
- Padronização de credenciais de teste

### 🖥️ Ferramentas CLI
- Utilitário de terminal
- Scripts internos
- Automação de tarefas repetitivas

### 📄 Eventos, Documentos e Educação
- QR Codes para formulários, convites e materiais digitais
- Acessos rápidos a conteúdos e documentos

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **JavaScript (ES Modules)**
- Execução via **CLI (Terminal)**
- Variáveis de ambiente (`.env`)

---

## 📦 Dependências do Projeto

### **chalk** `^5.6.2`
Biblioteca para **estilização de mensagens no terminal**, utilizada para melhorar a experiência do usuário com mensagens coloridas e destacadas.

---

### **prompt** `^1.3.0`
Utilizada para **capturar entradas do usuário via terminal**, permitindo interações simples e intuitivas.

---

### **qrcode-terminal** `^0.12.0`
Biblioteca responsável por **gerar QR Codes diretamente no terminal**, sem necessidade de interface gráfica ou arquivos externos.

---

### 📌 Resumo das Dependências

| Pacote            | Finalidade                                  |
|-------------------|----------------------------------------------|
| chalk             | Estilização de texto no terminal              |
| prompt            | Entrada de dados do usuário via CLI           |
| qrcode-terminal   | Geração de QR Codes no terminal               |

---

