# Travelogue Full Stack Application

Deployed application: https://travelogue-app.herokuapp.com/

_**Travelogue** is the web app you need to keep track of where you’ve been to help others get where they’re going. Ever been asked for recommendations for a place you’ve traveled to and come up at a loss for the specifics of that trip three years ago? Travelogue gives you an easy way to log the details of your adventures at home and abroad so that you can easily reminisce and help your friends plan their next journeys._

### Code Showcase

This is from my Create Entry component. I was proud of the conditional rendering logic for showing different parts of the page based on state and having the different pieces render stored in separate function expressionss.

```
  const selectPlace = () => {
      return (
          <div className="filter-container">
              <div>Select a place:</div>
              <select className='select-list' name="selectedPlaceId" onChange={this.handlePlaceSelect}>
                  <option>--choose one--</option>
                  {placeOptions}
              </select>
              <button onClick={this.handlePlaceConfirm}>Confirm</button>
          </div>
      )
  }

  const showEntryForm = () => {
      const { name, city, country, description } = this.state.selectedPlace
      return (
          <div className='entry-form-container'>
              <div className='selected-place-details-container'>
                  <div className='selected-place-details'>
                      <h4>Selected Place</h4>
                      <p>{name}</p>
                      <h4>Location</h4>
                      <p>{city}, {country}</p>
                      <h4>Description</h4>
                      <p>{description}</p>
                      <button onClick={this.cancelPlaceSelect} className='link-button'>
                          Select a New Place
                  </button>
                  </div>
              </div>

              <div className='create-entry-container'>
                  <h2>Add Your Entry</h2>
                  <EntryForm
                      entryFormData={this.state.entryFormData}
                      handleChange={this.handleEntryChange}
                      handleSubmit={this.handleEntrySubmit}
                  />
              </div>
          </div>
      )
  }

  const showError = () => {
      return (
          <div style={{ textAlign: "center" }}>
              ERROR: Please selecta place to continue.
          </div>
      )
  }

  return (
      <div className='create-entry'>
          <h1>Log a new entry</h1>
          {this.state.entryFormData.place_id ? showEntryForm() : selectPlace()}
          {this.state.placeSelectError ? showError() : null}
      </div>
  )
```

### MVP Overview

- User authentication - sign up and log in
- RESTful JSON API with endpoints for full CRUD controller actions built with Rails
- Full CRUD user view for viewing, creating, editing and deleting entries
- Filter list views based on country or category

### Libraries Used

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end Javascript Framework for UI_ |
|   React Router   | _Create routes for UI navigation_ |
|      Axios       | _Fetch data from our back-end API & any 3rd-party APIs_ |
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

### React Component Hierarchy

![Component Hierarchy](https://res.cloudinary.com/db0kbxvhr/image/upload/v1583436582/Project%204%20-%20Travelogue/component-hierarchy-v2_edcvve.png)

### Backend ERD Model

![Entity Relationship Diagram - Travelogue](https://res.cloudinary.com/db0kbxvhr/image/upload/v1583506224/Project%204%20-%20Travelogue/travelogue-erd-mvp-v2_l7flyc.jpg)

### Sample Wireframes

- Desktop Public Landing Page (Index) with Form Overlay (User Sign Up / Sign In)

![Wireframe - User Form Overlay](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_650/v1583436568/Project%204%20-%20Travelogue/wireframe-02-desktop-userform-overlay_aurx6d.png)

- Desktop User Landing Page (Index based on Auth)

![Wireframe - User Places](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_650/v1583436568/Project%204%20-%20Travelogue/wireframe-03-desktop-userplaces_ngsksk.png)

- Desktop Entry Details Page (Show)

![Wireframe - User Entry Details](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_650/v1583436568/Project%204%20-%20Travelogue/wireframe-04-desktop-userplacedetails_qencml.png)

- Mobile Views

![Mobile Wireframes](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_654/v1583436569/Project%204%20-%20Travelogue/wireframes-mobile-versions_bjefkc.png)


<br>

## Project Change Log

- 3/5:  Modified ERD - removed cities table and added a new table for places in order to aggregate user entries on a place to reduce the number of fields for user input and standardize places that entries can be associated with (reducing duplication). Will potentially test out use of available npm packages or ruby gems that will provide standardization of country and city attributes for each place.
- 3/11: Due to time constraints, I decided to save the functionality for users to upload images as a post-MVP feature. I also ran into time issues with some additional logic I wanted to include - for example, filtering entries based on country, adding public entries to the places in the public view and creating a new place ahead of creating an entry.
- 3/12: For deployment, I had to remove git from the top-level directory where my Rails app was nested and when this happened, I lost my commit history. I was at 100+ commits prior to losing this history.


## Code Issues & Resolutions

**Issue:** Authorization - authorize_request not working for getEntries when sending request from the Client                              
**Resolution:** Set the Authorization header to localstorage.getitem in the Axios.create method of the api helper.

<hr>

**Issue:** CreateUser function not setting state for currentUser and not saving JWT                              
**Resolution:** Console logged the JSON response to determine what's being returned back from the back-end and tracked the methods back to the UsersController. Realized that I needed to add Auth to the POST method of Users in order to save the JWT when the user is created.

<hr>

**Issue:** After deployment, CreateUser method was returning an error as follows:
```
Completed 500 Internal Server Error in 537ms (ActiveRecord: 8.4ms | Allocations: 45907)
api.1 |  NoMethodError (undefined method `user_url' for #<Api::UsersController:0x00007f932e657980>): 
api.1 |  app/controllers/api/users_controller.rb:24:in `create'
```
**Resolution**: Searched my project for user_url and could only see it referenced in test files. Seeing that the error was on a specific line in my users controller, I realized it was the `location: @user` in the render that was causing the error and removed it.

## Post-MVP Goals
- User ability to group entries by new Trip model, which would contain multiple entries, possibly for multiple cities and countries
- Create a new model for Images which will allow users to add multiple images to each entry, displayed as a gallery or carousel
- User ability to export or share entries with others via email or social media (Facebook, Twitter, Whatsapp, SMS)
- Integration of a third-party API (e.g. Google Places) to search for external data that can pre-populate standard information, such as address, geo coordinates, website URL and description
- User ability to view their own user details, update them and delete their account
- Integrate Mapbox to use lat/long coordinates of places to show a map on the entry page 