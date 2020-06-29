# Marvel Wiki

- [Marvel Wiki](#marvel-wiki)
  - [Project Planning](#project-planning)
    - [Description](#description)
    - [Wireframes](#wireframes)
    - [MVP](#mvp)
      - [MVP Goals](#mvp-goals)
      - [MVP API](#mvp-api)
      - [MVP Libraries & Dependencies](#mvp-libraries--dependencies)
      - [MVP Components](#mvp-components)
      - [MVP Breakdown](#mvp-breakdown)
      - [MVP Timeframes](#mvp-timeframes)
    - [Post-MVP](#post-mvp)
  - [Project Delivery](#project-delivery)
    - [Code Showcase](#code-showcase)
    - [Code Issues & Resolutions](#code-issues--resolutions)

## Project Planning

<br>

### Description

**Project Title** Marvel Wiki
<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Details](https://wireframe.cc/qWzzLu)

- Details component

![Results Page](https://wireframe.cc/Npoecq)

- Desktop Body

![Home Page](https://wireframe.cc/J57KDa)

- Home Page



<br>

### MVP

> Marvel Wiki is a web application that will allow users to search through all their favorite heroes and browse though new ones. By entering the name of a heros in the search bar a details page will allow users to view different comic and movies that their hero has appeared in. User may then click on the container of the comic book/movie and get further details. 

_The **Project Title** Marvel Wiki

<br>

#### MVP Goals
- _Form accepting heroes names and saving user term to state._
- _API call to Marvel open data._
- _Details Component_
- _Link between heroes/details pages._
- _etc._

<br>

#### MVP API

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| MarvelAPi |      yes      | _marvel.com_ | _https://gateway.marvel.com:443/v1/public/characters?name=hulk&apikey=7b8c4a6660c0ed6e66f01101cb400d55_ |

Sample Query Results:




<br>

#### MVP Libraries & Dependencies

> Use this section to list the key supporting libraries and their role in the project.

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _Library to build the web app upon._ |
| React Router | _Used to link between components on single page._ |


<br>

#### MVP Components

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ Header.js
      |__ nav.js
      |__ character.js
      |__ comic.js
      |__ movie.js
      |__ search.js
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | _Will make api call._ |
| Navigation    | functional |   n   |   n   |   n   | _Displays nav, links to comic, character,movie._ |
|     Home     | functional |   n   |   n   |   y   | _Displays home page_ |
|    Index     | functional |   n   |   n   |   y   | _Runs App component._ |
|    Detail    | functional |   n   |   n   |   y   | _Displays selected details._ |
|   Gallery    |   class    |   y   |   n   |   y   | _Displays comic/movie/character._ |
|    Footer    | functional |   n   |   n   |   n   | _Links back to APi for credit_ |

<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Fetch APi |   H    |     3 hrs      |     2 hrs     |    3 hrs    |
| build out components     |    H     |     3 hrs      |     1 hrs     |     TBD     |
| create onClick events     |    H     |     3 hrs      |     1 hrs     |     TBD     |
| css styling     |    H     |     3 hrs      |     1 hrs     |     TBD     |
| post MVP     |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL            |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- Connect youtube api to display trailers.

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.