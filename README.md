# Waypoint Planner

A trip planner with a day-by-day itinerary, a live map, and custom tags with their own map icons.

## Sections

The rail on the left switches between the sections below. On phones it's a tab bar at the bottom with Dashboard, Itinerary, Bookings and Saved, and **More** holds Budget, Packing, Notes, All trips and Settings.

- **Dashboard.** A trip dashboard with a countdown, days, stops, total distance and time getting around, your route across cities, what's coming up, budget and packing progress, and a day-by-day table that jumps into the itinerary.
- **Itinerary.** The planner and map. The panel has two tabs:
  - **Overview:** a condensed run-through of the trip. Each city with its hotels, each day on one line with its times and stops in order, and the travel between cities. Tap a day to show it on the map, or its arrow to open it in Daily Plan.
  - **Daily Plan:** the full day-by-day planner (details below).

  The bottom of the panel has **Add city** and **Add location** buttons. Add location saves a place to Saved places.
- **Bookings.** Flights, trains, tickets and restaurant reservations grouped by day, with one-tap copy for confirmation codes. Hotels from your itinerary appear automatically.
- **Budget.** Set a trip budget and track paid and planned expenses, with breakdowns by category and by city and a warning when you go over.
- **Packing.** A checklist grouped by category with a progress bar. New trips start with a sensible list you can edit.
- **Notes.** Free-form trip notes and an "Important info" box (emergency numbers, insurance), saved as you type.
- **Saved places.** One library of places shared by all trips, grouped by country, then city. Search it, filter by tag, and add any place to any trip as a stop or an extra on the day you pick. A badge shows which trips each place is already in. Places can be saved without a location; they're placed near that day's stops when added. Use the **+** on any country or city to add a place there with its location fields filled in. Choosing "Not on a day" when adding a place on the map also saves it here. It starts with sample places in Portugal and Spain that go with the sample trip. When you search from a day, saved places near that day's city come first, and anything over 300 km away is labeled with its distance.
- **Switching trips.** Tap the trip name at the top of the itinerary panel or the Dashboard (or the small trip name above any trip page) to switch to another trip, start a new one, or go to All trips. You stay on the same screen.
- **All trips.** Keep several trips. Open or duplicate them, start a new one, or open a trip's own settings.
- **Settings.** App-wide settings: theme, reduced motion, tags (shared by all trips and Saved places), kilometres or miles, 12 or 24 hour time, which screen the app opens to, the currency and map style for new trips, backup and restore of all trips, and erasing everything.

Each trip also has **Trip settings** (the cog at the top right of the itinerary panel, or **Settings** on its card in All trips): name, first day, budget currency, exporting the trip, replacing it with the sample trip, and deleting it.

## On phones

The itinerary is built for phones. The map fills the screen, and the plan sits in a bottom sheet you drag by its handle or header: pull it down to see more map, halfway to see both, or all the way up to plan. Tap the handle to step between those positions. Tapping a pin brings the sheet up to show its details. The day picker and tag filters float at the top of the map, and **Map key** shows what the lines and shapes mean. Dialogs slide up from the bottom with their buttons always in reach, and text fields don't zoom the page when you tap them. Install it to your home screen to use it full screen like an app (see below).

## Itinerary features

