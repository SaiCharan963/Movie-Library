    # 🎬 Movie Library – Search & Watchlist App

    A React-based web application that allows users to search movies using the **OMDb API**, view results with pagination, and maintain a personalized **Watchlist** stored in **localStorage**.

    ---

    ## 🚀 Features
    - Search movies by title using the **OMDb API**
    - Paginated results (Next/Previous page navigation)
    - Add movies to a personal Watchlist
    - Remove movies from the Watchlist
    - Persistent storage using **localStorage**
    - Loading spinner while fetching data
    - Error page for invalid routes
    - Modern UI styled with Tailwind CSS

    ---

    ## 🛠️ Tech Stack
    - **Frontend:** React, React Router, Context API, Tailwind CSS
    - **API:** OMDb API
    - **State Management:** React Context API
    - **Icons:** React Icons
    - **Storage:** LocalStorage

    ---

    ## ⚙️ Installation & Setup

    ### Prerequisites  
    To use this project, you need to get an API key from the OMDB API. Follow these steps:

    1. Visit the [OMDb API website](https://www.omdbapi.com/).  
    2. Enter your email address in the sign-up form.  
    3. Check your email for a confirmation message and click **Activate Key**.  
    4. Copy the API key sent to your email.  

    ---

    1. Clone the repo:
    git clone https://github.com/SaiCharan963/world-explorer-we.git
    cd world-explorer-we

    2. Install dependencies:
    npm install

    3. Setup environment variables:
    - Create a .env file in the root directory
    - Add your OMDb API key:
        VITE_OMDB_API_KEY=your_api_key_here

    3. Run the dev server:
    npm run dev

    ---

    ## 📌 Usage


    - Open http://localhost:5173 in your browser.

    - Enter a **movie title** and click **Search**.

    - Browse results with pagination (Next / Prev buttons).

    - Add movies to your **Watchlist**.

    - Navigate to /watchlist to view and manage saved movies.

    ---

    ## Running Test Cases

    **To manually test:**
    - Search for a movie title (e.g., Batman)
    - Check if pagination works properly
    - Add movies to Watchlist
    - Remove movies from Watchlist
    - Refresh browser → Watchlist should persist

    ---

    ## Assumptions & Design Choices

    - **React Context API** is chosen for state management to avoid prop drilling.
    - **Pagination** fetches next/previous 10 results from OMDb API dynamically.
    - Minimalist UI design with **TailwindCSS** for responsiveness.
    - .env file ensures API key security (not hardcoded in the repo).

    ---

    ## 📷 Screenshots
    <img width="1891" height="895" alt="image" src="https://github.com/user-attachments/assets/095160b8-f43a-40ec-86d6-230a3b8370ea" />
    <img width="1897" height="898" alt="image" src="https://github.com/user-attachments/assets/1b603d3c-1a49-4c25-b6dd-a3ad74e46f67" />

