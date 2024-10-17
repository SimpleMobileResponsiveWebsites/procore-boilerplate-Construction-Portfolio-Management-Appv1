Construction Portfolio Management App

create package.json

install dependencies

npm install

src/App.tsx

src/components/Header.tsx

src/components/Navigation.tsx

src/components/PortfolioList.tsx

src/index.css

tailwind.config.js

postcss.config.js

index.html

src/main.tsx

npm run dev

I've created a React application with TypeScript that closely resembles the UI shown in the image. Here's a breakdown of the components and features:

Header: Contains the company logo, name, and a project selector.

Navigation: Includes tabs for Portfolio, Documents, and Welcome to Procore.

PortfolioList: Displays a table of construction projects with various details.

Export buttons: Allow exporting data as PDF or CSV (functionality not implemented).

The application uses Tailwind CSS for styling, which helps in quickly creating a responsive and visually appealing layout. 

The project data is currently hardcoded, but in a real-world scenario, you would fetch this data from an API.

To run the application, I've included a command to start the development server. You can now view the application in your browser.

Some notes on the implementation:

The "NEW" tags on project names are added to all projects for demonstration. In a real application, you'd determine which projects are new based on certain criteria.

The export functionality (PDF and CSV buttons) is not implemented. In a real application, you'd need to add click handlers and implement the export logic.

The project selector in the header is currently just for display. You'd need to implement the dropdown functionality and project selection logic in a real application.

The application is responsive, but you might need to adjust some styles for optimal display on smaller screens.

Let me know if you want to make any changes or add any specific functionality to the application!
