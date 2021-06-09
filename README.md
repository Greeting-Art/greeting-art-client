# Greeting Art 

A random generative art + eCard app

## User Stories  
1. Want: As a user I want generate an e-card to send without signing in.  

Feature task:  
 -Users can generate a random art card and send it directly via email.  

Acceptance tests:  
Ensure that no login is required to generate art in app.  
ensure art generated can be sent to a user specified email address.  

2. Want:As a user I want to be able to save my random art.  

Feature task:  
 -unregistered users can save images locally.  

Acceptance tests:  
Ensure that generated art image can be saved to local computer.  

3. Want: As a user I want to save my images to a gallery.  

Feature task:  
 -users can register/login for an account  
 -user accounts can store images to a personal gallery  
 -user can view all pieces they have saved in their gallery.  

Acceptance tests:  
Ensure user signup/login auth is working  
Ensure user can save to gallery after logged in  
Ensure login generates link to auth route for gallery  
Ensure gallery lists user saved images.  

4. Want: As a user I want to be able to send art from my gallery to my friends!  

Feature task:  
 -Users can send art from gallery to desired email  

Acceptance tests:  
Ensure in personal gallery a user can specify an email address and send an image directly from the gallery page.  

### Data-Flow:

![Dataflow Chart](/src/assets/greeting-art_graphics_dataflow.png)

### UI Wireframe:

![UI Wireframe](/src/assets/greeting-art_graphics_wireframe.png)
