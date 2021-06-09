# Software Requirements

## Vision:  
 We would like to create an app that allows users to easily create randomized, unique digital art, and to send that art to others in eCard form.  

### Pain Points Addressed:  
 Conventional eCard services are complicated to use in terms of accounts and subscriptions, often have cluttered interfaces, and many of them feel 'old-fashioned,' reflecting physical greeting card industry more than the app ecosystem of the present.  

### Why?  
 Our product will facilitate the creation of a unique digital asset that the user can save, send or share as a personalized digital greeting to a friend or loved-one.  
 The internet is full of content, but this is something individual and personable, the fun of creating something high-tech, without the generic feeling of mass-production.  


## Scope  
 > IN: User can adjust input parameters; user can then create a piece of random, generative art with one click; user can download the art and/or save it to a gallery; user can select a piece of art from the gallery and set up a scheduled email to be sent with the art as an eCard.  
 < OUT: The app will not allow users to draw with the mouse or via touchscreen; eCard emails cannot be scheduled more than 72 hours in advance; unsaved art cannot be retrieved; [preliminarily] user cannot create an account to save art separate from public gallery.  

### MVP:  
Random generative art can be created, saved to a gallery and selected to send/share via email.  

### Stretch Goals:  
Customization of images via text/image overlay; user auth login for personal gallery;  

## Non-Functional Reqs (req/plan to meet):  

Accessibility -- App is easy for user to navigate.  
 We will work to design the UI to have appropriate visual contrast for text and buttons, to be screen-reader compatible via tags and labels.  

Simplicity -- App can be used immediately without need for tutorial.  
 We will streamline the design so that no login or account is needed, and so that the pertinent features for each aspect (create/view/send) are readily accessible.  

Response Time -- App generates art in timely manner.  
 We will work to reduce loading times as possible given the technology in use, and will employ a loading spinner to clearly indicate that process;  


## Data Flow:  
1. Creation  
A new user arrives at the home page, adjust inputs and clicks create button.  
Random generative art is created -- using p5*js -- and displayed via the Canvas API.  
If user decides to save, the canvas is saved to an image file with a user-chose title.  
Choice: (a) download or (b) save to gallery:  
 (a) file is downloaded to user's local computer/server  
 (b) file is exported to Amazon CloudFront/S3 bucket  

2. Gallery  
User loads the gallery page, sees all saved artwork -- fetched from Amazon -- and can click to select a piece to send.  
The file information for that piece is redirected, along with the user, to the email page.  

3. Email  
User inputs a recipient email address and an optional text message, and the pre-selected image is sent -- via SendGrid --to the recipient (along with a hardcoded app-general subject line, form the app-general sender address).  
