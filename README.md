Create a simple movie application in React. The application should consist of 3 pages with layout.

Movie search

Page should contain search input field with search button on the top of the page.
When user submits the search, all search results should be displayed under the search input field. Please consider paging or endless scrolling of search results.After rediect to another page and go back, the last searching and results should be still visible with the last visible tabel page or scroll position. (Hint: use state management)

API example, search for “Batman”:

http://omdbapi.com/?apikey=[YOUR-API-KEY]&s=Batman

Movie detail

Page should contain all information for selected movie (title, year, genre, poster, etc.) Next to the title should be “star” icon. When User clicks on the icon, movie will be added to favourites.

API example, search for concrete movie details:

http://omdbapi.com/?apikey=[YOUR-API-KEY]&i=tt0372784

My favorite movies

Page should contain list of favourite movies. User should be able to navigate to movie detail and remove movie from favourites.

Requirements

Use OMDb API to fetch all necessary data - no backend required

Use up to date features of Ecmascript 6 or Typescript

Pick one open-source component library such as Material UI, Ant Design, etc.

Use react-router for page navigation

Use README.md to describe project and it’s scripts.

Use any state/data management (redux, mobx, jotai, context api, etc.)

Properly handle side effects and async calls (redux-saga, thunk, react-query, etc.)

Persist user`s favourite movies on client side

Nice to have

Use Styled components, Emotion or CSS Modules with SASS for styling.

Tests for your code (100% codecoverage is not required)

Deploy your solution and share the link

BONUS: After all, if coding is still fun :) you can show what you know and try to split application to 3 standalone chunks (Search, Detail, Favorites). Each chunk will fetch on demand when is needed and just once. (Hint: google „code splitting“ :) )

How to submit

Upload your completed project to your Github/Bitbucket/Gitlab, and then paste a link to the repository below in the form along with any comments you have about your solution.

Recommendation

We know that this application is not the rocket science and some technical requirements can be overkill in real use cases similar to this. But we would like to know what is your skill with technologies usually used in real enterprice projects.

Notice that it is not all about React, there are more things what you can show to us. For example, consistency, error handling, design (look & feel), folders and files structure, HTML valid code, etc.
# movieshomework