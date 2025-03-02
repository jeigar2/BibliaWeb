# modern-gui/modern-gui/README.md

# Modern GUI for Bible API

This project is a modern graphical user interface that connects to the Bible API defined in the `app.py` file. The application allows users to retrieve and display verses and books from the Bible in a user-friendly format.

## Project Structure

```
modern-gui
├── public
│   ├── index.html        # Main HTML document for the application
│   └── styles.css       # Global styles for the application
├── src
│   ├── components
│   │   ├── App.js       # Main App component
│   │   ├── Versiculos.js # Component for displaying verses
│   │   └── Libros.js    # Component for displaying books
│   ├── services
│   │   └── api.js       # API service for making requests
│   ├── App.js           # Entry point for the application
│   ├── index.js         # Main entry point for React
│   └── App.css          # Styles specific to the App component
├── package.json          # npm configuration file
├── .babelrc              # Babel configuration
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd modern-gui
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Access the application:**
   Open your web browser and navigate to `http://localhost:3000`.

## Usage

- Use the **Versiculos** component to input verse references and retrieve specific verses from the Bible.
- Use the **Libros** component to view the complete list of books in the Bible.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.