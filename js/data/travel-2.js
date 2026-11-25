/* Course 3 — Travel Management (modules 5–7) */
ACADEMY.addModules('travel', [
/* ---------------------------------------------------------------- */
{
  title: 'Hotels and accommodation',
  summary: 'Choosing the right hotel, understanding rates and policies, and getting invoices right.',
  lessons: [
{
title: 'Choosing and booking the right hotel',
minutes: 9,
body: `
## Location first
The best hotel is the one closest to where the director needs to be, with an easy route to the airport. A five-star hotel an hour away from the meetings is a poor choice.

Check on the map:
- Distance and drive time to each meeting venue, at the actual meeting times.
- Distance to the airport or station for the departure day.
- What is nearby: restaurants, a pharmacy, a safe area to walk.

## What to check before booking
| Check | Why |
|---|---|
| Recent reviews (last 3–6 months) | Quality changes; old reviews mislead |
| Wi-Fi quality | The director will work from the room |
| Business facilities | Meeting rooms, printing, a business centre |
| Gym, pool, spa | If the director uses them |
| Vegetarian or Jain food options | Especially abroad |
| Airport transfers | Convenience and safety |
| Check-in and check-out times | Match to flight times |
| Cancellation policy | Flexibility if plans change |

## Room types
- **Standard / superior / deluxe**: increasing size and view.
- **Club or executive room**: access to a club lounge with breakfast, evening snacks, a quiet place for meetings, and often faster check-in. Excellent value for directors.
- **Suite**: separate living area — useful if the director will hold meetings in the room.
- Request: high floor, quiet room away from the lift, non-smoking, bed type.

## Meal plans (common terms in India)
| Code | Meaning |
|---|---|
| EP | Room only |
| CP | Room with breakfast |
| MAP | Breakfast plus one main meal |
| AP | All meals |

## Booking
1. Book directly with the hotel, through the corporate agent, or using the company’s corporate rate code.
2. Name exactly as on the ID; enter the director’s mobile.
3. Add the loyalty programme number.
4. Choose a **flexible / free-cancellation** rate unless the plan is certain.
5. **Guarantee the booking with a card** for late arrivals, so the room is not released.
6. Add special requests: early check-in, late check-out, airport pickup, room preferences.
7. Provide the **company name and GSTIN** for the invoice (India).
8. Save the confirmation number in the itinerary.

## Early check-in and late check-out
Standard check-in is usually around 2–3 pm and check-out around 11 am–12 noon. If the director lands at 7 am, request early check-in in advance; if it is essential, book the room from the **previous night** so it is guaranteed.

:::tip Reconfirm 48 hours before
Call or email the hotel two days before arrival to reconfirm the booking, arrival time, special requests and payment arrangements. Many problems — wrong dates, lost requests — are caught this way.
:::
`
},
{
title: 'Rates, policies and invoices',
minutes: 8,
body: `
## Understanding rates
| Rate type | What it means |
|---|---|
| Best available / flexible rate | Can be cancelled free until a deadline (often 24–48 hours before) |
| Advance purchase / non-refundable | Cheaper; paid upfront; no refund |
| Corporate rate | Negotiated by the company; usually flexible with benefits |
| Package rate | Includes breakfast, transfers or other extras |

Check whether the quoted rate **includes taxes** and breakfast. In India, GST is added to the room rate and depends on the tariff.

## Cancellation and no-show
- Note the **cancellation deadline** in the itinerary and your calendar.
- If plans change, cancel before the deadline and get a **cancellation number** in writing.
- A **no-show** (not arriving without cancelling) usually costs at least one night.

## Payment arrangements
| Method | How it works |
|---|---|
| Director pays at the hotel | Simple, but the director must remember the GST invoice |
| Bill to company | The hotel bills the company; needs a credit arrangement or authorisation letter |
| Card authorisation form | The company card is charged remotely; the hotel needs a signed form and a copy of the card (front) |
| Prepaid through the agent | The agent issues a voucher; check what is included (room only, or meals too) |

Tell the hotel clearly what the company pays (room and breakfast? laundry? minibar?) and what the director pays personally.

## Getting the invoice right
- The invoice should show the **company name, address and GSTIN** so the company can claim GST where eligible.
- Ask the hotel to email the invoice to you at check-out.
- Check the invoice: dates, room rate, taxes, and any extra charges.
- For international hotels, a detailed folio (itemised bill) is needed for expense claims.

:::warn Check the bill before the director leaves
Ask the director (or the front desk, by phone) to review the bill at check-out. Correcting a wrong charge after departure is slow and sometimes impossible.
:::
`
}
  ],
  quiz: [
    { q: "What matters most when choosing a hotel for a business trip?", o: ["Star rating", "Location relative to the meetings and the airport", "The lobby design", "The cheapest rate"], a: 1, why: "Location saves time and stress." },
    { q: "What does ‘CP’ mean in a hotel booking in India?", o: ["Room only", "Room with breakfast", "All meals included", "Corporate price"], a: 1, why: "EP room only, CP with breakfast, MAP + one meal, AP all meals." },
    { q: "The director lands at 7 am and needs to rest before a 10 am meeting. What guarantees the room?", o: ["Request early check-in", "Book the room from the previous night", "Arrive early and wait", "Pay extra at the desk"], a: 1, why: "Early check-in is only a request unless the previous night is booked." },
    { q: "Why must the hotel invoice show the company’s GSTIN?", o: ["It is decorative", "So the company can claim GST where eligible", "To get a discount", "To speed up check-in"], a: 1, why: "Without the GSTIN on the invoice, the GST cannot be claimed." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Itineraries and travel packs',
  summary: 'Build a professional itinerary and a complete travel pack, and run the pre-trip countdown.',
  lessons: [
{
title: 'Building a professional itinerary',
minutes: 9,
body: `
## The itinerary is the trip on one page
The director should be able to travel with only the itinerary and their phone. Everything they need — and everything you would be asked by phone — is in it.

## Principles
- **Chronological**, day by day, hour by hour.
- **Local times**, with the time zone shown for international trips.
- **Every confirmation number** in one place.
- **Every contact** with a phone number.
- **One page per day** for long trips; one page total for a day trip.
- Send as **PDF and as text** (WhatsApp), and keep a printed copy for the director if they like paper.

## The itinerary template
:::template Travel itinerary
TRAVEL ITINERARY — Vikram Shah
Mumbai → Delhi → Mumbai | Thu 12 – Fri 13 December
Emergency: Neha (EA) +91 98XXX XXXXX

THURSDAY, 12 DECEMBER
05:00  Cab from home — Ramesh, 98XXXXXXXX, Innova MH02 AB 1234
07:15  Flight 6E 2135, Mumbai T2 → Delhi T1, arrive 09:25
       PNR K7PQ2M | Seat 3C | Check-in done, boarding pass attached
       Baggage: 7 kg cabin, 15 kg check-in
09:25  Pickup — Sanjay, 99XXXXXXXX, Gate 4, name board
11:00  Meeting — Horizon Retail, Rajesh Mehta
       Tower B, 8th floor, DLF Cyber City, Gurgaon
       Contact on site: Pooja (EA) 98XXXXXXXX
       Documents: blue folder / email “Horizon pack”
13:00  Lunch with Rajesh — Indian Accent (booked, table for 3, veg)
15:00  Free — car on standby
17:30  Check in — Grand Residency, Aerocity
       Conf. no. GR-558213 | Club room, high floor, CP
       Company billing; incidentals personal
20:00  Dinner — in-room or hotel restaurant

FRIDAY, 13 DECEMBER
09:30  Factory visit — Manesar unit (75 min drive)
       Contact: Plant head Arvind, 97XXXXXXXX
13:00  Depart for airport
16:10  Flight AI 2918, Delhi T3 → Mumbai T2, arrive 18:20
       PNR M3XR8T | Seat 2A | Web check-in opens 24 h before
18:30  Cab — Ramesh, waiting at Arrival Gate 2

IMPORTANT
Weather Delhi: 8–20°C, fog possible in the morning
Hotel cancellation deadline: 11 Dec, 6 pm
Travel insurance: not required (domestic)
:::

## Include the details people forget
- Terminal numbers for every flight.
- Baggage allowance (especially if different per flight).
- The hotel’s cancellation deadline.
- What is paid by the company and what is personal.
- Meeting contacts at the venue (reception, EA), not just the person being met.
- Dress code if it is unusual (factory visit: closed shoes; a formal dinner).
- Weather.

## Update and re-send
When anything changes, update the itinerary, mark the version (“v2 — return flight changed”), and re-send it. Never let the director travel on an old version.

@scenario travel Practise building a trip in the travel desk missions
`
},
{
title: 'The pre-trip countdown and the travel pack',
minutes: 8,
body: `
## The countdown
| When | What to do |
|---|---|
| T–30 days (international) | Check passport validity and visa; start the visa process; book flights and hotel |
| T–14 days | Domestic flights and hotel booked; meetings confirmed; cars booked |
| T–7 days | Itinerary v1 to the director; insurance and forex arranged (international); restaurant bookings |
| T–2 days | Reconfirm hotel, cars and meetings; check weather and local news; web check-in when open |
| T–1 day | Final itinerary; boarding passes sent; documents and travel pack ready; cab timing confirmed with traffic |
| Day of travel | Track the flight; morning message to the director; confirm the driver 15 minutes before pickup |
| During the trip | Stay reachable; monitor flights and changes; handle problems |
| Return day | Track the return flight; arrange the home pickup |

## The travel pack
Put everything in one place: a folder in the director’s bag and a shared folder or WhatsApp message on their phone.

**Documents**
- [ ] Itinerary (PDF and printed if preferred)
- [ ] E-tickets and boarding passes
- [ ] Hotel confirmations
- [ ] Government ID; passport and visa copies (international)
- [ ] Travel insurance certificate (international)
- [ ] Invitation letters, if relevant at immigration

**Meeting material**
- [ ] Presentation on the laptop, on a USB drive and in the cloud
- [ ] Printed meeting packs
- [ ] Business cards (plenty)
- [ ] Gifts for hosts, if any

**Money**
- [ ] Forex card and some local cash (international)
- [ ] Corporate card
- [ ] Emergency contact for the card company

**Technology**
- [ ] Chargers, power bank (in cabin bag), adapters
- [ ] Roaming or eSIM activated and tested
- [ ] Offline maps and hotel address in the local language

**Personal**
- [ ] Regular medicines, with prescriptions for international travel
- [ ] Weather-appropriate clothing

## Hand-over before the director leaves
Spend five minutes walking the director through the itinerary: the timings that are tight, who meets them where, and anything unusual. Then confirm that the travel pack is in their bag and on their phone.
`
}
  ],
  quiz: [
    { q: "Which times should an international itinerary show?", o: ["Indian time only", "Local times with the time zone shown", "GMT only", "Times are not needed"], a: 1, why: "Flight and meeting times are always local; label the zone." },
    { q: "When should the hotel, cars and meetings be reconfirmed?", o: ["On the day of travel", "About two days before", "A month before", "After arrival"], a: 1, why: "T–2 reconfirmations catch problems while there is time to fix them." },
    { q: "Where should the presentation for an important overseas meeting be kept?", o: ["Only on the laptop", "Only in email", "On the laptop, a USB drive and in the cloud", "Printed only"], a: 2, why: "Always keep backups in different places." },
    { q: "The return flight changes after you sent the itinerary. What do you do?", o: ["Tell the director verbally only", "Update the itinerary, mark it v2 and re-send it", "Wait until the director asks", "Send only the new ticket"], a: 1, why: "Never let the director travel on an old version." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Disruptions, emergencies and after the trip',
  summary: 'Rebook when flights fail, handle lost baggage, lost passports and medical emergencies, and close the trip properly.',
  lessons: [
{
title: 'Delays, cancellations and rebooking',
minutes: 10,
body: `
## When a flight is delayed or cancelled, speed wins
When a flight is cancelled, hundreds of passengers try to rebook at the same time. The EA who acts first gets the last good seats.

## The rebooking playbook
1. **Confirm** the cancellation or delay with the airline (app, website or call), and the reason if known.
2. **Find alternatives at once**: the same airline’s next flights, other airlines, and nearby airports. Check trains for short routes.
3. **Hold or book the best alternative.** If the original ticket is refundable or the airline must rebook, ask the airline first — but if seats are disappearing, book a backup on another airline and sort out the refund later.
4. **Inform the director with the new plan**, not just the problem.
5. **Update everyone**: drivers at both ends, the hotel (late arrival), the meeting host (a new time or a video call).
6. **Update the itinerary** and re-send.

:::script Telling the director — problem plus plan
“Sir, the 7:15 Delhi flight is cancelled because of fog. I’ve booked you on Air India at 8:00, landing 10:10 — seat 2C, web check-in done. Your cab is still at 5:00. I’ve told Rajesh’s office you may be 15 minutes late, and kept a video link ready just in case. The IndiGo refund is requested.”
:::

## Passenger rights in India
India’s aviation regulator (DGCA) sets out passenger rights for cancellations, long delays and denied boarding. Depending on the case and the notice given, airlines must offer an **alternative flight or a refund**, and may have to provide **meals, hotel accommodation or compensation**. Read the current DGCA Passenger Charter and the airline’s conditions of carriage when claiming.

## Prevention
- Prefer earlier flights for important meetings; later flights are backups.
- Avoid tight connections.
- In fog season (December–January in north India) and the monsoon (June–September in Mumbai), plan larger buffers or fly the night before.
- Keep a list of alternative flights for every trip before the director travels.
- Keep the airline’s and the travel agent’s 24×7 numbers in your phone.

## When the meeting can’t be saved
If no alternative arrives on time, offer the host options at once: join by video, move the meeting to later the same day, or reschedule. Let the director choose, and inform the host quickly.

@scenario travel Practise rescuing a cancelled flight
`
},
{
title: 'Lost baggage, lost passport and medical emergencies',
minutes: 10,
body: `
## Lost or delayed baggage
1. Report it **at the airport, before leaving the baggage hall**, at the airline’s baggage service counter.
2. Get a **Property Irregularity Report (PIR)** with a reference number. Keep the baggage tag (stuck on the boarding pass or ticket).
3. Give the delivery address (hotel) and a contact number.
4. Track the case online or by phone daily.
5. Buy essentials and keep the receipts — many airlines and travel insurance policies reimburse reasonable purchases.
6. For international flights, written complaints have strict time limits under international rules (for example, within **7 days** for damaged baggage and **21 days** for delayed baggage). Claim promptly.

:::tip Pack for the worst case
Ask the director to keep one change of clothes, medicines, chargers and the meeting material in the cabin bag. Then a delayed bag is an inconvenience, not a disaster.
:::

## Lost or stolen passport abroad
1. Report the loss to the **local police** and get a copy of the police report.
2. Contact the nearest **Indian embassy or consulate**. They can issue an **Emergency Certificate** for returning to India, or a new passport (which takes longer).
3. Provide copies of the lost passport and visa — this is why you keep scans in a secure folder.
4. Rebook flights once the travel document date is known.
5. Inform the travel insurer if the policy covers passport loss.

## Lost cards and phone
- Block cards immediately using the bank’s 24×7 number. Keep these numbers in the itinerary, not only on the phone.
- For a lost phone, block the SIM, use device-finding services, and tell the company’s IT team so they can secure email access.

## Medical emergencies
- Keep the travel insurance policy number and 24×7 assistance number with the director **and** with you.
- For international trips, the insurer’s assistance service can direct the traveller to approved hospitals and arrange cashless treatment.
- Know the destination’s emergency number (for example 112 in India and Europe, 911 in the USA, 999 in the UK and UAE for police).
- Inform the family as agreed in the director profile.
- Keep a timeline of events and all medical documents and bills for the claim.

## Your emergency sheet
:::template Emergency contacts for every trip
Traveller’s mobile:
EA (24×7):
Company HR / admin emergency line:
Airline 24×7:
Travel agent 24×7:
Hotel front desk:
Local host contact:
Travel insurance policy no. and assistance number:
Card blocking numbers:
Nearest Indian embassy / consulate (international):
Local emergency numbers:
Family emergency contact:
:::
`
},
{
title: 'After the trip: expenses, reconciliation and feedback',
minutes: 7,
body: `
## A trip isn’t finished when the director lands
The trip is closed when every bill is claimed, every refund received and every lesson recorded.

## Within two days of return
- [ ] Collect all receipts, invoices and boarding passes (some companies need them for claims).
- [ ] Check every invoice carries the company GSTIN where applicable.
- [ ] Prepare and submit the expense claim with categories and receipts.
- [ ] Reconcile the corporate card and forex card statements.
- [ ] Unload remaining forex or keep it for the next trip, as per policy.

## Refunds and credits
Track every refund (cancelled flights, unused hotel nights, changed tickets) in a list with the expected amount and date. Follow up until it is received. Airline credits or vouchers have expiry dates — note them.

## Thank-you notes and follow-ups
- Draft thank-you emails to the hosts for the director to approve or send.
- Add any commitments made during the trip to the follow-up tracker.
- Send new contacts’ details to Outlook contacts or the CRM.

## Feedback and learning
Ask the director two questions:
1. “What worked well on this trip?”
2. “What would you like done differently next time?”

Record the answers in the traveller profile: “Prefers the Aerocity hotel over Gurgaon for Delhi trips”, “Avoid the 6 am flight — too early”, “Liked the driver Sanjay — book him again”.

## Keep a trip log
| Trip | Dates | Purpose | Flights | Hotel | Cost | Notes |
|---|---|---|---|---|---|---|
| Delhi | 12–13 Dec | Horizon, Manesar | 6E 2135 / AI 2918 | Grand Residency | ₹42,800 | Fog delay on day 1 |

A trip log helps with budgeting, visa applications (travel history) and planning the next visit to the same city.
`
}
  ],
  quiz: [
    { q: "A flight is cancelled. What is the first thing you tell the director?", o: ["Only that it was cancelled", "The cancellation plus the new plan you have arranged", "That it is the airline’s fault", "Nothing until you have a refund"], a: 1, why: "Bring the problem with the solution." },
    { q: "Where must lost baggage be reported?", o: ["By email after reaching the hotel", "At the airport before leaving the baggage hall", "To the police", "To the travel agent only"], a: 1, why: "Get a Property Irregularity Report (PIR) at the airport." },
    { q: "The director loses their passport in Singapore. Who issues a document to return home?", o: ["The airline", "The Indian embassy or consulate (Emergency Certificate)", "The hotel", "The travel insurer"], a: 1, why: "File a police report, then contact the Indian mission." },
    { q: "Why record feedback after every trip?", o: ["For HR records", "To improve the next trip and update the traveller profile", "To complain to vendors", "It isn’t needed"], a: 1, why: "Every trip should make the next one better." }
  ]
}
]);
