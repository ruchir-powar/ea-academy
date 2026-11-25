/* Course 1 — The Executive Assistant (modules 1–4) */
ACADEMY.addCourse({
  id: 'ea',
  number: 1,
  title: 'The Executive Assistant',
  short: 'EA Essentials',
  tagline: 'Run a director’s office like a professional.',
  description: 'Everything an Executive Assistant does, decides and protects: the role, the director, the calendar, communication, meetings, documents, money matters and the hard situations nobody warns you about.',
  outcomes: [
    'Understand exactly what a director expects from an EA, and work one step ahead of them',
    'Build a director profile, stakeholder map and an information map that tells you where to find anything',
    'Run the calendar, meetings and minutes with zero dropped follow-ups',
    'Handle calls, visitors, confidential matters and difficult scenarios with calm judgment'
  ],
  practice: { label: 'Scenario practice', route: '#/practice/ea' },
  modules: []
});

ACADEMY.addModules('ea', [
/* ---------------------------------------------------------------- */
{
  title: 'The EA role and professional mindset',
  summary: 'What the job really is, the skills it needs, and the rules of conduct that make a director trust you.',
  lessons: [
{
title: 'What an Executive Assistant really does',
minutes: 9,
body: `
## The role in one sentence
An Executive Assistant multiplies the time, focus and reach of a senior leader. The director’s time is the most expensive resource in the company. Your job is to protect it, organise it and make every hour of it count.

A good EA does not wait for instructions. A good EA knows what the director will need before they ask, and has it ready.

## How the EA is different from other office roles
| Role | Focus | Typical work |
|---|---|---|
| Receptionist | The front desk | Calls, visitors, couriers |
| Office assistant | A team’s paperwork | Typing, filing, booking rooms |
| Personal Assistant (PA) | One person’s day | Diary, calls, travel, errands |
| Executive Assistant (EA) | One leader’s goals | Everything a PA does, plus priorities, projects, stakeholders, information and follow-through |
| Chief of Staff | The leader’s agenda | Strategy, cross-team projects, decision support |

## The six pillars of the job
1. **Time** — the calendar, scheduling and protecting focus time.
2. **Communication** — email, calls, letters, visitors and gatekeeping.
3. **Information** — files, reports and facts the director needs, ready before they ask.
4. **Meetings** — preparation, minutes and making sure decisions turn into action.
5. **Travel and logistics** — trips, client visits, events and hospitality.
6. **Relationships** — clients, colleagues, the board, vendors and sometimes the director’s family.

## A day in the life of a strong EA
| Time | What she is doing |
|---|---|
| 8:45 | Arrives before the director. Checks the director’s inbox, her own inbox and the next two days of calendar. Flags anything urgent. |
| 9:15 | Prepares the daily brief: meetings, documents to read, papers to sign, calls to return. |
| 9:30 | Ten-minute huddle with the director: priorities, decisions needed, changes. |
| 10:00–1:00 | Scheduling, drafting replies, preparing meeting packs, handling calls and visitors. |
| 1:00 | Lunch, timed so that the office is never left uncovered. |
| 2:00–5:00 | Meeting support and minutes, follow-ups, travel bookings, expenses. |
| 5:30 | Reviews what is done and pending, prepares tomorrow’s folder, updates the follow-up tracker. |
| 6:00 | Sends the director a short end-of-day note when something needs their attention. |

## Proactive versus reactive
:::example One question, two kinds of EA
The director asks: “What time is my flight tomorrow?”

The reactive EA checks her email and says: “7:15 am, Sir.”

The proactive EA says: “7:15 am from Terminal 2. Web check-in is done, seat 3C aisle, boarding pass is on your phone. The cab will pick you up at 5:00 am, driver Ramesh, number sent on WhatsApp. Your meeting is at 11:00 at the Gurgaon office, about 45 minutes from the airport. It is 12°C in Delhi, so please carry a jacket.”
:::

The rule: **answer the question asked, plus the next two questions they would have asked.**

## What success looks like
- The director never walks into a meeting unprepared.
- Nothing falls through the cracks. Every promise has an owner and a date.
- People who deal with the director’s office feel respected and well looked after.
- The director spends time only on work that only they can do.

:::tip Your first 30 days in a new EA role
Listen more than you change. Keep a notebook of every instruction and preference you hear. Read the last three months of the director’s calendar and sent emails to learn who matters. Ask for 15 minutes every Friday to ask, “What should I do differently next week?”
:::
`
},
{
title: 'Core competencies and the EA mindset',
minutes: 8,
body: `
## The ten competencies
| Competency | What it looks like on the job |
|---|---|
| Organisation | Every file, meeting and task has a place. You can find anything in under a minute. |
| Anticipation | You prepare for the next step before it is asked for. |
| Communication | Clear, short, polite emails and calls. People understand you the first time. |
| Discretion | You keep confidential matters confidential, without exception. |
| Judgment | You know what to decide yourself and what to take to the director. |
| Composure | You stay calm when plans fall apart, and others calm down around you. |
| Follow-through | You close every loop. “Done” means confirmed, not just sent. |
| Business understanding | You know the products, customers, numbers and people of the company. |
| Relationship building | Colleagues help you quickly because you treat them well. |
| Technology | You are fast in Outlook, Excel, Word, PowerPoint, Teams and PDF tools. |

## Seven principles of the EA mindset
1. **Think from the director’s chair.** Before you act, ask: “If I were the director, what would I need right now?”
2. **Own outcomes, not tasks.** Booking a flight is a task. Getting the director to the meeting on time, rested and prepared is the outcome.
3. **Close every loop.** When you finish something, tell the person who asked. When someone promises something, track it until it arrives.
4. **Bad news early is a favour.** A problem reported at 10 am can be fixed. The same problem reported at 6 pm is a crisis. Never let the director be surprised.
5. **Under-promise, over-deliver.** Give realistic deadlines and beat them.
6. **Be the calm one.** Panic spreads. So does calm.
7. **Write it down.** Memory fails under pressure. Notes do not.

:::tip Use the “so that” test
When you are unsure why a task matters, add “so that” to it. “Print the board deck so that the director can make notes on it in the car.” Now you know it should be printed single-sided, with page numbers, and handed over before he leaves.
:::

## The no-surprises rule
The director should hear important news from you first, not from a client, the chairman or a colleague. This includes:
- A meeting that has been cancelled or moved by the other side.
- A delayed flight or a changed hotel.
- A complaint from a key client or a senior colleague.
- A mistake you made.

## Self-assessment
Tick what you already do consistently. The unticked items are your learning plan for this course.
- [ ] I confirm the next day’s meetings before I leave the office.
- [ ] I can find any document from the last six months in under a minute.
- [ ] I tell the director about problems the same day I learn of them.
- [ ] Every email I send has a clear subject and a clear request.
- [ ] I track every action item until it is closed.
- [ ] I know the top 10 people the director deals with, and their assistants.
- [ ] I keep my own task list, and nothing lives only in my head.
`
},
{
title: 'Confidentiality, ethics and professional conduct',
minutes: 9,
body: `
## You will know more than almost anyone in the company
An EA sees salaries, board discussions, deals, disputes, health matters and family matters. The director gives you this access because they trust you. One leak can end that trust permanently.

## What counts as confidential
- Salaries, appraisals, promotions, resignations and disciplinary matters.
- Board and management discussions, plans, mergers, new projects and closures.
- Prices, margins, quotations and negotiations.
- Bank, tax and financial information.
- Legal cases and disputes.
- The director’s personal life: family, health, home address, travel plans and whereabouts.
- Passwords, OTPs and login details.

## Everyday confidentiality habits
- Lock your screen every time you stand up: [[Win+L]] on Windows, [[Ctrl+Cmd+Q]] on a Mac.
- Keep a clean desk. Confidential papers go in a locked drawer, never on the desk overnight.
- Collect printouts immediately. Use secure print where available.
- Shred confidential paper. Never put it in a dustbin.
- Do not discuss work in lifts, the canteen, cabs or on public transport.
- Share information on a need-to-know basis only.
- Never post the director’s location, travel or schedule on social media or WhatsApp status.
- Store sensitive files (passport scans, ID copies, director profile) in a password-protected location, not on the desktop.

## When someone fishes for information
Colleagues will ask, sometimes casually, sometimes with pressure. Stay friendly and firm.

:::script Polite, firm, and it closes the topic
“I’m not able to share that. If it’s important for your work, I can tell Sir that you’d like an update, and he can brief you directly.”
:::

:::script When a senior person asks
“Ma’am, I’d need Sir’s go-ahead to share anything from that meeting. Shall I check with him and come back to you today?”
:::

## Ethics
| Situation | The professional response |
|---|---|
| A vendor offers you a gift for getting them a meeting slot | Decline politely. Follow the company gift policy and inform your manager if it is significant. |
| Someone asks you to push their meeting ahead of others | Prioritise by the director’s priorities, never by friendship. |
| You are asked to sign on the director’s behalf | Only with clear written authority, and only for the documents covered by it. |
| You are asked to backdate a document or change figures | Do not do it. Raise your concern respectfully and in private. |
| You handle the director’s personal tasks | Keep personal and company money, cards and bills completely separate. |

:::warn Raising a concern with your director
Do it privately, calmly and factually: “Sir, I’m not comfortable changing the date on this document. Could we check with the CA or legal team on the right way to do it?” You are protecting the director as well as yourself.
:::

## Professional conduct
- Be on time, every day. The EA sets the standard for the office.
- Dress one level more formally than the office average.
- On the phone, give your name and the director’s office: “Good morning, Vikram Shah’s office, Neha speaking.”
- Never gossip about the director, even if others do.
- Agree on after-hours expectations early: which matters need a call, which can wait until morning.
`
}
  ],
  quiz: [
    { q: "What is the best description of an Executive Assistant’s purpose?", o: ["Typing letters and answering the phone", "Multiplying the time, focus and reach of a senior leader", "Managing the office building and supplies", "Supervising the whole administration team"], a: 1, why: "The EA protects and organises the director’s time and attention so that it is spent only on what matters most." },
    { q: "The director asks what time their flight is. What makes an answer ‘proactive’?", o: ["Replying within 10 seconds", "Forwarding the booking email", "Giving the time plus terminal, check-in status, cab and meeting details", "Asking which flight they mean"], a: 2, why: "Answer the question asked plus the next two questions they would have asked." },
    { q: "You learn at 11 am that tomorrow’s client meeting has been cancelled by the client. When should you tell the director?", o: ["At the end of the day", "Tomorrow morning in the daily brief", "As soon as possible, the same day", "Only if they ask"], a: 2, why: "The no-surprises rule: bad news early is a favour. The director may want to use that slot or contact the client." },
    { q: "A colleague casually asks what was decided about increments in the board meeting. What do you do?", o: ["Share only the general direction", "Tell them it is confidential and offer to ask the director to brief them", "Ignore the message", "Ask them to keep it secret, then share"], a: 1, why: "Stay friendly and firm. Share on a need-to-know basis only and route the request to the director." },
    { q: "Which habit protects confidential information on your computer?", o: ["Using a dark wallpaper", "Locking the screen every time you leave the desk", "Saving files on the desktop for quick access", "Turning the monitor away from the door"], a: 1, why: "Win+L (Windows) or Ctrl+Cmd+Q (Mac) every time you stand up." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Knowing your director and the organisation',
  summary: 'Learn the person you support, the people around them, and exactly where to find any information they ask for.',
  lessons: [
{
title: 'Building the director profile',
minutes: 8,
body: `
## Why you need it
Every director has preferences: how they like to be briefed, which seat they want on a plane, who they always take calls from, what they eat. A new EA who learns these in weeks instead of months becomes trusted much faster. The director profile is a single document where you record all of it.

## How to learn the director
- **Observe.** Notice when they are sharpest, what irritates them, how they write emails.
- **Read history.** Go through the last three months of their calendar and sent items. Who do they meet often? How do they reply?
- **Ask, a little at a time.** “Sir, for flights, do you prefer an aisle or window seat?” Ask one or two questions a day, not a questionnaire.
- **Learn from people around them:** the previous EA, the driver, the family office, long-time colleagues.
- **Update it monthly.** Preferences change.

## Director profile template
Copy this and fill it in. Keep it in a password-protected file.

:::template Director profile
DIRECTOR PROFILE — [Full name]
Last updated: [date]

1. BASICS
Full name as on passport:
Date of birth:              Blood group:
Mobile (primary / secondary):
Personal email:
Home address:
Emergency contact (name, relation, mobile):

2. WORKING STYLE
Preferred channel for urgent matters (call / WhatsApp / email):
When does the director read email?
How do they like information (one-page brief / bullets / call)?
Best time for focused work:
Preferred meeting length (internal / external):
No meetings before / after:

3. CALENDAR RULES
Fixed personal blocks (gym, family time, prayer):
Maximum meetings per day:
Buffer between meetings:
Preferred days for external meetings:
Lunch time and preference:

4. TRAVEL
Passport number and expiry:
Visas held (country, type, expiry):
Frequent flyer numbers:
Airline preference / seat / meal:
Hotel chain preference / room type:
Airport preferences (terminal, lounge, Digi Yatra):

5. FOOD AND HOSPITALITY
Diet (veg / Jain / non-veg / other):
Tea / coffee and how they take it:
Favourite restaurants (city-wise):

6. KEY PEOPLE
Family members, birthdays and anniversaries:
Always put through (VIP list):
People to handle with special care:

7. DOCUMENTS AND ACCESS
Where ID copies are stored (secure location only):
Digital signature (DSC) token kept at:
Delegate access you hold (mailbox, calendar):

8. LIKES AND DISLIKES
Pet peeves:
Things that make their day easier:

9. GIFTING
Occasions and budget:
Gifts given previously (to avoid repeats):
:::

:::warn Treat this as a sensitive document
It contains personal data. Never email it to yourself on a personal account, never print it, and never leave it on a shared drive that others can open.
:::

## Small details that build big trust
- Their tea arrives the way they like it, without asking.
- The car is always at the right gate.
- Birthdays of their family members are never forgotten.
- Their name, title and degrees are always spelled correctly in letters and invitations.
`
},
{
title: 'Mapping the organisation and key stakeholders',
minutes: 8,
body: `
## Start with the organisation chart
Ask HR for the current organisation chart. Then add three things to your copy:
1. The name and mobile number of each senior leader’s EA or assistant.
2. What each department actually does and who to call there for quick answers.
3. Notes on relationships: who reports to whom, who works closely with the director.

:::tip The EA network is your best resource
The assistants of other leaders can find you a slot, a document or an answer in minutes. Build those relationships early: say hello, help them when they ask, and thank them publicly when they help you.
:::

## The stakeholder map
| Group | Who | What you do for them |
|---|---|---|
| Board and owners | Chairman, board members, investors | Board packs, meeting logistics, quick access |
| Senior leadership | CEO, CXOs, HODs | Coordinate reviews, track joint decisions |
| Internal teams | Managers, MIS, HR, finance, admin | Get information, route requests |
| Customers | Key clients, buyers | Meetings, visits, hospitality, follow-ups |
| Partners and vendors | Suppliers, consultants, agencies | Screen, schedule, route to the right team |
| Advisors | CA, auditors, lawyers, bankers | Document coordination, deadlines |
| Government and industry | Officials, associations, trade councils | Formal letters, events, compliance dates |
| Personal | Family, doctor, home staff | Only what the director asks you to handle |

## Priority tiers
Decide with the director who belongs in each tier, and write it down.

| Tier | Who | How you handle them |
|---|---|---|
| Tier 1 — always put through | Chairman, family emergencies, top clients, legal or auditor in a crisis | Interrupt or connect immediately |
| Tier 2 — schedule quickly | Senior leadership, key vendors, bankers | Slot within 24–48 hours |
| Tier 3 — route or screen | Sales pitches, general requests, job seekers | Redirect to the right team, or decline politely |

## Learn the business
You cannot support a leader well if you do not understand what the company does. Learn:
- **Products and services**, and what makes the company different.
- **Top customers and suppliers**, by name.
- **Key numbers**: monthly sales, order book, production capacity, headcount.
- **The business calendar**: financial year (April to March in India), quarter closes, board meetings, audits, GST and tax deadlines, trade fairs, festive season peaks, appraisal cycle.
- **The vocabulary**: what MIS, PPC, PO, GRN, WIP, dispatch and similar internal terms mean in your company.

## Build a “Who’s who” sheet
One sheet, one row per important person: name, title, company, relationship to director, mobile, email, assistant’s name and number, notes (“prefers calls after 11”, “Gujarati speaker”, “met at Dubai expo 2025”).
`
},
{
title: 'The information map: where to find anything',
minutes: 11,
body: `
## “Can you get me…?”
Several times a day the director will ask for information: a number, a document, a contact, a decision. Speed and accuracy here are what makes an EA indispensable. The secret is not memory. It is knowing **where the source of truth is** for each kind of information.

## The information map
| When the director asks for… | Look first in | Ask |
|---|---|---|
| Sales figures, today’s numbers, monthly performance | MIS reports, ERP dashboards | MIS team, sales head |
| Status of a customer order | ERP or order tracker | Sales coordinator, production planning |
| A client’s phone number or address | Outlook contacts, CRM, visiting-card file | Sales team |
| A signed agreement with a vendor or client | Contracts folder, legal register | Legal, company secretary, purchase |
| What was decided in a past meeting | Your minutes (MoM) folder, Teams meeting notes | Meeting owner |
| Bank balance or cash position | Daily cash report | Finance head (never guess these numbers) |
| Whether an invoice has been paid | ERP accounts module | Accounts payable team |
| An employee’s leave, attendance or details | HRMS | HR (salary only to authorised people) |
| Shipment or export status | Logistics tracker, forwarder’s portal | Logistics or export team |
| Company PAN, GSTIN, CIN, bank details | Company master profile document | Accounts, company secretary |
| Board resolutions, statutory filings | Statutory registers | Company secretary |
| Director’s tickets, visas, travel history | Your travel folder | You |
| Last quarter’s presentation | Shared drive, SharePoint, email search | The presenter |
| A quotation given to a client | Quotation register, CRM | Sales |
| Factory or production status | Production MIS | Plant head, planning team |
| Industry or competitor news | Trade publications, industry association | Marketing |

:::tip Make it yours
Copy this table and replace the systems and names with your company’s real ones. Within a month you will have a map that no one else in the office has.
:::

## The four-step retrieval method
1. **Clarify.** What exactly, in what format, by when, and for what purpose? The purpose tells you which version they need.
2. **Acknowledge with a time.** Tell the director when they will have it.
3. **Find and verify.** Check the date, the version, the units and the source. Cross-check one number against another report if you can.
4. **Deliver with context.** Give the answer, the source and the “as on” date, and highlight anything unusual.

:::script Clarify and acknowledge in one sentence
“Sure, Sir. The Q2 sales summary by region — do you want the board version or the internal MIS one? I’ll send it by 3:30.”
:::

:::script Delivering with context
“Sir, Q2 sales were ₹48.6 crore, as per the MIS report dated 2 October. That is 12% above Q1. The West region dropped 4%; the sales head says it is due to two delayed export orders. Report attached.”
:::

## When you cannot find it
Do not go silent. Tell the director early, explain what you have tried, and offer an alternative.

:::script Reporting a delay honestly
“Sir, the signed copy of the Horizon agreement isn’t in the contracts folder. I’ve asked Legal and they’re checking their files. I have the final unsigned version now if that helps for your call. I’ll update you by 4.”
:::

## Number hygiene
- Always say the **unit**: ₹ lakh or ₹ crore, kg or grams, pieces or sets.
- Always say the **date**: “as on 30 September”.
- Always say the **source**: “from the MIS report”, “confirmed by Anita in finance”.
- Never round a number the director will quote to someone else.
- Never guess. “I’ll confirm in 10 minutes” is always better than a wrong number.

## Keep a “where is it?” register
A simple sheet with columns: *Item*, *Location (path or cabinet)*, *Owner*, *Last updated*. Every time you find something that took effort to locate, add it.
`
}
  ],
  quiz: [
    { q: "Where should you store the director profile?", o: ["On the desktop for quick access", "In a password-protected location", "Printed in your drawer", "Emailed to your personal account as backup"], a: 1, why: "It contains personal data and must be kept secure." },
    { q: "The director asks for the company’s current bank balance. What is the right approach?", o: ["Estimate it from last month’s report", "Get it from the finance head or the daily cash report", "Check the director’s old emails", "Ask a colleague in sales"], a: 1, why: "Never guess financial numbers. Go to the source of truth." },
    { q: "What does ‘deliver with context’ mean when giving a number?", o: ["Send it in a nicely formatted email", "Give the number with its source, ‘as on’ date and anything unusual", "Deliver it in person", "Add a chart"], a: 1, why: "Context lets the director use the number confidently." },
    { q: "Which people belong in Tier 1 (always put through)?", o: ["Anyone who says it is urgent", "Sales pitches from new vendors", "The chairman, family emergencies and top clients", "Every internal manager"], a: 2, why: "Tier 1 is agreed with the director and kept short." },
    { q: "You can’t find a document the director needs for a 4 pm call. It is 2 pm. What do you do?", o: ["Keep searching quietly until 4", "Tell the director now, explain what you’ve tried and offer an alternative", "Say it doesn’t exist", "Ask the director where they saved it"], a: 1, why: "Report early with options. Silence turns a small problem into a crisis." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Calendar and time management',
  summary: 'Treat the calendar as a strategy document: plan it, protect it, resolve conflicts and keep a daily rhythm.',
  lessons: [
{
title: 'Principles of calendar management',
minutes: 9,
body: `
## The calendar shows the director’s real priorities
If the director says “growth is my priority” but spends 80% of the week in internal reviews, the calendar is telling the truth. A good EA shapes the calendar so that time goes to what matters most.

## Classify every meeting
| Priority | Examples | Rule |
|---|---|---|
| P1 — strategic | Board meetings, top clients, investors, chairman | Protect at all costs. Prepare thoroughly. |
| P2 — operational | Department reviews, vendor negotiations, hiring for senior roles | Schedule normally. Move only with good reason. |
| P3 — optional | Updates, FYI sessions, courtesy calls | Delegate, shorten or decline when the week is full. |

## Ten calendar rules professionals follow
1. **Buffers.** Leave 10–15 minutes between meetings. Back-to-back days drain the director and cause late starts.
2. **Travel time is a meeting.** Block it in the calendar, with traffic margin.
3. **Prep time before P1 meetings.** Block 15–30 minutes to read the pack.
4. **Focus blocks.** Protect two or three blocks a week for thinking and deep work.
5. **Protect lunch.** A hungry director makes rushed decisions.
6. **Protect personal time.** Family events, health appointments and gym slots are fixed.
7. **No more than three meetings back-to-back.**
8. **Every entry is complete** (see the template below).
9. **Tentative holds are marked clearly** and released when not needed.
10. **The 48-hour look-ahead.** Confirm tomorrow’s meetings by 4 pm today.

## Colour-code the calendar
Agree a colour system with the director and use it consistently. In Outlook these are called categories.

| Colour | Meaning |
|---|---|
| Red | Board, chairman, investors |
| Purple | Clients and customers |
| Orange | Internal reviews |
| Blue | Travel |
| Green | Personal or blocked time |
| Yellow | Tentative or on hold |

## Every calendar entry must answer six questions
:::template Calendar entry description
Purpose: [why this meeting is happening, decision needed]
Attendees: [names, titles, company, mobile of the main contact]
Location: [full address + floor + parking, OR Teams/Zoom link + dial-in]
Documents: [attached / where to find them]
Your role: [chairing / presenting / listening / deciding]
Contact on the day: [name + mobile]
:::

## Apply the Eisenhower matrix to requests
| | Urgent | Not urgent |
|---|---|---|
| **Important** | Do now: schedule today, interrupt if needed | Plan: give it a protected slot this week |
| **Not important** | Delegate: route to the right person | Decline or drop |

## Time zones
When anyone is outside India, always write both times in the invite: “10:00 am IST / 8:30 am GST (Dubai)”. Outlook can show a second time zone on the calendar; you will learn this in the Outlook course.

:::warn The daylight-saving trap
The UK, Europe and the USA move their clocks in March/April and October/November. A meeting that was at 3:30 pm IST in September may become 4:30 pm IST in November. Re-check recurring meetings with these countries twice a year.
:::
`
},
{
title: 'Scheduling, rescheduling and resolving conflicts',
minutes: 10,
body: `
## The seven-step scheduling process
1. **Receive the request** — by email, call or from the director.
2. **Qualify it.** Purpose, attendees, duration, urgency, in person or online. Ask the requester if anything is missing.
3. **Check against priorities.** Does it deserve the director’s time? Could someone else take it?
4. **Offer two or three slots.** Never just one, never “whenever suits you”.
5. **Hold tentatively** in the director’s calendar while waiting for a reply.
6. **Confirm and send the invite** with the complete description.
7. **Reconfirm the day before.**

:::script Offering slots by email
Dear Mr. Mehta,

Thank you for your note. Mr. Shah would be glad to meet you to discuss the Q3 order. He is available at any of these times:

– Tuesday, 9 December, 11:00 am – 12:00 pm
– Wednesday, 10 December, 3:00 pm – 4:00 pm
– Thursday, 11 December, 10:30 am – 11:30 am

The meeting will be at our Andheri office. Please let me know which suits you, and I will send a calendar invitation.

Warm regards,
Neha Joshi
Executive Assistant to Vikram Shah
:::

## Rescheduling with grace
- Tell the other side **as early as possible**, by phone first for P1 meetings, then email.
- Apologise once, briefly. Do not over-explain.
- Offer new slots **in the same message**.
- Update the calendar invite rather than cancelling and re-creating it, so attendees keep the history.
- Never let anyone find out by showing up.

:::script Rescheduling a client meeting
“Good afternoon, Mr. Mehta. I’m calling from Vikram Shah’s office. Something unavoidable has come up for tomorrow’s 11 o’clock, and Mr. Shah asked me to apologise personally. Could we move it to Thursday at 11, or Friday at 3? He’s keen to keep the discussion this week.”
:::

## Resolving conflicts
A conflict is two things wanting the same time. Your job is not to choose; it is to make the choice easy for the director.

| Conflict | Usual approach |
|---|---|
| Internal vs external | External usually wins. Move the internal meeting. |
| Two internal meetings | Higher priority wins, or shorten both. |
| Chairman or board vs anything | Usually the chairman, but check with the director if the other is a P1 client. |
| Personal commitment vs work | Ask the director. Never assume work wins. |
| Two P1 meetings | Never decide alone. Present options with a recommendation. |

:::script Presenting a conflict to the director
“Sir, there’s a clash at 3 pm Thursday. The chairman’s office wants a 30-minute budget review, and you have Rajesh Mehta from Horizon at the same time.
Option A: move the chairman’s review to 4:30 — his EA says that works.
Option B: move Rajesh to Friday 11 — he’s flexible.
I’d suggest A, because Rajesh is travelling from Pune for this. Shall I go ahead?”
:::

## Handling last-minute changes
- Keep a list of “movable” meetings each day, so you know what can give way.
- When a meeting ends early, tell the director what they could use the time for.
- When the director runs late, inform the next meeting **before** the start time, with a realistic new time.
`
},
{
title: 'Daily and weekly planning rhythm',
minutes: 8,
body: `
## A rhythm makes the office predictable
Directors trust EAs who run a steady routine. Every day, week, month and year has a set of things you always do.

## The daily brief
Prepare it before the director arrives. Send it by email or WhatsApp, or keep it printed on the desk, whichever they prefer.

:::template Daily brief
GOOD MORNING — [Day, date]

TODAY’S SCHEDULE
09:30  Daily stand-up (Teams)
11:00  Rajesh Mehta, Horizon Retail — Q3 order (Board room) — pack in blue folder
13:00  Lunch
15:00  Bank RM — working capital limit (your cabin)
17:00  Free — suggested: review board deck

DECISIONS / APPROVALS NEEDED
1. Approve Diwali gift list (budget ₹2.4 lakh) — attached
2. Sign 3 vendor POs — in signature folder

CALLS TO RETURN
– Karan Malhotra (sales) — re: export pricing — 98XXXXXXXX
– Mrs. Shah — call when free

DEADLINES THIS WEEK
– Board deck to chairman’s office: Thursday 5 pm

TOMORROW
08:00 Flight to Delhi (6E 2135) — cab 5:30 am
:::

## The morning huddle (5–10 minutes)
Use the same order every day so the director can move fast:
1. Today’s schedule and anything changed overnight.
2. Decisions and approvals needed.
3. Papers to sign.
4. Calls to return.
5. Deadlines and travel coming up.
6. “Anything else you need from me today?”

## End of day
- Update the follow-up tracker.
- Confirm tomorrow’s meetings and logistics.
- Prepare tomorrow’s folder: printed packs, documents to sign, notes.
- Clear your inbox to a manageable state.
- Send the director a short note only if something needs their attention tonight.

## Weekly (every Friday)
- [ ] Review next week’s calendar with the director.
- [ ] Check travel for the next two weeks; book anything pending.
- [ ] Check birthdays and anniversaries for the next two weeks.
- [ ] Review the open action items list and chase overdue items.
- [ ] File the week’s documents and minutes.

## Monthly and yearly
Build a recurring “office calendar” with reminders for:
- Board meetings, AGM and audit dates.
- Tax and statutory deadlines that need the director’s signature.
- Renewals: passports, visas, insurance, licences, club memberships, domain names, subscriptions.
- The corporate credit card statement and expense claims.
- Appraisal season, budget season, festive gifting season.
- Annual events: trade fairs, foundation day, family occasions.

:::tip Set reminders well before the deadline
A passport renewal needs a reminder 9 months before expiry, not 9 days. A visa needs 6–8 weeks. Gifting needs 4–6 weeks. Put the reminder at the point where action must begin, not on the deadline itself.
:::
`
}
  ],
  quiz: [
    { q: "How much buffer should a professional EA usually leave between meetings?", o: ["None — back-to-back is efficient", "10–15 minutes", "1 hour", "Only after lunch"], a: 1, why: "Buffers prevent late starts and give the director time to reset." },
    { q: "When scheduling with an external person, how many time options should you offer?", o: ["One", "Two or three", "As many as possible", "Ask them to suggest a time"], a: 1, why: "Two or three slots keep control of the calendar and speed up agreement." },
    { q: "Two P1 meetings clash. What is the EA’s job?", o: ["Pick the more important one", "Cancel both", "Present clear options with a recommendation to the director", "Ask the attendees to decide"], a: 2, why: "Never decide a P1 conflict alone. Make the choice easy for the director." },
    { q: "When should you confirm tomorrow’s meetings?", o: ["Tomorrow morning", "By about 4 pm today", "Only for external meetings", "One week before"], a: 1, why: "The 48-hour look-ahead catches problems while there is still time to fix them." },
    { q: "A passport expires next year. When should the renewal reminder be set?", o: ["9 days before expiry", "About 9 months before expiry", "On the expiry date", "When the director asks"], a: 1, why: "Many countries need 6 months’ validity to travel. Set the reminder where action must begin." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Communication and gatekeeping',
  summary: 'Phones, visitors, emails on the director’s behalf, and the art of saying no without making enemies.',
  lessons: [
{
title: 'Phone and visitor handling',
minutes: 9,
body: `
## On the phone you are the director’s office
Callers judge the director and the company by how you answer.

## The basics
- Answer within three rings.
- Greet with the office name and your name: “Good morning, Vikram Shah’s office, Neha speaking.”
- Smile when you speak. It changes your tone.
- Always capture: **name, company, number, purpose, urgency.**
- Repeat numbers and names back to confirm the spelling.
- Never say where the director is in detail. “He’s in a meeting” is enough. Never “he’s gone home” or “he’s not in today”; say “He’s not available at the moment.”
- Never promise a call-back time on the director’s behalf. Promise that you will pass on the message.

:::script Screening a call
“May I know who’s calling, please? … And which company are you with? … May I tell Mr. Shah what it’s regarding? … Thank you. He’s in a meeting right now. I’ll pass on your message as soon as he’s free. What’s the best number to reach you?”
:::

:::template Phone message
FOR: Vikram Shah          DATE / TIME: 
CALLER: 
COMPANY: 
NUMBER: 
REGARDING: 
URGENCY: Call back today / This week / FYI
ACTION TAKEN: 
TAKEN BY: 
:::

## Transferring a call
Never transfer blind. Tell the director who is calling and why, then connect. “Sir, Rajesh Mehta from Horizon is on the line about the delivery date. Shall I put him through?”

## Visitors
**Before they arrive**
- Inform reception and security with the visitor’s name, company and time.
- Arrange parking, visitor pass and an escort if needed.
- Book the room; check the projector, Wi-Fi and Teams link.
- Arrange water, tea or coffee, and know their dietary preferences.

**When they arrive**
- Greet them by name, offer a seat and refreshments.
- Tell the director they have arrived.
- If there is a wait, give an honest estimate: “Mr. Shah will be with you in about ten minutes.”
- Check on them if the wait goes beyond the estimate.

**VIP visitors**
Receive them yourself at the gate or lift. Walk them to the room. The director should not have to wait for them, and they should not have to wait for the director.

## The unannounced visitor
:::script Polite and firm
“Good afternoon. Mr. Shah is in back-to-back meetings today and won’t be able to meet without an appointment. I’d be happy to note what it’s about and find you a time. Alternatively, Karan Malhotra handles this area and may be able to see you today. Shall I check with him?”
:::

## WhatsApp etiquette for business
- Use it only with people who use it with you or the director.
- Short, complete messages. No “Hi” followed by a long wait.
- No voice notes to senior people unless they prefer them.
- Confirm anything important by email as a record.
`
},
{
title: 'Writing emails and letters on the director’s behalf',
minutes: 10,
body: `
## Know which voice you are writing in
| Mode | Sent from | Signed as | Use for |
|---|---|---|---|
| As yourself | Your mailbox | You, EA to the director | Scheduling, logistics, follow-ups |
| On behalf of | The director’s mailbox (“Neha on behalf of Vikram”) | You or the director | Invitations, routine replies |
| As the director (ghost-writing) | The director’s mailbox | The director | Only with explicit approval for each type of message |

:::warn Never ghost-write without approval
Anything sent in the director’s name commits the director. Agree in advance which types of messages you may send directly, and get approval for everything else.
:::

## The structure of a professional email
1. **A specific subject.** “Meeting request — Q3 order review — 9 or 10 Dec” is better than “Meeting”.
2. **Bottom line up front.** State the purpose in the first sentence.
3. **Short paragraphs** of two or three lines.
4. **A clear request with a deadline.** “Please confirm by Friday, 5 pm.”
5. **A polite close** and a full signature.

## Phrases to retire
| Instead of | Write |
|---|---|
| Kindly do the needful | Please send the signed copy by Friday |
| PFA / Please find attached | I’ve attached the quotation |
| Revert back | Reply / let me know |
| As per my last email | As I mentioned on Monday |
| Please do the needful at the earliest | Please confirm by 3 pm today |
| Respected Sir | Dear Mr. Mehta |

## Templates you will use every week
:::template Meeting confirmation
Subject: Confirmed — Vikram Shah / Rajesh Mehta — Tue 9 Dec, 11:00 am

Dear Mr. Mehta,

Thank you for confirming. Mr. Shah looks forward to meeting you on Tuesday, 9 December at 11:00 am at our Andheri office (5th floor, Board Room). Parking is available at Gate 2; please share your car number and I will arrange a pass.

A calendar invitation follows. For anything on the day, please call me on 98XXXXXXXX.

Warm regards,
Neha Joshi
Executive Assistant to Vikram Shah
:::

:::template Polite decline
Subject: Re: Meeting request — new packaging solutions

Dear Ms. Kapoor,

Thank you for reaching out and for sharing your company profile. Mr. Shah’s calendar is fully committed over the coming weeks, so he won’t be able to meet. I have forwarded your details to our purchase team, who evaluate new suppliers, and they will contact you if there is a fit.

Best regards,
Neha Joshi
:::

:::template Follow-up reminder
Subject: Reminder — signed NDA needed by Thursday

Dear Amit,

A quick reminder that we need the signed NDA by Thursday, 5 pm, so that the technical team can share drawings on Friday. I’ve attached the final version again for convenience.

Thank you,
Neha
:::

## Before you press Send
- [ ] Names and titles spelled correctly.
- [ ] Day and date match (Tuesday really is the 9th).
- [ ] Time zone stated for anyone outside India.
- [ ] Attachment actually attached, and it is the right version.
- [ ] Right recipients; nobody added by autocomplete by mistake.
- [ ] CC only those who need to know; BCC used for large external lists.
- [ ] Tone: would you be comfortable if the director read it aloud?

## Formal letters
A formal letter on letterhead follows this order: reference number, date, recipient name, title and address, subject line, salutation, body (purpose, details, request), closing (“Yours sincerely”), signature block with name and title, and enclosures. Keep a letter register with the reference number, date, recipient and subject of every letter that leaves the office.
`
},
{
title: 'Gatekeeping, saying no and escalation',
minutes: 9,
body: `
## A gatekeeper is a filter, not a wall
Gatekeeping protects the director’s focus and sends every request to the person best placed to handle it. Done well, people leave satisfied even when they don’t get the meeting.

## The five triage questions
1. **Who** is asking, and what tier are they?
2. **What** is it about, specifically?
3. **Can someone else** handle it as well or better?
4. **How urgent** is it really? What happens if it waits a week?
5. **What does the director need** to know or decide?

## Saying no without damaging relationships
- Thank them first.
- Give a short reason without detail: “His calendar is fully committed this month.”
- Offer an alternative: another person, a later date, an email update, a shorter call.
- Be warm in tone and firm in content.

:::script The persistent caller
“I understand this is important to you, and I have passed your message to Mr. Shah twice. He has asked Karan Malhotra to handle this. I’ll share Karan’s number with you now, and I’ll let him know you’ll be calling.”
:::

:::script Redirecting a sales pitch
“Thank you for calling. New supplier proposals are reviewed by our purchase team. If you email your profile to purchase@company.in, they’ll get in touch if there’s a requirement.”
:::

## When to interrupt the director
| Situation | Action |
|---|---|
| Family emergency, health or safety issue | Interrupt immediately, discreetly |
| Chairman or a Tier 1 person needs them urgently | Pass a written note |
| A top client calling with a serious problem | Pass a note; let the director decide |
| Time-sensitive approval with a deadline in the next hour | Pass a note |
| Routine calls, updates, internal requests | Wait for the break |
| Something you can handle within your authority | Handle it and report afterwards |

:::tip How to interrupt well
Knock, enter quietly, hand over a written note with the key facts and a yes/no question, and wait for an answer. “Mrs. Shah called — please call back when free — not an emergency.” Or: “Chairman on line 2, needs 2 minutes on the bank letter. Take now?”
:::

## Managing up
Sometimes the director is the one overloading the calendar. Your job is to show the consequences clearly and suggest a solution.

:::script Pushing back respectfully
“Sir, if we add the vendor review on Thursday, you’ll have seven hours of meetings and no time to prepare the board deck due on Friday. Shall I move the vendor review to Monday morning instead?”
:::

## Escalation within the company
When a colleague is not delivering something the director needs:
1. Remind them politely, with the deadline and why it matters.
2. Remind again closer to the deadline, and ask if anything is blocking them.
3. Inform their manager or the director, with facts: what was asked, when, and what has been received.

Escalate the problem, not the person. Keep it factual and never personal.
`
}
  ],
  quiz: [
    { q: "A caller asks where the director is. What is the right answer?", o: ["He’s gone home early", "He’s in the washroom", "He’s not available at the moment / He’s in a meeting", "He’s in Delhi at the Taj until Thursday"], a: 2, why: "Never share the director’s whereabouts or personal details." },
    { q: "Which phrase is the most professional replacement for ‘Kindly do the needful’?", o: ["Please do the necessary", "Please send the signed copy by Friday", "Revert ASAP", "Waiting for your positive reply"], a: 1, why: "Say exactly what you need and by when." },
    { q: "When is it acceptable to send an email written as the director from their mailbox?", o: ["Whenever you are confident about the content", "Only with the director’s explicit approval for that type of message", "When the director is travelling", "Never"], a: 1, why: "Anything sent in the director’s name commits the director." },
    { q: "The director is in a board meeting. His wife calls; it is not an emergency. What do you do?", o: ["Interrupt immediately", "Pass a note with ‘not an emergency — call back when free’ or wait for the break", "Tell her to call later", "Ignore the call"], a: 1, why: "Pass a discreet note or wait for the break, and tell her you have passed on the message." },
    { q: "What is the first step when a colleague is late delivering something the director needs?", o: ["Complain to their manager", "Tell the director they are lazy", "Remind them politely with the deadline and why it matters", "Do the work yourself"], a: 2, why: "Escalate step by step and keep it factual." }
  ]
}
]);
