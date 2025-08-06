# leaflet-react-map

Este repositório contém um projeto React em andamento que utiliza a biblioteca Leaflet para exibir mapas interativos. O projeto foi configurado com Vite e TypeScript.

## Funcionalidades

- Exibição de mapas interativos com Leaflet.
- Componentes React para gerenciamento de marcadores e outras interações com o mapa.
- Menu lateral para controle de funcionalidades (zoom, etc.).

## Estrutura do Projeto

O projeto segue a seguinte estrutura de diretórios:

```
.github/
public/
src/
├── assets/
├── components/
│   ├── ContextMenu.tsx
│   ├── CreateDeviceModal.tsx
│   ├── CustomMarker.tsx
│   ├── DevicePopUp.tsx
│   ├── DynamicMap.tsx
│   └── LeftMenu.tsx
├── store/
├── utils/
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
.gitignore
README.md
eslint.config.js
index.html
package-lock.json
package.json
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Instalação e Uso

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/wvll3f/leaflet-react-map.git
   cd leaflet-react-map
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou yarn dev
   ```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta disponível).

## Scripts Disponíveis

No diretório do projeto, você pode rodar:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run lint`: Executa o linter para verificar problemas de código.
- `npm run preview`: Serve a build de produção localmente.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Por favor, abra uma issue ou um pull request.

## Contato

Para dúvidas ou sugestões, entre em contato com o autor do repositório.

Site/Portifolio: https://wallefamorim.netlify.app/
Linkedin: https://www.linkedin.com/in/wallef/