- **Search to add.** Add place, Add a stop, Add location, Add city and Add a hotel all open a search box. It finds your own saved places, trip stops and hotels, a built-in list of about 140 major cities, and (when the app is opened in a regular browser) any landmark, restaurant or address through the free Photon map search. Picking a result fills in the name, location, city, country and a matching tag. Every search also offers **Pick on the map** and **Enter it manually**.
- **Countries and cities.** The itinerary is titled by country ("Portugal & Spain"), and cities are grouped under a country label when a trip crosses borders. Each city has a header with its day range and stop count, its hotels listed right under it, folds away like a day, and can be renamed or given a country (common cities fill it in automatically). Add a city (with how many days) with the **Add city** button at the bottom of the panel; it uses the country you're working in, which you can change. Press and hold a city's name (or drag it with a mouse) to reorder cities; days and hotel dates move with it. Add a day to any city with its "+ Add a day" link. Hotel dates shift automatically when days are added or removed.
- **Itinerary by day.** Each day has numbered stops connected by a route line on the map. Use **Add a stop** at the bottom of any day (or the button in an empty day) to search for a place, pick one from Saved places, or enter it manually; it goes straight onto that day as an itinerary stop. Press and hold a stop (or click and drag with a mouse) to reorder it or move it to another day. With a keyboard, focus a stop and press Alt + Up or Down.
- **Getting around.** Tap the travel row between two stops (or a time badge on the map) for a quick menu of walk, bike, transit, car/taxi and plane, with the travel time for each. You can also set it in **Edit place**. Each mode has its own line style on the map, and flights draw as a double-line arc. Use the **Travel** switch at the top of the itinerary to hide the travel rows when you just want the list of stops. If you don't choose, the app picks walk for short hops, transit for longer ones, and plane for distances over 400 km.
- **Hotels.** Each city lists its hotels in one compact line each (name and nights) right under the city name. Tap one to edit it. Add a hotel with the bed **+** button at the top right of the city; it starts on that city's first free night. Set check-in and check-out days (including the night before Day 1). Each day then starts by leaving your hotel and ends by getting back to it, with its own travel mode and time. On a day you switch hotels, you check out of one in the morning and check in at the other that evening. To go to a hotel during the day, for example to drop bags at the new hotel right after checking out, drag the evening "Check in at" row up into the day (or use **Add as a stop**). It becomes a "Check in at" stop that stays linked to the hotel, and the evening row changes to "Back to".
- **Travel between cities.** The trip from one city to the next shows as a compact block between the two cities with the city names, date, and how you travel ("Lisbon → Porto · Sun, Nov 15 · 🚆 Train AP 131"). Tap it to open the details: the mode (tap to change), distance, times, and a ticket card. Use **Add travel details** to save the flight, train, bus, ferry or car with its times, seats and confirmation code, which also shows up in Bookings. The block shows between every pair of cities, even before you've planned them: you can pick the mode right away, and the distance and time appear once each city has a stop or hotel. On the map these trips are drawn in their own slate color, which nothing else uses, so they stand out from the daily routes.
- **Travel between days.** For nights without a hotel, each day shows how you get from the previous day's last stop to its first stop. Tap the row to pick the mode and whether you travel at the end of the earlier day or the start of the next one, and the schedule adjusts. When you view a single day, the stop on the other day shows as a faded pin you can tap to jump there.
- **Flights, trains, buses, ferries and cars.** A Travel hub stop gets a **Travel details** section in Edit place. Pick Flight, Train, Bus, Ferry or Car and fill in what you have: airline or operator, number, from and to, departure and arrival dates and times (it works out how long the trip takes), boarding, terminal, gate or platform, seats, baggage and the confirmation code (a car has pick-up and return dates and times, and where to return it). The stop shows the number and departure time under its name, and tapping it shows a ticket card with a one-tap copy of the code. The departure time is when you leave that stop, and the arrival time is when you reach the next one, so the rest of the day lines up. If you'd get there after departure, it warns you. Every one also shows up in **Bookings**.
- **Picking times.** Every time field lets you type a time ("930", "9:30 pm", "21:30") or tap the clock to pick it on a dial. Tap a day's start time to change it the same way.
- **Stop details.** Click any stop to see how you get there, the travel time and distance, and your arrive and leave times. Set each day's start time and how long you'll spend at each place, and the whole day's schedule updates. To set your own time, tap **Arrive** in a stop's details: the rest of the day follows from it (marked with a dot), and **Use travel time instead** puts it back. Setting it on a day's first stop moves the day's start time instead, so you leave the hotel in time.
- **Routes that follow streets.** On the *Illustrated* map, routes take the shortest path along the map's drawn streets. On the *Street* map, the app asks a free routing service for real street routes and falls back to the drawn streets if it can't connect.
- **Removing places.** Tap the **✕** on an extra, **Remove from day** in a stop's details, or **Remove from trip** in Edit place. It comes off the trip right away with an **Undo** button. This never touches Saved places: those are only deleted from the Saved page.
- **Stops at your hotel.** When a stop sits at your hotel, the map shows one pin with a small house badge instead of two pins on top of each other.
- **Two kinds of places.**
  - *Itinerary stops* show as numbered circles in the day's color.
  - *Extras* show as diamonds in their tag's color. Use these for places you'd like to see if there's time.
