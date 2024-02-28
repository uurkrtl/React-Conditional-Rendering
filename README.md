## Coding: React-State Coding

Rick&Morty-Gallery

* Step 1: Create a new React project with Vite and TypeScript.
* Step 2: Use the data you can retrieve from this API: https://rickandmortyapi.com/api/character/
    - Save the data in a separate TypeScript file.
       ```
      export const response = ... 
      ```
    - import the data in your component and set the data as initial Value in your useState.
* Step 3: Pass the state to components that will visualize this data.
* Step 4: Create an input field in App.tsx that triggers the search.
  Filter your search so that only the characters you searched for are displayed.