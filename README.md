# Travelogue Full Stack Application

  - [Overview](#Overview)
    - [Permissions](#Permissions)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP Libraries](#MVP-Libraries)
    - [MVP Client (Front End)](#MVP-Client-Front-End)
      - [Wireframes](#Wireframes)
      - [Component Hierarchy](#Component-Hierarchy)
      - [Component Breakdown](#Component-Breakdown)
    - [MVP Server (Back End)](#MVP-Server-Back-End)
      - [ERD Model](#ERD-Model)
  - [Post-MVP](#Post-MVP)
  - [Project Change Log](#Project-Change-Log)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_**Travelogue** is the web app you need to keep track of where you’ve been to help others get where they’re going. Ever been asked for recommendations for a place you’ve traveled to and come up at a loss for the specifics of that trip three years ago? Travelogue gives you an easy way to log the details of your adventures at home and abroad so that you can easily reminisce and help your friends plan their next journeys._

### Permissions

Digital assets will be sourced from [Pixabay](https://pixabay.com/) and cited where necessary. I might also include some of my own travel photos, stay tuned.
<br>

## MVP

_The **Travelogue** MVP will display places associated with  user entries have marked as public (not private) for anyone to browse through without signing in. Upon user account creation and log in, users will be redirected to a screen that shows only their own entries with image thumbnail, title, city and country. When an entry is selected, the user will be able to view all details, edit it and delete it. From the nav bar, users can also choose to add a new entry._

### MVP Goals
- User authentication - sign up and log in
- RESTful JSON API with endpoints for full CRUD controller actions built with Rails
- Full CRUD user view for viewing, creating, editing and deleting places
- Filter list views based on country or category
- User ability to upload a photo directly to the app

### MVP Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end Javascript Framework for UI_ |
|   React Router   | _Create routes for UI navigation_ |
|      Axios       | _Fetch data from our back-end API & any 3rd-party APIs_ |
| React Calendar   | _Library for including a date picker in form_ |
|   Font Awesome   | _Library for icons to include in nav bar_ |
|     Postgres     | _RMDB system to manage our database actions_ |
|  Ruby on Rails   | _Back-end framework for creating our models and controllers_ |
|  Active Record   | _Object-relational mapping tool for building back-end functionality_ |
|  Faker   | _Seed data generating library for populating model data for testing_ |
|  Bcrypt   | _Password hashing tool for enabling user authentication_ |
|  JWT   | _Token creation tool for enabling user authorization_ |
|  CORS   | _Middleware that provides support for CORS_ |
|  [Countries](https://github.com/hexorx/countries)   | _Library providing country data from ISO 3166_ |

<br>

### MVP Client (Front End)

#### Wireframes

- Desktop Public Landing Page (Index)

![Wireframe - Homepage](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_650/v1583436568/Project%204%20-%20Travelogue/wireframe-01-desktop-homepage_f7khd5.png)

- Desktop Public Landing Page with Form Overlay (User Sign Up / Sign In)

![Wireframe - User Form Overlay](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_650/v1583436568/Project%204%20-%20Travelogue/wireframe-02-desktop-userform-overlay_aurx6d.png)

- Desktop User Landing Page (Index based on Auth)

![Wireframe - User Places](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_650/v1583436568/Project%204%20-%20Travelogue/wireframe-03-desktop-userplaces_ngsksk.png)

- Desktop Entry Details Page (Show)

![Wireframe - User Entry Details](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_650/v1583436568/Project%204%20-%20Travelogue/wireframe-04-desktop-userplacedetails_qencml.png)

- Desktop Create Travel Entry Form (Create)

![Wireframe - Create Entry Form](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_650/v1583436568/Project%204%20-%20Travelogue/wireframe-05-desktop-usercreateentry_zh6u1z.png)

- Desktop Edit Travel Entry Form (Update)

![Dummy Link](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_650/v1583436568/Project%204%20-%20Travelogue/wireframe-06-desktop-usereditentry_nb97un.png)

- Mobile Views

![Mobile Wireframes](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_654/v1583436569/Project%204%20-%20Travelogue/wireframes-mobile-versions_bjefkc.png)

#### Component Hierarchy

![Component Hierarchy](https://res.cloudinary.com/db0kbxvhr/image/upload/v1583436582/Project%204%20-%20Travelogue/component-hierarchy-v2_edcvve.png)

#### Component Breakdown


|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
| App    |   N   | _App will set the routes._               |
| Layout    |   N   | _Layout will render Header, Footer and props.children._               |
| Header    |   N   | _The Header will render the logo and Navigation._               |
| Navigation |   N   | _The Navigation will provide Links to main pages._       |
| PublicEntryList  |   Y   | _The PublicEntryList will render an index of recent EntryCards via Index route for entries, filtered by public only._      |
| EntryCard |   N   | _The EntryCard will render the entry info via props for both public and user views._                 |
| PublicEntryDetails |   Y   | _The PublicEntryDetails component will render public entry info via Show route for entries._                 |
| UserModal |   Y   | _The UserModal will define methods and state to passed down to the UserForm ._                 |
| UserForm |   N   | _The UserForm will capture account details to authenticate users._                 |
| UserEntryList    |   Y   | _The UserEntryList will render an index of EntryCards via Index route for user entries._  |
| UserEntryDetails |   Y   | _The UserEntryDetails component will render user entry details info via Show route for user entries and buttons for edit and delete._                 |
| EntryEdit |   Y   | _This component will render the EntryForm component to capture user input for Editing an existing entry in the back-end database._                 |
| EntryCreate |   Y   | _The EntryCreate component will render the CityFilter and EntryForm components to capture user input for Creating a new entry in the back-end database._                 |
| CityFilter |   N   | _The CityFilter will prompt the user to select a city that the entry is connected to for back-end database association. If it doesn’t exist, user has option to create a new city.._ |
| EntryForm |   N   | _The EntryForm will capture user place entry details to Create and Edit ._                 |
|    Footer    |   N   | _The footer will show info about me, sources, and links to my Github, LinkedIn and portfolio._ |

<br>

### MVP Server (Back End)

#### ERD Model

![Entity Relationship Diagram - Travelogue](https://res.cloudinary.com/db0kbxvhr/image/upload/v1583506224/Project%204%20-%20Travelogue/travelogue-erd-mvp-v2_l7flyc.jpg)

#### Endpoints

> User Routes

- GET `/api/users`
	- Index route returning an array of all users and nested entries
- GET `/api/users/:user_id`
	- Show route for returning a user requested by ID with nested entries
- POST `/api/users`
	- Create a new user
- PUT `/api/users/:user_id/`
  - Update a user by user id
- DELETE `/api/users/:user_id/`
  - Delete a user by user id

> User Entries Routes (requires Auth)

- GET `/api/users/:user_id/entries`
	- Index route returning an array of all entries by user ID
- GET `/api/users/:user_id/entries/:entry_id`
	- Show route for returning an entry requested by entry ID
- POST `/api/users/:user_id/entries`
	- Create a new entry associated with an existing user, cannot create a new entry without a user id
- PUT `/api/users/:user_id/entries/:entry_id`
  - Update an entry by entry id
- DELETE `/api/users/:user_id/entries/:entry_id`
  - Delete an entry by entry id

> Places Routes (Public, open to all)

- GET `/api/places`
	- Index route returning an array of all places
- GET `/api/places/:place_id`
	- Show route for returning a place by id with associated entries where private = false

> Additional Routes - not all will be accessible by the front-end

- POST `/api/places`
	- Create a new place
- PUT `/api/places/:id`
  	- Update a place by place_id
- DELETE `/api/places/:id`
  	- Delete a place by place_id, cascade to associated entries
- GET `/api/categories`
	- Index route returning an array of all categories
- GET `/api/categories/:id`
	- Show route for returning a category requested by ID
- POST `/api/categories`
	- Create a new category
- PUT `/api/categories/:id`
  	- Update a category by category id
- DELETE `/api/cities/:id`
  	- Delete a category by category id

<br>

## Planning

### Timeframes

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Rails Models        |    H     |     2 hrs      |     1 hr     |
| Seed Data           |    H     |     4 hrs      |     3.5 hrs     |
| CRUD Routes & Controllers |    H     |     4 hrs      |     2 hrs     |
| Back End User Auth  |    H     |     8 hrs      |     8 hrs     |
| App with Routes     |    H     |     4 hrs      |     1 hr     |
| Front-end Auth - sign up/log in forms |    H     |     8 hrs      |     6 hrs     |
| Header, Footer, Nav   |    L     |     3 hrs      |     2 hrs    |
| PublicEntries List, Card, Details  |    H     |     4 hrs      |     3 hrs     |
| UserEntries List, Details  |    H     |     6 hrs      |     3 hrs     |
| Entry Form - Create, Edit  |    H     |     6 hrs      |     TBD     |
| CSS  |    M     |     8 hrs      |     TBD     |
| Responsive Media Queries CSS  |    L     |     3 hrs      |     TBD     |
| TOTAL               |          |     64 hrs      |     TBD     |

<br>

### Schedule

|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 4 (W) | Project proposal planning, Psuedocode    |
|Mar 5 (Th) | Project pitch   |
|Mar 6 (F) | Scaffold, seed data and Back-end user auth           |
|Mar 7 (S) | Front-end Routes and Display Components    |
|Mar 8 (Su) | OFF                       |
|Mar 9 (M) | Front-end user auth & forms           |
|Mar 10 (T) | Front-end CRUD - entry forms          |
|Mar 11 (W) | CSS styling, MVP                 |
|Mar 12 (Th) | Polishing            |
|Mar 13 (F) | Final presentations              |

<br>


## Post-MVP
- User ability to group entries by new Trip model, which would contain multiple entries, possibly for multiple cities and countries
- Create a new model for Images which will allow users to add multiple images to each entry, displayed as a gallery or carousel
- User ability to export or share entries with others via email or social media (Facebook, Twitter, Whatsapp, SMS)
- Integration of a third-party API (e.g. Google Places) to search for external data that can pre-populate standard information, such as address, geo coordinates, website URL and description
- User ability to view their own user details, update them and delete their account
- Integrate Mapbox to use lat/long coordinates of places to show a map on the entry page 

<br>

***

## Project Change Log

- 3/5:  Modified ERD - removed cities table and added a new table for places in order to aggregate user entries on a place to reduce the number of fields for user input and standardize places that entries can be associated with (reducing duplication). Will potentially test out use of available npm packages or ruby gems that will provide standardization of country and city attributes for each place.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
> **ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
> **RESOLUTION**: Missing comma after first object in sources {} object

***
