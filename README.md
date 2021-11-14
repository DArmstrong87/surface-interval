# Surface Interval
## Live Site URL: https://surface-interval-ilnmz.ondigitalocean.app/
[![SI](https://res.cloudinary.com/surface-interval/image/upload/v1636928550/demo/1_o4vb0j.png "SI")](https://res.cloudinary.com/surface-interval/image/upload/v1636928550/demo/1_o4vb0j.png "SI")

## About
Surface Interval is designed as a scuba diver's companion app and solves the problem of gear and credential management for dive trips, dive planning, logging dives and uploading photos. All content is user-generated.


## Logging In
- User authentication is beyond the scope of this project.
- This app has no user authentication beyond an email address.
- Use email *demo@email.com* to login to view a full demo with logged dives, photos and cert cards.

## Features
## Dive Log
[![](https://res.cloudinary.com/surface-interval/image/upload/v1636928563/demo/9_e0wvbh.png)](https://res.cloudinary.com/surface-interval/image/upload/v1636928563/demo/9_e0wvbh.png)
- Users can create, edit, and delete dive entries.
- Dive entries include date, location, dive site, water composition, depth, time, comments, dive and water conditions, specialties and photos.
- Photo upload functionality through Cloudinary.
- Dive Log lists in chronological order by default.
- User can filter the list by dive location, dive site, specialty or order all dives by date, depth, time or water composition.
- 📷 emoji indicates if photos have been uploaded to the dive entry.
- Dive log also displays dive stats and number of specialty dives logged for each category.
- User can view single dive upon clicking on the dive number.
- Single dive view displays all details about the dive and photos.

## Dive Planner
[![](https://res.cloudinary.com/surface-interval/image/upload/v1636928558/demo/3_lbtbji.png)](https://res.cloudinary.com/surface-interval/image/upload/v1636928558/demo/3_lbtbji.png)
[![](https://res.cloudinary.com/surface-interval/image/upload/v1636928543/demo/4_meheau.png)](https://res.cloudinary.com/surface-interval/image/upload/v1636928543/demo/4_meheau.png)
- The Dive Dlanner uses the PADI Recreational Dive Planner. It is designed for new Open Water students to practice their dive planning skills as well as anyone planning a single dive or multiple dives without a computer.
- The Dive Planner accepts depth and time as input for a single dive and depth, time and surface interval for subsequent dives.
- User can specify 3 air mixtures: air, EANx32 and EANx36.
- The Dive Planner only holds transient state to display to the user information about the dive and informs the diver if a planned dive is relatively safe regarding nitrogen exposure only.
- Information provided includes ending pressure group, safety stop requirement, no deco limit and recommended pre-flight surface interval.

## Gear
[![](https://res.cloudinary.com/surface-interval/image/upload/v1636928553/demo/5_zinkp1.png)](https://res.cloudinary.com/surface-interval/image/upload/v1636928553/demo/5_zinkp1.png)
[![](https://res.cloudinary.com/surface-interval/image/upload/v1636928558/demo/6_dyombt.png)](https://res.cloudinary.com/surface-interval/image/upload/v1636928558/demo/6_dyombt.png)
- Proper dive planning includes ensuring you have all the gear you need for the dive conditions.
- The user can create, edit or delete gear sets which serve as a packing list for the dive conditions.
- The user can export this list as a [PDF](https://react-pdf.org/ "PDF").

## Photo Gallery
[![](https://res.cloudinary.com/surface-interval/image/upload/v1636928560/demo/7_lt9h0l.png)](https://res.cloudinary.com/surface-interval/image/upload/v1636928560/demo/7_lt9h0l.png)
- Photos uploaded to dive entries will be compiled into a single photo gallery view.
- The photo list is in chronological order by dive entry date.
- Users can view the location, dive site, date and photo list in each section.
- Users can click on photos to view as [Lightbox](https://www.npmjs.com/package/simple-react-lightbox "Lightbox").

## Profile
[![](https://res.cloudinary.com/surface-interval/image/upload/v1636929113/demo/Inked8_LI_jet9e0.jpg)](https://res.cloudinary.com/surface-interval/image/upload/v1636929113/demo/Inked8_LI_jet9e0.jpg)
- User's dive stats are displayed here as well.
- User can upload and replace a profile pic.
- User can add or delete certification cards.
- The Certification Card section lists cards by date issued.
- User must upload front and back of card along with the name of the card and date issued.