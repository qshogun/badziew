# Badziew

Badziew is a simple single-page application built with Vue.js and Vite, designed to showcase products that are considered terrible and useless. The application is developed in Polish and aims to provide a visually appealing interface for users to explore and add products.

## Features

- **Add Products**: Users can add products they find online that look terrible.
- **Product Display**: Each product is displayed with an image, description, and an option to add it to the list.
- **Responsive Design**: The app is designed to be visually appealing and responsive across different devices.

## Project Structure

```
badziew
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── styles
│   │       └── main.css
│   ├── components
│   │   ├── AppHeader.vue
│   │   ├── ProductCard.vue
│   │   └── ProductList.vue
│   ├── types
│   │   └── Product.ts
│   ├── views
│   │   └── HomeView.vue
│   ├── App.vue
│   ├── main.ts
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/badziew.git
   ```

2. Navigate to the project directory:
   ```
   cd badziew
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to see the app in action.

## Usage

- Use the app to browse through a list of terrible products.
- Add new products by providing the necessary details.
- Enjoy the humorous side of useless products!

## Contributing

Contributions are welcome! If you have suggestions for new features or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.