- **Custom tags.** Create tags with your own name, emoji icon and color in **Settings > Tags**. Every marker on the map uses its tag's icon. About 40 ready-made tags (Castle, Historic Site, Restaurant, Cafe, Scenic Spot, Park, Beach, Hiking, Church, Zoo, Monument, Shop, Bar, Attraction, Cinema, Garden, Airport, Train Station, Buddhist Temple, Shinto Shrine, Theme Park, Aquarium, Island, Mall, Currency Exchange, Ferry and more) come with their own icons and colors, with 24 colors. Add your own with the **+** swatch, and it's saved alongside the others for next time. The tag picker in Edit place has a search box and lists the tags your trip uses first, and the map filters only show tags that are in use. A **Travel hub** tag (🚉) covers airports, train and bus stations and ferry terminals. Places found by search, or typed in with a name like "Airport" or "Station", get it automatically, and it works for itinerary stops like any other tag.
- **Map filters.** Show all days, a whole city, or a single day (the sidebar highlights it and fades the rest), switch to "Itinerary only", and turn individual tags on or off.
- **Collapsible days.** Fold any day away in the sidebar, or collapse them all at once. **Expand all** opens every day and city. Each day's "Extras if there is time" list folds away too.
- **Smooth motion throughout.** Stop details slide open, stops slide out of the way while you drag, the map glides to the day you pick while its pins and routes fade in, and the selected route animates. Animations turn off automatically if your device is set to reduce motion.
- **Two map styles.** *Illustrated* is a hand-drawn style map built into the app, so it works anywhere with no map service. It covers Lisbon, Porto and Madrid in street-level detail, plus the Iberian coastline for zoomed-out views. *Street* loads a live street map.
- **Add places** with "+ Add place": search for it, or pick the spot on the map. Drag any pin to move it.

The app opens with a sample 9-day trip (3 days each in Lisbon, Porto and Madrid, with a train and a flight between them), complete with bookings, a budget, a packing list and notes, so you can try everything right away. Use **Trip settings > Replace with the sample trip** to restore it.

## Google Maps (optional)

With your own Google Maps API key, the app uses Google's map and data instead of the built-in map:

- **Search** suggests real places as you type, near the city you're planning.
- **Directions** are real routes with real travel times for walking, cycling, driving and **transit**, cached for 30 days so each trip leg is only looked up once.
- **Place details:** tap **Hours, rating and photo** on a stop or **Details** on its map pin; tapping a hotel opens its details straight away, with an **Edit hotel** button, to see the rating, today's hours, website, phone and a photo. Places added before Google was connected are found on Google by their name the first time. Once you've opened a place's details, they load automatically every time you open that place (Google doesn't allow apps to store ratings, hours or photos, so they're fetched fresh). **Hide details** in the card turns that off for the place.
- **Tap any place on the map** (a restaurant, a museum) to add it to the day you're viewing or save it for later.
- **Map / Satellite** switch, and the map follows your light or dark theme.

Without a connection the app switches to the built-in map automatically, and goes back to Google next time it opens online.

### Setting it up (about 10 minutes)

Google asks for a credit card on the billing account even when usage stays free. The app's built-in limits (step 5) keep you far inside Google's free monthly amounts.

