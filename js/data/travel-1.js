/* Course 3 — Travel Management (modules 1–4) */
ACADEMY.addCourse({
  id: 'travel',
  number: 3,
  title: 'Travel Management',
  short: 'Travel Desk',
  tagline: 'Plan, book and rescue business trips like a professional travel desk.',
  description: 'How to plan and book business travel for a director from start to finish: policy and approvals, domestic and international flights, trains, cabs, hotels, visas, forex, itineraries, and what to do when things go wrong. Practise with realistic trip-planning missions.',
  outcomes: [
    'Plan a trip around the purpose of the visit, not just the cheapest fare',
    'Book flights, trains, cabs and hotels correctly, with the right fare rules and GST invoices',
    'Handle passports, visas, forex and insurance for international travel',
    'Build professional itineraries and rescue trips when flights are cancelled or documents are lost'
  ],
  practice: { label: 'Travel desk missions', route: '#/practice/travel' },
  modules: []
});

ACADEMY.addModules('travel', [
/* ---------------------------------------------------------------- */
{
  title: 'Corporate travel foundations',
  summary: 'The EA’s role in travel, the travel policy, the traveller profile and the booking workflow.',
  lessons: [
{
title: 'The EA’s role in travel and the travel policy',
minutes: 8,
body: `
## Travel is where small mistakes become big problems
A wrong date, an expired visa or a hotel in the wrong part of town can cost a deal, a day or the director’s goodwill. When you manage travel, you are responsible for the director arriving **on time, rested, with everything they need, and within policy.**

## What the EA owns
| Stage | What you do |
|---|---|
| Plan | Understand the purpose, dates, meetings and constraints; check documents |
| Approve | Get the trip approved as per policy |
| Book | Flights or trains, hotels, ground transport, visas, insurance, forex |
| Brief | Itinerary, travel pack, contacts, documents |
| Monitor | Check-in, delays, weather, changes during the trip |
| Rescue | Rebook and re-plan when things go wrong |
| Close | Expenses, invoices, reconciliation, feedback |

## Start with the purpose, not the ticket
Before you search for a single flight, answer:
1. **Why** is the director travelling? Which meetings, where, at what time?
2. **What must not fail?** The 11 am signing, the trade fair opening, the client dinner.
3. **What does the director prefer?** Early flights or late? Airline? Seat?
4. **What does the policy allow?** Class of travel, hotel budget, approvals.
5. **What documents are needed?** ID, passport, visa, invitation letters.

## The travel policy
Most companies have a written travel policy. Get a copy and learn it. Typical contents:
| Policy area | Typical rules |
|---|---|
| Class of travel | Economy for short flights; business for senior leaders or long flights |
| Booking window | Book domestic 7–14 days ahead, international 3–4 weeks ahead |
| Approvals | Who approves; travel requisition form |
| Hotels | City-wise limits per night; preferred hotels with corporate rates |
| Ground transport | Cabs, car rentals, mileage rules |
| Per diem / daily allowance | Fixed daily amount for meals and incidentals, or actuals with receipts |
| Expense claims | Deadline after the trip; receipts and GST invoices required |
| Insurance | Mandatory for international travel |

:::tip When the director is above the policy
Senior leaders often have different entitlements. Write down exactly what applies to your director, signed off by HR or finance, so there are no disputes at claim time.
:::

## Duty of care
The company is responsible for the traveller’s safety. As the EA you should always know:
- Where the director is, and how to reach them.
- Their hotel, flight numbers and local contacts.
- Any risks at the destination: weather, strikes, unrest, health advisories.
- Who to call in an emergency, at home and at the destination.
`
},
{
title: 'The traveller profile and the booking workflow',
minutes: 8,
body: `
## The traveller profile
Keep one secure document with everything needed to book a trip without asking the director each time.

:::template Traveller profile
TRAVELLER PROFILE — [Name]
Name exactly as on passport (first / middle / last):
Date of birth:          Nationality:
Passport no:            Issued:           Expiry:
Visas held (country, type, number, expiry):
Mobile (as registered with airlines):
Email for bookings:
Frequent flyer numbers (airline: number):
Hotel loyalty numbers:
Seat preference (aisle / window / front rows):
Meal preference (veg / Jain / vegan / non-veg):
Special needs or assistance:
Preferred airlines / avoid:
Preferred hotels by city:
Preferred departure times:
Digi Yatra set up (yes / no):
Company GSTIN for invoices:
Emergency contact:
:::

:::warn Names must match the ID exactly
Airline and visa systems are strict. The name on the ticket must match the passport (or the government ID for domestic flights). “Vikram R. Shah” on the ticket and “Vikram Rajesh Shah” on the passport can cause problems at check-in or immigration. Changing a name after booking can be expensive or impossible.
:::

## The booking workflow
1. **Trip request** — from the director or their calendar: purpose, dates, places.
2. **Document check** — ID, passport validity, visa needed?
3. **Options** — prepare two or three options for flights and hotels.
4. **Approval** — get the director’s choice and the policy approval.
5. **Book** — flights or trains first (they change fastest), then hotel, then ground transport.
6. **Confirm** — check every confirmation against the plan: names, dates, times, terminals.
7. **Itinerary** — build the itinerary and travel pack.
8. **Pre-trip checks** — 48 hours and 24 hours before.
9. **During the trip** — monitor and support.
10. **After** — expenses, invoices, feedback.

## Presenting options
:::script Options the director can decide in 30 seconds
“Sir, for Delhi on the 12th, two options:
A) IndiGo 6E 2135, 7:15 am, lands 9:25 — you’d reach Gurgaon by 11 comfortably. ₹8,450.
B) Air India AI 805, 8:00 am, lands 10:10 — tighter, about 45 minutes margin. ₹9,200, includes a meal.
I recommend A. Hotel: the Grand Residency in Aerocity as usual, ₹9,500 per night with breakfast. Shall I book?”
:::

## Booking channels
| Channel | Best for |
|---|---|
| Airline website or app | Direct control, easy changes, loyalty benefits |
| Online travel agencies (OTAs) | Comparing options, combined hotel and flight bookings |
| Corporate travel agent / travel management company | Complex itineraries, visas, 24×7 support, consolidated invoicing |
| Corporate booking tool | Policy built in, approvals and reporting |

Whatever channel you use, enter the **company GSTIN** for GST invoices, and save every confirmation in the trip folder immediately.
`
}
  ],
  quiz: [
    { q: "What should you understand first, before searching for flights?", o: ["The cheapest fare", "The purpose of the trip and what must not fail", "The airline’s loyalty programme", "The hotel’s star rating"], a: 1, why: "Plan around the meetings and constraints, then book." },
    { q: "The passport says ‘Vikram Rajesh Shah’. How should the ticket name be entered?", o: ["Vikram Shah", "V. R. Shah", "Exactly as on the passport", "Any form is fine"], a: 2, why: "Names must match the ID exactly." },
    { q: "In what order should you book?", o: ["Hotel, cab, flight", "Flight or train first, then hotel, then ground transport", "Cab, hotel, flight", "Any order"], a: 1, why: "Flights change fastest and decide everything else." },
    { q: "What does ‘duty of care’ require the EA to know during a trip?", o: ["The director’s expense totals", "Where the director is, how to reach them and any risks at the destination", "The hotel’s menu", "The pilot’s name"], a: 1, why: "The company is responsible for the traveller’s safety." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Domestic air travel',
  summary: 'Choosing and booking the right flight, fare rules, PNRs, seats, baggage, check-in and the airport process in India.',
  lessons: [
{
title: 'Booking flights: fares and choosing the right flight',
minutes: 10,
body: `
## How to choose the right flight
The right flight is not always the cheapest. Work backwards from the first meeting.

**Example:** meeting at 11:00 am in Gurgaon. Travel from Delhi airport to Gurgaon: 45–75 minutes depending on traffic. Add 30 minutes for baggage and walking.
- Latest safe landing: about 9:00–9:15 am.
- So choose a flight landing by 9:15, preferably by 9:00.

## Rules of thumb
- Prefer **non-stop** flights. A connection doubles the risk of delays.
- For important morning meetings, consider **flying the evening before**.
- Avoid the **last flight** of the day for return; if it is cancelled, there is no backup.
- Check the **terminal** (Mumbai T1/T2, Delhi T1/T2/T3, Bengaluru T1/T2). Terminals affect transfer time and cab pickup.
- Check the **on-time record** of the flight if you can; early morning flights are usually more punctual.
- Leave **buffer between flights and meetings**: at least 2 hours after landing for a meeting in the city.

## Fare types
Airlines sell the same seat at different fare types. The cheapest fares have the strictest rules.
| Fare type | Change and cancellation | Best for |
|---|---|---|
| Saver / lowest fare | High fees; sometimes non-refundable | Fixed plans that won’t change |
| Flexi / flexible | Low or no change fee; better refund | Plans likely to change |
| Corporate fare | Usually free or low-cost changes, meals, seats | Frequent business travellers with company tie-ups |
| Business class | Flexible, lounge, priority, extra baggage | Senior leaders, long sectors, as per policy |

:::tip For directors, flexibility is often worth more than savings
A director’s plans change often. A flexible or corporate fare that costs ₹1,500 more can save a ₹6,000 change fee and a lot of stress.
:::

## Read the fare rules before you pay
Check: change fee, cancellation fee, refund rules, no-show rules, baggage allowance, seat and meal inclusions. Take a screenshot or save the fare rules in the trip folder.

## During booking
1. Enter the name **exactly** as on the ID.
2. Enter the director’s mobile and an email you monitor (so you get delay alerts).
3. Add the frequent flyer number.
4. Choose seat and meal, if included.
5. Enter the **company GSTIN** and company name for the GST invoice.
6. Pay with the right card (corporate card if policy requires).
7. Save the e-ticket and the GST invoice in the trip folder.

## The PNR and e-ticket
- **PNR** (booking reference): a six-character code like **K7PQ2M**. It identifies the booking.
- **E-ticket number**: a 13-digit number issued against the PNR.
- Keep both in the itinerary. You need the PNR for check-in, changes and status.
`
},
{
title: 'Seats, baggage, check-in and the airport process',
minutes: 10,
body: `
## Seats
- **Aisle**: easier to get up; preferred by many business travellers.
- **Window**: for sleeping and fewer disturbances.
- **Front rows**: get off the plane first — useful when timings are tight.
- **Emergency exit rows**: more legroom, but the passenger must be able and willing to help in an emergency; some passengers are not allowed there.
- Select seats at booking, or at web check-in at the latest.

## Baggage
Allowances depend on the airline, route and fare type. On many Indian domestic economy fares, the typical allowance is **one cabin bag of about 7 kg** and **about 15 kg check-in baggage**; business class allows more. **Always check the fare details** — some cheapest fares have reduced or no check-in baggage.
- Excess baggage is much cheaper when **pre-booked online** than paid at the airport.
- Power banks and spare lithium batteries must be in **cabin baggage**, never checked in.
- Liquids in cabin baggage are restricted on international flights.

## Web check-in
- Usually opens **24 to 48 hours** before departure, depending on the airline.
- Do it as soon as it opens: you get better seat choice and a boarding pass on the phone.
- Send the boarding pass to the director on WhatsApp and email, and save a copy in the trip folder.

## Digi Yatra
Digi Yatra lets passengers enter the airport and the boarding gate using face recognition at participating Indian airports. Set it up once on the director’s phone (Aadhaar-based), then link each boarding pass. It saves queue time at entry and security.

## Airport timings (domestic)
| Milestone | Typical time before departure |
|---|---|
| Recommended arrival | 2 hours (more at peak times and busy airports) |
| Bag drop / check-in counter closes | 45–60 minutes (varies by airline) |
| Boarding gate closes | 20–25 minutes |

:::warn Peak-time warning
Mumbai and Delhi airports can have long security queues in the early morning and during holidays. For a 6 am flight, plan to arrive 2–2.5 hours early, and plan the cab accordingly.
:::

## The day-of-travel check (send to the director)
:::template Day-of-travel message
Good morning, Sir. Today’s travel:
✈ 6E 2135 BOM T2 → DEL T1, dep 7:15, arr 9:25 — on time
Seat 3C, web check-in done, boarding pass attached
Cab: 5:00 am from home, Ramesh, 98XXXXXXXX, MH02 AB 1234
Delhi pickup: Sanjay, 99XXXXXXXX, waiting at Gate 4 with name board
Meeting: 11:00, Horizon Retail, DLF Cyber City — 50 min from airport
Weather Delhi: 12°C, foggy morning
:::

## Track the flight
On the day, check the flight status on the airline app or a flight-tracking site. If there is a delay, inform the director, the pickup driver and the meeting host — in that order.
`
}
  ],
  quiz: [
    { q: "The meeting is at 11 am in Gurgaon. Which flight landing time is safest?", o: ["10:30 am", "10:00 am", "About 9:00 am", "Any morning flight"], a: 2, why: "Allow for baggage, walking and 45–75 minutes of traffic." },
    { q: "Why avoid the last flight of the day for an important return?", o: ["It is always expensive", "If it is cancelled, there is no backup flight", "It has no meals", "It is always delayed"], a: 1, why: "Always leave a backup option." },
    { q: "What is a PNR?", o: ["The seat number", "A six-character booking reference", "The airline’s phone number", "The GST number"], a: 1, why: "The PNR identifies the booking for check-in and changes." },
    { q: "Where must power banks go?", o: ["Check-in baggage", "Cabin baggage", "Either", "They are not allowed"], a: 1, why: "Lithium batteries must be carried in the cabin." },
    { q: "When should web check-in be done?", o: ["At the airport", "As soon as it opens", "After boarding", "It is optional for business class"], a: 1, why: "Best seats and a ready boarding pass." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'International travel',
  summary: 'Routing, layovers and time zones; passports and visas; forex, insurance and international essentials.',
  lessons: [
{
title: 'Planning international trips: routes, layovers and time zones',
minutes: 10,
body: `
## Non-stop or connecting?
Non-stop flights are always preferable for a director: less time, less risk, less fatigue. When a connection is needed, choose it carefully.

## Layovers and connections
| Connection type | Comfortable minimum |
|---|---|
| Same airline, same terminal, on one ticket | 1.5–2 hours |
| Change of terminal at a large hub | 2.5–3 hours |
| Separate tickets (you must collect and re-check bags) | 4 hours or more |
| Arriving in India and connecting to a domestic flight | 3 hours or more (immigration, customs, baggage, transfer) |

:::warn One ticket or two?
Book connections on **one ticket (one PNR)** whenever possible. If the first flight is late, the airline is responsible for rebooking you. With separate tickets, a missed connection is your problem and the second ticket may be lost.
:::

## Transit visas
Some countries require a **transit visa** even if the traveller never leaves the airport. Always check the transit rules of every country on the route, not just the destination.

## Alliances and codeshares
- Airlines group into alliances (Star Alliance, oneworld, SkyTeam). Flights within an alliance make connections and baggage transfer easier, and loyalty points can be earned across partners.
- A **codeshare** is a flight sold by one airline but operated by another. Check-in happens with the **operating** airline — note “operated by” in the itinerary.

## Time zones
India Standard Time (IST) is **UTC+5:30**. Know the common differences:
| Place | Difference from IST |
|---|---|
| Dubai | 1.5 hours behind |
| Singapore, Hong Kong | 2.5 hours ahead |
| Bangkok | 1.5 hours ahead |
| London | 5.5 hours behind in winter, 4.5 in summer |
| Central Europe | 4.5 hours behind in winter, 3.5 in summer |
| New York | 10.5 hours behind in winter, 9.5 in summer |

Flight times are always in **local time** at each airport. A flight leaving Mumbai at 2:00 am and arriving in London at 7:30 am has flown about 10 hours, not 5.5.

## Plan for jet lag
- For long eastward or westward trips, avoid scheduling critical meetings in the first few hours after landing.
- Prefer flights that arrive in the afternoon or evening, so the director can rest before the next day.
- Night flights in business class let the director sleep on board.

## International airport timings
| Milestone | Typical time before departure |
|---|---|
| Recommended arrival | 3 hours |
| Check-in counter closes | About 60–75 minutes (varies by airline) |
| Boarding gate closes | 30–45 minutes |

Immigration and security queues at Indian international terminals can be long, especially late at night when many international flights leave.
`
},
{
title: 'Passports and visas',
minutes: 11,
body: `
## Passport rules
- Most countries require the passport to be valid for **at least 6 months beyond the return date**.
- It needs **blank pages**, usually at least two, for visas and stamps.
- The passport must be in good condition; damaged passports can be refused.
- Keep a scan of the passport’s front and back pages, and of every visa, in a secure folder.

Renewal in India is done through the Passport Seva portal and can take several weeks; urgent processing costs more. Track the expiry in your annual calendar at least **9 months** ahead.

## Types of visa
| Type | How it works |
|---|---|
| Visa-free | No visa needed for short visits (check the allowed number of days) |
| Visa on arrival | Issued at the destination airport; check conditions and fees |
| E-visa | Applied for online, approved by email; print a copy |
| Sticker visa | Applied for through an embassy or visa centre; passport is submitted |

Rules for Indian passport holders change often. **Always check the official embassy or consulate website**, or the authorised visa application centre, before every trip — never rely on what was true last year.

## A typical business visa checklist
- [ ] Passport (valid 6+ months, blank pages) and old passports if requested
- [ ] Completed application form
- [ ] Photographs in the exact size and background specified
- [ ] Cover letter from the company: purpose, dates, who pays
- [ ] Invitation letter from the host company abroad
- [ ] Flight reservation and hotel booking
- [ ] Bank statements (often last 3–6 months)
- [ ] Income tax returns (often last 2–3 years)
- [ ] Company registration documents, if asked
- [ ] Travel insurance (mandatory for Schengen, with minimum medical cover of €30,000)
- [ ] Visa fee payment
- [ ] Biometrics appointment, if required

:::template Company cover letter for a business visa
[Company letterhead]
Date:

To,
The Visa Officer
[Embassy / Consulate of ____]

Subject: Business visa application — Mr. Vikram Rajesh Shah, Passport No. ______

Dear Sir / Madam,

We request you to grant a business visa to Mr. Vikram Rajesh Shah, Managing Director of [Company], to travel to [City, Country] from [date] to [date] to attend [purpose — e.g. meetings with ABC Ltd. / the XYZ trade fair].

All expenses for this trip, including travel, accommodation and insurance, will be borne by [Company]. Mr. Shah will return to India on [date] to resume his duties.

Please find enclosed the invitation letter from [host], the travel itinerary and other supporting documents.

Yours faithfully,
[Name, Designation, Signature, Company seal]
:::

## Timelines
| Visa | Start the process |
|---|---|
| E-visa or visa on arrival | 2–3 weeks before |
| Most sticker visas | 6–8 weeks before |
| Countries with long appointment waits (for example the USA) | Many months before — check current wait times |

Many countries let you apply only within a certain window before travel (for example, Schengen applications up to 6 months ahead). Plan the trip and the visa together.

:::tip Keep a visa register
For each country: visa type, number, issue and expiry date, number of entries allowed, days of stay allowed. Check it before every international trip.
:::
`
},
{
title: 'Forex, insurance and international essentials',
minutes: 9,
body: `
## Foreign exchange
- Use a **forex card** (prepaid, loaded with foreign currency) for most spending — safer than cash and with locked-in exchange rates.
- Carry some **cash** in local currency for taxis, tips and small purchases.
- The director’s **international credit card** works as a backup; check foreign transaction fees.
- Buy forex from banks or authorised money changers with proper receipts.

## Key Indian rules to know
- Under the **Liberalised Remittance Scheme (LRS)**, a resident individual can remit up to **USD 250,000 per financial year** for permitted purposes, including travel.
- Foreign currency **notes** taken out of India are limited per trip (generally up to **USD 3,000** in cash; the rest on forex cards). Indian rupee notes that can be carried out are also limited.
- **Tax collected at source (TCS)** may apply to forex purchases beyond certain limits. Rules change with the annual Budget — ask finance before buying large amounts.

Always confirm current limits with the bank or forex provider at the time of purchase.

## Travel insurance
- Mandatory under most company policies for international travel, and for some visas (for example Schengen).
- Check: medical cover amount, trip cancellation, baggage loss and delay, passport loss, personal liability.
- Keep the policy number and the 24×7 assistance number in the itinerary and on the director’s phone.

## International essentials
| Item | Why |
|---|---|
| Power adapter | Plugs differ: UK uses Type G, most of Europe Type C/F, USA Type A/B |
| International roaming or local SIM / eSIM | Activate before departure and test |
| Offline maps and the hotel address in the local language | Taxi drivers may not read English |
| Medicines with prescriptions | Some medicines need prescriptions at customs |
| Printed copies of key documents | For when phones fail |
| Business cards | Many cultures still exchange them |
| Gifts for hosts | Check customs rules and cultural norms |

## Cultural and business etiquette
Research the destination briefly and add a few lines to the travel pack: greeting customs, dress code, business hours, weekend days (some Middle-East countries have Friday–Saturday or Saturday–Sunday weekends), tipping norms, and public holidays during the trip.

:::warn Check public holidays
Arriving for meetings during a national holiday (such as Eid in the Gulf, Golden Week in China, or Thanksgiving in the USA) can mean closed offices, packed hotels and expensive fares.
:::
`
}
  ],
  quiz: [
    { q: "How long should a passport usually be valid beyond the return date?", o: ["1 month", "3 months", "6 months", "No requirement"], a: 2, why: "Most countries require at least 6 months’ validity." },
    { q: "Why book connecting flights on one ticket?", o: ["It’s always cheaper", "If the first flight is late, the airline must rebook you", "You get more baggage", "There is no reason"], a: 1, why: "With separate tickets, a missed connection is your problem." },
    { q: "What is the time difference between India and Dubai?", o: ["Dubai is 1.5 hours behind", "Dubai is 2.5 hours ahead", "Same time", "Dubai is 4 hours behind"], a: 0, why: "IST is UTC+5:30; Dubai is UTC+4." },
    { q: "Which visa needs travel insurance with at least €30,000 medical cover?", o: ["UAE e-visa", "Schengen visa", "Singapore visa", "Any visa"], a: 1, why: "Schengen rules require it." },
    { q: "What does a codeshare flight mean?", o: ["Two airlines share the fare", "A flight sold by one airline but operated by another", "A charter flight", "A shared seat"], a: 1, why: "Check in with the operating airline." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Rail, road and ground transport',
  summary: 'Booking trains on IRCTC, understanding classes and quotas, and organising cabs and transfers that never fail.',
  lessons: [
{
title: 'Train bookings with IRCTC',
minutes: 10,
body: `
## When the train is the better choice
For routes like Mumbai–Pune, Mumbai–Ahmedabad, Delhi–Jaipur or Delhi–Chandigarh, premium trains can be faster door-to-door than flying, once airport time is included. Overnight trains save a hotel night and a working day.

## Classes of travel
| Code | Class | Typical use |
|---|---|---|
| 1A | AC First Class (cabins with doors) | Senior leaders on overnight journeys |
| 2A | AC 2-tier | Comfortable overnight travel |
| 3A | AC 3-tier | Budget overnight travel |
| 3E | AC 3-tier economy | Budget |
| EC | Executive Chair Car (Vande Bharat, Shatabdi) | Day journeys for senior staff |
| CC | AC Chair Car | Day journeys |
| SL | Sleeper (non-AC) | Not usually for business travel |

## Booking on IRCTC
- Book on the official IRCTC website or app (or through an authorised agent).
- The **advance reservation period** is currently **60 days** before the journey (excluding the journey date). Popular trains fill up the day booking opens.
- Keep a verified IRCTC account with the traveller’s details saved in the **master list**.
- Enter the name and age exactly as on the ID the traveller will carry.

## Booking status
| Status | Meaning |
|---|---|
| CNF | Confirmed berth or seat |
| RAC | Reservation Against Cancellation — the traveller can board and shares a berth until one is free |
| WL | Waitlisted — not confirmed |

:::warn Waitlisted e-tickets
A fully waitlisted e-ticket that is still waitlisted when the chart is prepared is cancelled automatically and the passenger **cannot travel** on it. Never rely on a waitlisted ticket for a director; book an alternative.
:::

## Tatkal
- **Tatkal** quota opens **one day before** the journey: **10:00 am for AC classes** and **11:00 am for non-AC classes**.
- Tatkal bookings now need an **Aadhaar-verified IRCTC account**. Set this up well in advance.
- Tatkal fares are higher and refunds are very limited.
- **Premium Tatkal** (on some trains) uses dynamic pricing.
- Be logged in, with passenger details saved, a few minutes before the window opens. Seats go in minutes.

Railway rules change from time to time — check IRCTC for current rules before booking.

## PNR status and chart
- The railway PNR is a **10-digit number**. Check status on IRCTC or the railway enquiry service.
- The **reservation chart** is prepared some hours before departure; final berth numbers and coach details are confirmed then.
- Send the director the coach and berth number, the train’s departure platform once announced, and the expected arrival time.

## Stations matter
Many cities have several stations (Mumbai CSMT, Mumbai Central, Bandra Terminus, Dadar, LTT; Delhi NDLS, Hazrat Nizamuddin, Anand Vihar). Always confirm the **exact station** and plan the cab to the right one.
`
},
{
title: 'Cabs, transfers and ground logistics',
minutes: 8,
body: `
## Ground transport is where trips most often go wrong
A perfect flight is wasted if the cab doesn’t arrive. Treat every pickup as a mini-project.

## Options
| Option | Best for |
|---|---|
| Company car and driver | Home city, regular use |
| Corporate cab account (app-based) | Convenient city travel with central billing |
| Pre-booked car with driver from a travel agent or hotel | Airport pickups, full-day local use, outstation travel |
| Hotel transfer | International arrivals, late-night arrivals |
| Self-drive rental | Rarely for directors; only on request |

## The perfect airport pickup
Share these details **both ways**:
- **With the driver:** director’s name, flight number, terminal, arrival time, your mobile, the director’s mobile (if they allow it), destination address.
- **With the director:** driver’s name, mobile, car model, colour and number, exact meeting point (gate or pillar number), name-board.

:::template Pickup confirmation to the driver
Pickup: Mr. Vikram Shah
Flight: 6E 2135 from Mumbai, arriving Delhi T1 at 9:25 am
Meeting point: Arrival Gate 4, with name board “Vikram Shah — YourCompany”
Drop: Horizon Retail, Tower B, DLF Cyber City, Gurgaon
Contact: Neha (EA) 98XXXXXXXX
Please track the flight and be at the gate 15 minutes before landing.
:::

## Timing the cab to the airport
Add up: travel time with traffic + 2 hours (domestic) or 3 hours (international) + a buffer of 15–30 minutes. Check live traffic on maps the evening before. In monsoon season, add more.

## Full-day and outstation cars
- Agree the package (hours and kilometres), extra-hour and extra-km rates, night charges, tolls, parking and state permits in writing.
- Confirm the vehicle (sedan or SUV), its condition, and that the driver knows the route.
- Share the day’s schedule with the driver.

## Safety
- Use reputable operators; get the driver’s name, number and car number in advance.
- For late-night arrivals, prefer hotel transfers or known drivers.
- Ask the director to share their live location if they are comfortable doing so.
- Keep a backup operator’s number for every city.

:::tip The 15-minute check
Fifteen minutes before any important pickup, call the driver to confirm he has reached. If he hasn’t, you still have time to arrange a backup.
:::
`
}
  ],
  quiz: [
    { q: "What does ‘RAC’ mean on a railway ticket?", o: ["Confirmed", "Reservation Against Cancellation — can board, sharing a berth", "Waitlisted and cannot board", "Cancelled"], a: 1, why: "RAC passengers can board and share a berth until one becomes free." },
    { q: "When does Tatkal booking open for AC classes?", o: ["60 days before at 8 am", "One day before at 10:00 am", "On the journey day", "One week before"], a: 1, why: "AC Tatkal opens at 10:00 am one day before; non-AC at 11:00 am." },
    { q: "Can a director travel on a fully waitlisted e-ticket after the chart is prepared?", o: ["Yes, in any coach", "No — it is cancelled automatically", "Yes, with a TTE’s permission", "Only in AC classes"], a: 1, why: "Never rely on a waitlisted ticket; book an alternative." },
    { q: "When should you call the driver before an important pickup?", o: ["After the director lands", "About 15 minutes before, to confirm he has reached", "The day before only", "Never — he has the details"], a: 1, why: "It leaves time to arrange a backup." }
  ]
}
]);