1. Go to the [Google Cloud console](https://console.cloud.google.com/), create a project (for example "Waypoint"), and add a billing account when asked.
2. Under **APIs & Services > Library**, turn on these three APIs: **Maps JavaScript API**, **Places API (New)** and **Routes API**.
3. Under **APIs & Services > Credentials**, choose **Create credentials > API key**. Then edit the key:
   - **Application restrictions:** choose **Websites** and add `https://<your-username>.github.io/*`.
   - **API restrictions:** choose **Restrict key** and tick the three APIs from step 2.
4. Optional but recommended: under **Google Maps Platform > Map management**, create a **Map ID** (type JavaScript, Vector). Without one, the app uses Google's demo map ID, which is meant for testing.

### Clean map style (optional, free)

The Clean button on the map hides Google's shops, restaurants and other places so only your own pins show. Google does not ship a ready-made "no places" map for maps with custom pins, so you make one once (about 3 minutes, no cost):

1. In Google Cloud, open **Google Maps Platform > Map Styles** and click **Create style**.
2. Pick the **Silver** or **Standard** template and click **Customize**.
3. In the left list, choose **Points of interest** and set **Visibility** to off (you can also turn off **Transit**). Click **Save**, name it "Waypoint clean".
4. Open **Map management** and click **Create Map ID**: name "Waypoint clean", type **JavaScript**, **Vector**. Save.
5. On that Map ID's page, under **Map styles**, choose "Waypoint clean" and save.
6. Copy the Map ID and paste it in the app under **Settings > Google Maps > Clean map ID** (or into `config.js` after `googleCleanMapId:` so every device gets it).

Switching between Map, Clean and Satellite counts as one map load against the free allowance.
5. **Usage limits are built into the app.** Google doesn't let you lower most Maps limits yourself (they show "Quota is not adjustable"), so the app counts every Google request on each device and stops well under Google's free monthly amounts. Map opens are capped at 60 a day and 1,500 a month (Google's free amount is 10,000), and route lookups, search, place details and photos have similar limits. When a limit is reached, the app quietly falls back (built-in map, estimated travel times, built-in search) until the next day or month. **Settings > Google Maps** shows this month's usage.
6. Set a budget alert under **Billing > Budgets & alerts** (for example $1) so you'd hear about any charge right away.
7. Put the key in the app, one of two ways:
   - **For every device (recommended):** open `config.js` and paste the key between the quotes after `googleKey:` (and the Map ID after `googleMapId:` if you made one). Commit it to GitHub. Every phone and computer that opens the app uses Google Maps automatically. The key is visible to anyone who looks at the file, which is normal for Google Maps websites; the website restriction from step 3 is what stops others using it.
   - **For one device only:** in the app, open **Settings > Google Maps**, paste the key and tap **Connect**. It's saved only on that device.

**Settings > Google Maps > Use the built-in map** turns Google off on that device without touching `config.js`.

## Installing it as an app

Waypoint is an installable web app. Once it's on GitHub Pages, open the link on your phone:

- **iPhone or iPad:** in Safari, tap **Share**, then **Add to Home Screen**, then **Add**.
- **Android:** in Chrome, tap **Install** when it's offered, or open the menu (⋮) and choose **Install app**.

It gets its own icon, opens full screen without the browser bar, and works offline. On Android, press and hold the icon for shortcuts to Itinerary, Bookings and Saved places. **Settings > Use as an app** shows the steps for the device you're on, with an **Install** button where the browser supports one.

When you push a new version to GitHub, the app picks it up the next time it opens online and shows **A new version of Waypoint is ready** with an **Update** button.

The installed app keeps its own copy of your trips, separate from the browser. To move trips over, use **Settings > Copy backup** in the browser, then **Restore or import** in the app.

What works offline: everything you've planned, the Illustrated map, and Street map areas you've already looked at. Route lookups on the Street map and online place search need a connection.

## Files

- `index.html`: the app
- `config.js`: your settings (the Google Maps key goes here)
- `manifest.webmanifest`: the app's name, colors, icons and shortcuts
- `sw.js`: the service worker that makes it open offline and handles updates
- `icons/`: the app icon in the sizes phones need
- `lib/leaflet-1.9.4.js`: the map library, bundled so the app doesn't depend on a CDN (BSD-2 license in `lib/LEAFLET-LICENSE.txt`)

## Running it

Upload the whole folder, including `icons/` and `lib/`. Opening `index.html` straight from your computer works for trying it out, but installing and offline use need it served over HTTPS, which GitHub Pages does for you.

### Publishing with GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. After a minute, the app is live at `https://<your-username>.github.io/<repo-name>/`. Open that on your phone to install it.

## How data is stored

Trips are saved in the browser's local storage. That means:

- Each person who opens the site gets their own separate trips.
- Data stays on that one browser and device. Clearing browser data erases it. Use **Settings > Copy backup** to back up every trip, and paste it into **Restore or import** on another device.
- There are no accounts and nothing is sent to a server.

## Built with

- [Leaflet](https://leafletjs.com/) 1.9.4 for the map (bundled in `lib/`)
- Live street map tiles (the *Street* style) from [CARTO](https://carto.com/basemaps/) using [OpenStreetMap](https://www.openstreetmap.org/copyright) data
- Real street routes (the *Street* style) from the [FOSSGIS routing service](https://routing.openstreetmap.de/), free for light use
- With your own key: map, place search, place details and routes (including transit) from [Google Maps Platform](https://mapsplatform.google.com/)
- Place search from [Photon](https://photon.komoot.io/) by komoot, using OpenStreetMap data, free for light use (when Google Maps isn't set up)
- Travel times are estimates based on route distance and typical speeds for each mode (with intercity speeds for long transit and car trips)
- Fonts from Google Fonts (Bricolage Grotesque, Figtree, JetBrains Mono)

## Roadmap ideas

- Accounts and syncing across devices
- Sharing a trip with travel companions
