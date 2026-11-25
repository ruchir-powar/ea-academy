/* Course 2 — Outlook for Executive Assistants (modules 1–4) */
ACADEMY.addCourse({
  id: 'outlook',
  number: 2,
  title: 'Outlook for Executive Assistants',
  short: 'Outlook Mastery',
  tagline: 'Email, calendar and delegate access, chapter by chapter.',
  description: 'A complete Outlook course built around an EA’s real work: writing and managing email, organising the inbox, running the director’s calendar, working as a delegate, automating routine work and keeping the mailbox secure. Practise every skill in the Outlook practice lab.',
  outcomes: [
    'Find your way around new Outlook, classic Outlook and Outlook on the web',
    'Write, reply, forward and track email the way a professional office does',
    'Keep any inbox under control with folders, categories, flags, rules and search',
    'Manage a director’s calendar and mailbox safely as a delegate'
  ],
  practice: { label: 'Outlook practice lab', route: '#/lab/outlook' },
  modules: []
});

ACADEMY.addModules('outlook', [
/* ---------------------------------------------------------------- */
{
  title: 'Getting started with Outlook',
  summary: 'The versions of Outlook, the parts of the screen and how to set it up for fast work.',
  lessons: [
{
title: 'Outlook versions and the interface tour',
minutes: 8,
body: `
## Which Outlook are you using?
Microsoft offers several versions of Outlook. They share the same mailbox, so an email filed on your phone is filed on your laptop too. The buttons sit in slightly different places.

| Version | How to recognise it | Notes |
|---|---|---|
| New Outlook for Windows | Clean look, app icons on the far left, Settings gear at the top right | Microsoft’s current default; looks almost identical to Outlook on the web |
| Classic Outlook for Windows | A large ribbon with a File tab at the top left | Still widely used in offices; has a few advanced features the new one lacks |
| Outlook on the web | Opened in a browser at outlook.office.com | Same as new Outlook; useful on any computer |
| Outlook for Mac | Mac menu bar at the top, toolbar in the window | Same mailbox, Mac shortcuts |
| Outlook mobile | iPhone or Android app | For quick replies and calendar checks on the go |

:::tip The universal trick
When you can’t find a setting in new Outlook or on the web, open **Settings** (the gear icon) and type what you need into the search box at the top of the Settings window, for example “signature”, “rules” or “automatic replies”.
:::

## The parts of the screen
1. **App bar** (far left in new Outlook, bottom-left in classic): switch between Mail, Calendar, People, To Do and other apps. Shortcuts: [[Ctrl+1]] Mail, [[Ctrl+2]] Calendar, [[Ctrl+3]] People.
2. **Ribbon** (top): the commands for whatever you are doing — New mail, Delete, Reply, Move, Categorize, Flag.
3. **Folder pane** (left): Inbox, Drafts, Sent Items, Deleted Items, Archive, your own folders, and any shared mailboxes.
4. **Message list** (middle): emails in the selected folder. Bold means unread.
5. **Reading pane** (right or bottom): the selected email.
6. **Search box** (top): searches the current mailbox. Shortcut [[Ctrl+E]].

## Understanding the message list
| What you see | What it means |
|---|---|
| Bold subject | Unread |
| Paperclip | Has an attachment |
| Red exclamation mark | Sent with high importance |
| Coloured flag | Flagged for follow-up |
| Coloured tag or block | A category has been assigned |
| Curved arrow | You have replied or forwarded |
| Number next to a folder | Unread messages in that folder |

## Your first set-up checklist
- [ ] Reading pane on the right (more lines visible on a widescreen monitor).
- [ ] Conversation view on or off — choose one and stay consistent.
- [ ] Your email signature created (see the Email Essentials module).
- [ ] Desktop notifications on for the director’s VIPs only, if possible.
- [ ] The director’s mailbox or calendar added, if you have delegate access.

@lab 1 Open the practice lab and read your first email
`
},
{
title: 'Views, reading pane and personalising Outlook',
minutes: 7,
body: `
## Make Outlook work the way you think
Small changes to the view save minutes every day.

## Reading pane position
- **Right**: best for wide screens; you see more of the email list.
- **Bottom**: shows longer previews but fewer messages.
- **Off**: emails open in a new window; useful on small screens.

New Outlook: **View → Layout → Reading pane**. Classic: **View → Reading Pane**.

## Conversation view
Groups all replies in a thread together. Helpful for long discussions; confusing for some people when a thread splits.
New Outlook: **View → Layout → Conversations**. Classic: **View → Show as Conversations**.

## Sort and filter the list
- Sort by **Date**, **From**, **Size** or **Importance**.
- Use the **Filter** button to show only Unread, Flagged, With attachments, Mentions me or To me.

:::tip A morning trick
Start the day with **Filter → Unread**. Process each unread message once. Then switch back to All.
:::

## Focused Inbox
Outlook can split the inbox into **Focused** (important) and **Other** (newsletters, notifications). It learns from what you move. For an EA managing a busy mailbox, Focused Inbox is useful, but check **Other** at least twice a day — important things sometimes land there.
To move a sender permanently: right-click the message → **Move to Focused** (or **Always move to Focused**).

## Conditional formatting: colour important senders
You can make every email from the director appear in red, or every email from the chairman in bold.
- Classic: **View → View Settings → Conditional Formatting → Add**, choose a font and colour, and set the condition (From: the director).
- New Outlook and the web: **Settings → Mail → Conditional formatting**.

## Density and font size
Choose **compact** density to see more emails, and increase the message font size if you read for long hours. In new Outlook: **Settings → General → Appearance**.

## Pin and favourites
- **Pin** an email to keep it at the top of the list until you unpin it.
- Add your most-used folders to **Favourites** at the top of the folder pane: right-click the folder → **Add to Favourites**.
`
}
  ],
  quiz: [
    { q: "In new Outlook, where is the fastest place to find a setting you can’t locate?", o: ["The Help menu", "The search box inside the Settings window", "The File tab", "Right-click the inbox"], a: 1, why: "Settings search finds any option by name." },
    { q: "What does a bold message in the list mean?", o: ["It is important", "It is unread", "It has an attachment", "It is from the director"], a: 1, why: "Bold = unread." },
    { q: "Which shortcut opens the calendar?", o: ["Ctrl+1", "Ctrl+2", "Ctrl+3", "Ctrl+C"], a: 1, why: "Ctrl+1 Mail, Ctrl+2 Calendar, Ctrl+3 People." },
    { q: "How can you make every email from the director appear in red?", o: ["Flag each one", "Conditional formatting", "Move them to a folder", "Mark them as important"], a: 1, why: "Conditional formatting applies colours and fonts by rule." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Email essentials',
  summary: 'Compose, reply, forward and track emails correctly, and set up signatures and templates.',
  lessons: [
{
title: 'Composing the perfect email',
minutes: 9,
body: `
## Start a new email
- Click **New mail** (new Outlook) or **New Email** (classic).
- Shortcut: [[Ctrl+Shift+M]] creates a new email from anywhere in Outlook; [[Ctrl+N]] creates a new email when you are in Mail.

## To, Cc and Bcc
| Field | Use it for | Example |
|---|---|---|
| To | People who must act or reply | The client you are asking to confirm |
| Cc | People who should know, but need not act | The director, the sales head |
| Bcc | People who should receive it without others seeing their address | A large external mailing; a quiet copy to the director |

:::warn The Bcc rules
Never put a long list of external addresses in To or Cc — everyone sees everyone’s email address. Use Bcc. And remember: if a Bcc recipient clicks Reply All, everyone learns they were copied.
:::

To show the Bcc field: new Outlook — click **Bcc** at the right end of the To line. Classic — in the new message, **Options → Bcc**.

## Choosing recipients correctly
- Type a few letters of the name and pick from the suggestions. **Check you picked the right person**; autocomplete is the most common cause of misdirected email.
- [[Ctrl+K]] checks names against the address book.
- To remove a wrong suggestion permanently, hover over it in the drop-down and click the **X**.

## The subject line
Make it specific and searchable: **topic + action + date**.
- “Approval needed — Diwali gift list — by Thu 5 pm”
- “Confirmed — Horizon meeting — Tue 9 Dec, 11 am”

## Attachments
- **Attach file** (paperclip): choose from your computer or recent files.
- Cloud files (OneDrive or SharePoint) can be shared as a **link** instead of a copy. Set the permission (view or edit) before you send.
- Keep attachments small. Compress large PDFs or share a link.
- Outlook warns you if your text says “attached” but nothing is attached. Don’t ignore that warning.

## Formatting
Use formatting to help reading, not to decorate: bold for deadlines, bullet lists for several items, one font and colour throughout.

## Importance
**High importance** shows a red “!” to the recipient. Use it rarely, only when it really is urgent, or people stop noticing it.
New Outlook: **⋯ (More options) → Set importance → High**. Classic: **Message → Tags → High Importance**.

## Drafts
Outlook saves unsent emails in **Drafts** automatically. To finish one, open the Drafts folder and double-click it.

@lab 9 Practise: send an email with high importance and an attachment
`
},
{
title: 'Replying, forwarding and tracking',
minutes: 10,
body: `
## Reply, Reply All or Forward?
| Action | Shortcut (Windows) | Who receives it | Attachments included? |
|---|---|---|---|
| Reply | [[Ctrl+R]] | Only the sender | No |
| Reply All | [[Ctrl+Shift+R]] | Sender plus everyone in To and Cc | No |
| Forward | [[Ctrl+F]] (classic), [[Ctrl+Shift+F]] (new Outlook and web) | Whoever you choose | Yes |

:::warn Before you click Reply All
Ask: does every person on this thread need my reply? If not, use Reply. Reply All to a large group for “Thanks” or “Noted” is a common office irritation.
:::

## Adding the director to a reply
When you reply to a client and want the director to see it, add the director in **Cc**. When you move someone from To to Bcc to reduce a long thread, say so at the top: “Moving Karan to Bcc, thank you for the introduction.”

## Forwarding properly
- Add a line at the top explaining why you are forwarding and what you need: “Sir, Horizon’s revised quotation below. They need approval by Friday. Karan recommends accepting.”
- Remove long irrelevant history and any confidential content not meant for the new recipient.

## Recall a message
If you sent an email by mistake to someone inside your company, you can try to recall it.
- New Outlook: open the email in **Sent Items** → **⋯ → Recall message**.
- Classic: open the sent email → **File → Info → Message Resend and Recall → Recall This Message**.

Recall only works for recipients in your own organisation, and it is not guaranteed. If the message was sent outside, call the recipient and politely ask them to delete it.

## Schedule send (delay delivery)
Write now, deliver later — useful for messages written at night or timed for another time zone.
- New Outlook: click the arrow next to **Send → Schedule send**.
- Classic: **Options → Delay Delivery → Do not deliver before**. Classic Outlook must be open at that time for some account types.

## Read and delivery receipts
You can request a receipt (**Options → Request a Read Receipt**), but recipients can decline to send it. Use receipts rarely; many people find them intrusive. A follow-up call is better for important matters.

## Follow-up on what you sent
Flag sent emails that need a reply (**Flag → Tomorrow**). When the reply arrives, clear the flag. This is how EAs make sure nothing is forgotten.

@lab 3 Practise: reply to a client and copy the director
`
},
{
title: 'Signatures, templates and Quick Parts',
minutes: 8,
body: `
## The email signature
A professional signature is consistent across the office. Typical EA signature:

:::template EA email signature
Neha Joshi
Executive Assistant to Vikram Shah, Managing Director
Your Company Pvt. Ltd.
5th Floor, Andheri East, Mumbai 400069
+91 98XXX XXXXX | neha.joshi@yourcompany.in
:::

Keep it short. No quotes, no large images, no colourful backgrounds. Use the company template if one exists.

**Create it**
- New Outlook: **Settings → Accounts → Signatures → New signature**. Choose a default for new messages and for replies.
- Classic: **File → Options → Mail → Signatures → New**.

Create a shorter second signature (name and phone only) for replies within a thread.

## Templates for emails you send often
EAs send the same emails repeatedly: meeting confirmations, visitor instructions, travel itineraries. Templates save typing and prevent errors.

- **New Outlook and the web:** open a new email, then use **My Templates** (look under the Apps or ⋯ More options menu in the message toolbar). Add a template with a title and text. Next time, click it to insert the text.
- **Classic:** write the email, then **File → Save As → Outlook Template (.oft)**. To use it: **Home → New Items → More Items → Choose Form → User Templates in File System**.

:::tip Templates worth creating today
Meeting confirmation, meeting reschedule, polite decline, visitor directions, travel itinerary cover note, document request, thank-you after a meeting.
:::

## Quick Parts (classic Outlook)
Quick Parts save a block of text — your office address with a map link, bank details for vendors, parking instructions — and insert it with two clicks.
1. Type the text in a new email and select it.
2. **Insert → Quick Parts → Save Selection to Quick Part Gallery**.
3. To use it: **Insert → Quick Parts** and click it.

## Text predictions
New Outlook suggests words as you type. Press [[Tab]] to accept. Read every suggestion before accepting it, because predictions can change the meaning of a sentence.
`
}
  ],
  quiz: [
    { q: "You’re sending an invitation to 60 external guests. Where should their addresses go?", o: ["To", "Cc", "Bcc", "Split across To and Cc"], a: 2, why: "Bcc protects everyone’s email address." },
    { q: "Which shortcut replies to everyone on the email?", o: ["Ctrl+R", "Ctrl+Shift+R", "Ctrl+F", "Ctrl+A"], a: 1, why: "Ctrl+R replies to the sender only; Ctrl+Shift+R replies to all." },
    { q: "When does Recall work best?", o: ["For any recipient worldwide", "For recipients inside your own organisation who haven’t opened it", "Only on mobile", "After 24 hours"], a: 1, why: "Recall is limited to your organisation and is not guaranteed." },
    { q: "You write an email at 11 pm that should arrive at 9 am. Which feature do you use?", o: ["Read receipt", "Schedule send / Delay delivery", "High importance", "Quick Parts"], a: 1, why: "Schedule send delivers the email at the time you choose." },
    { q: "Does Forward include the original attachments?", o: ["Yes", "No", "Only if you tick a box", "Only for PDFs"], a: 0, why: "Forward includes attachments; Reply and Reply All do not." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Inbox organisation',
  summary: 'Folders, categories, flags, rules, Quick Steps and search — a system that keeps any inbox under control.',
  lessons: [
{
title: 'Folders, categories and flags: the system',
minutes: 10,
body: `
## Three tools, three jobs
| Tool | Answers the question | Example |
|---|---|---|
| Folder | Where does this belong? | Clients, Travel, Finance |
| Category | What kind of item is it? (an email can have several) | Urgent, Director action, Waiting |
| Flag | When do I need to act? | Today, Tomorrow, This week |

## Folders
Keep few folders, by subject. Too many folders means you spend time deciding where things go.
:::template A simple EA folder structure
Inbox
  01 Director — Action
  02 Clients
  03 Finance
  04 Travel
  05 Meetings & MoM
  06 HR & Admin
  07 Reference
Archive
:::
- Create: right-click **Inbox → Create new subfolder**.
- Move: drag and drop, or **Move to** on the ribbon. Classic shortcut [[Ctrl+Shift+V]].
- Numbering keeps folders in your chosen order instead of alphabetical.

## Categories
Categories are coloured labels. An email, meeting or task can have more than one.
1. Select an email → **Categorize** (tag icon) → choose a colour.
2. To rename colours: **Categorize → Manage categories** (new) or **All Categories** (classic).

Suggested categories for an EA:
| Colour | Name |
|---|---|
| Red | Urgent |
| Orange | Director — action |
| Yellow | Waiting for reply |
| Green | Finance |
| Blue | Travel |
| Purple | Clients |

Use the same colours in the calendar, so that a purple meeting and a purple email both mean “client”.

## Flags for follow-up
A flag puts the email on your to-do list with a date.
- Click the flag icon on the message, or **Flag** on the ribbon → **Today**, **Tomorrow**, **This week**, **Next week**, **No date** or **Custom**.
- Flagged emails appear in Microsoft To Do under **Flagged email**.
- Add a **reminder** to get a pop-up at a specific time.
- Mark complete when done, so that your list stays honest.

## The 4D method for processing the inbox
For every email, decide once:
1. **Delete** it (or archive) if no action is needed.
2. **Do** it now if it takes under two minutes.
3. **Delegate** it — forward to the right person and flag it to follow up.
4. **Defer** it — flag it with a date, or put it into the calendar as a task.

The aim is not an empty inbox; it is an inbox where everything left has a decision.

@lab 2 Practise: flag the client’s email for follow-up
@lab 4 Practise: categorise the invoice email
@lab 5 Practise: move the hotel confirmation to the Travel folder
`
},
{
title: 'Rules, Quick Steps and automation',
minutes: 9,
body: `
## Rules: let Outlook file for you
A rule acts automatically on incoming email: move it, categorise it, flag it, forward it, or play a sound.

**Good rules for an EA**
- Emails from the travel agency or booking sites → move to **Travel**.
- Emails with “invoice” in the subject → categorise **Finance**.
- Emails from the director → categorise **Director — action** and show an alert.
- Newsletters → move to a **Read later** folder.

**Create a rule**
- New Outlook: **Settings → Mail → Rules → Add new rule**. Name it, add a condition (for example *From*), add an action (*Move to* a folder), and save.
- Classic: right-click an email → **Rules → Create Rule**, or **Home → Rules → Manage Rules & Alerts → New Rule**.
- Tick **Run rule now** (or **Run Rules Now** in classic) to apply it to emails already in the inbox.

:::warn Rule order matters
Rules run from top to bottom. A rule with “stop processing more rules” stops the ones below it. If a rule isn’t working, check its position in the list.
:::

:::warn Never auto-forward the director’s mail outside the company
A rule that forwards email to a personal address is a serious security risk, and most companies block it.
:::

## Quick Steps: many clicks in one
A Quick Step performs several actions with one click — for example, *move to Finance + mark as read + categorise green*.
- Classic: **Home → Quick Steps → Create New**.
- New Outlook: **⋯ → Quick steps → Manage quick steps → New**.

Useful Quick Steps:
- **Done** — mark as read + move to Archive.
- **To Director** — forward to the director with “For your approval” + flag for tomorrow.
- **Finance** — move to Finance + categorise Finance.

## Sweep (new Outlook and web)
Select an email from a sender, then **Sweep** to delete or move all emails from that sender, or keep only the latest. Ideal for daily notification emails.

@lab 6 Practise: create a rule for the travel agency’s emails
`
},
{
title: 'Search like a pro and keep the mailbox clean',
minutes: 9,
body: `
## Search is faster than folders
A good search finds anything in seconds. Click in the search box (or press [[Ctrl+E]]) and type.

## Search operators
| Type this | To find |
|---|---|
| from:anita | Emails from Anita |
| to:vikram | Emails sent to Vikram |
| subject:invoice | “Invoice” in the subject |
| hasattachments:yes | Emails with attachments |
| received:yesterday | Emails received yesterday |
| received:this week | Emails received this week |
| category:finance | Emails in the Finance category |
| from:anita subject:invoice | Both conditions together |
| "Q3 order" | The exact phrase |

You can combine operators. If you prefer, the **search filters** (the funnel icon next to the search box) build these conditions for you. Operator names vary slightly between Outlook versions, so if one doesn’t work, use the filters.

:::tip Search the right place
Outlook may search only the current folder or the whole mailbox. Check the scope option next to the search box. When you have delegate access, open the director’s mailbox before searching it.
:::

## Search folders (classic)
A Search Folder is a saved search that always stays up to date: “Unread from the director”, “Flagged this week”, “Large emails”. **Folder → New Search Folder**.

## Keep the mailbox healthy
Mailboxes have a size limit. When it is full, you can’t send email — at the worst possible moment.

1. **Find big emails:** sort by **Size**, or search **messagesize:>5MB** in classic.
2. **Clean up conversations:** classic **Home → Clean Up → Clean Up Conversation** removes repeated messages in a thread.
3. **Empty Deleted Items** regularly, after checking nothing important is there.
4. **Archive** old emails: use the **Archive** button or your company’s online archive.
5. **Save large attachments** to OneDrive or the shared drive, then delete the email copy.

## The weekly inbox reset (10 minutes)
- [ ] Process anything still unread.
- [ ] Review flagged emails; clear what’s done.
- [ ] Archive the week’s finished threads.
- [ ] Empty Deleted Items and Junk after checking.
- [ ] Check the mailbox size.

@lab 8 Practise: search for emails from a specific person
`
}
  ],
  quiz: [
    { q: "An email is both from a client and about an invoice. Which tool lets you label it as both?", o: ["Folders", "Categories", "Flags", "Rules"], a: 1, why: "An item can have several categories, but can be in only one folder." },
    { q: "What does a flag add to an email?", o: ["A colour", "A follow-up date and a place on your to-do list", "High importance", "A read receipt"], a: 1, why: "Flags are about when to act." },
    { q: "Which search finds emails from Anita that have attachments?", o: ["anita attachments", "from:anita hasattachments:yes", "to:anita files", "subject:anita"], a: 1, why: "Operators can be combined." },
    { q: "Why is a rule that auto-forwards the director’s mail to a personal Gmail a problem?", o: ["It is slow", "It is a serious security risk and usually blocked", "It changes the subject", "It deletes the original"], a: 1, why: "Company mail must not leave company systems through automatic forwarding." },
    { q: "In the 4D method, what do you do with an email that takes under two minutes?", o: ["Defer it", "Delete it", "Do it now", "Delegate it"], a: 2, why: "Delete, Do, Delegate, Defer." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Calendar management in Outlook',
  summary: 'Appointments and meetings, the Scheduling Assistant, recurring meetings, Teams, rooms, time zones and calendar sharing.',
  lessons: [
{
title: 'Appointments, meetings and the Scheduling Assistant',
minutes: 10,
body: `
## Appointment or meeting?
| | Appointment | Meeting |
|---|---|---|
| Who is involved | Only you (or only the director) | Other people are invited |
| Sends invitations | No | Yes |
| Example | “Prepare board deck”, “Dentist”, travel time | Client review, team meeting |
| Shortcut (classic) | [[Ctrl+Shift+A]] | [[Ctrl+Shift+Q]] |

## Create a meeting
1. Go to Calendar ([[Ctrl+2]]) → **New event** (new Outlook) or **New Meeting** (classic).
2. **Title**: clear and specific — “Horizon Retail — Q3 order review”.
3. **Attendees**: add required people; use **Optional** for those who don’t have to attend.
4. **Date and time**; set **All day** for full-day events.
5. **Location**: a room or address, or turn on **Teams meeting** for an online link.
6. **Description**: purpose, agenda, documents (use the calendar entry template from Course 1).
7. **Reminder**: 15 minutes by default; 30–60 minutes if travel is involved.
8. **Show as**: Busy, Free, Tentative, Out of office or Working elsewhere.
9. **Send**.

## The Scheduling Assistant
The Scheduling Assistant shows everyone’s free and busy time side by side, so you can find a slot without emailing back and forth.
- New Outlook: in the new event window, click **Scheduling assistant**.
- Classic: in the meeting window, click **Scheduling Assistant** on the ribbon.

Each attendee appears as a row. Coloured blocks are busy times. Find a column where everyone is free, and click it.

:::tip Read the colours
Dark blue = busy. Striped or light = tentative. Purple = out of office. White = free. Grey hatched = outside working hours.
:::

## Responding to invitations
When someone invites the director, the choices are **Accept**, **Tentative**, **Decline** or **Propose new time**. Add a short note when declining or proposing.

## Updating rather than recreating
To change a meeting’s time, open it, change it, and click **Send update**. Don’t cancel and create a new one — attendees lose the history, and it fills their inboxes.

## Private appointments
Mark personal items as **Private** (the lock icon). People who can see the calendar will only see “Private appointment” and the time. Note: delegates may still see private items if the director allows it.

@lab 10 Practise: schedule a meeting using the Scheduling Assistant
`
},
{
title: 'Recurring meetings, rooms, Teams and time zones',
minutes: 9,
body: `
## Recurring meetings
For meetings that repeat — a weekly review, a monthly board call — use **Repeat** (new Outlook) or **Recurrence** (classic).
- Choose daily, weekly, monthly or yearly, and the pattern (for example *every Monday*, or *the last Friday of every month*).
- **Always set an end date.** Meetings without an end date clutter calendars for years.

To change one occurrence, open it and choose **This event** (new) or **Just this one** (classic). To change all future ones, choose **This and all following** or **The entire series**.

:::warn Editing a series
Changing the whole series can overwrite changes you made to single occurrences. Check before you click.
:::

## Booking rooms
In companies where meeting rooms are set up in Outlook, add the room like an attendee or use **Add a room / Room Finder**. The room accepts or declines automatically depending on availability. Book the room as soon as you know about the meeting; good rooms go fast.

## Teams meetings
Turn on **Teams meeting** in the event to add a join link automatically.
After saving, open **Meeting options** to:
- Control who can bypass the lobby.
- Choose who can present.
- Allow or block attendees from unmuting.
- Turn on automatic recording, where allowed.

For important external meetings, set yourself as a co-organiser or presenter so you can admit people while the director prepares.

## Time zones
When people are in other countries, set the meeting in the right time zone and show two zones on your calendar.
- In the event window, use **Time zones** to set a different time zone for the start and end.
- To show a second time zone on the calendar: classic — **File → Options → Calendar → Time zones → Show a second time zone**. New Outlook — open **Settings** and search “time zones”.

Always write both times in the description: “3:00 pm IST / 9:30 am GMT”.

## Working hours
Set the director’s working hours (**Settings → Calendar → Work hours and location** in new Outlook; **File → Options → Calendar** in classic). Scheduling Assistant shades times outside these hours, so others are less likely to book meetings at 8 pm.
`
},
{
title: 'Sharing calendars and viewing several at once',
minutes: 8,
body: `
## Sharing permissions
When the director shares a calendar with you, they choose a permission level.

| Permission | What you can do |
|---|---|
| Can view when I’m busy | See only free/busy blocks |
| Can view titles and locations | See subject and place |
| Can view all details | See everything (except private items) |
| Can edit | Create, change and delete entries |
| Delegate | Edit, plus receive and respond to meeting invitations on the director’s behalf |

For an EA, **Can edit** or **Delegate** is needed.

**To share** (the director does this): new Outlook — **Calendar → Share** → add the person → choose the permission. Classic — **Calendar → Share Calendar**.

**To open a calendar shared with you:** accept the sharing invitation email, or **Calendar → Add calendar → From directory** and search for the person.

## Viewing several calendars
Tick several calendars in the folder pane to see them together.
- **Side by side**: each calendar in its own column.
- **Overlay / Split view**: combined, with different colours.

Overlay the director’s calendar with yours so that you can see when the director is free and when you are needed.

:::tip Use calendar groups
Create a group such as “Leadership team” with all the leaders’ calendars. One click shows everyone’s availability — ideal for scheduling management meetings.
:::

## Printing the calendar
Some directors like a printed day or week. Use **Print** (classic **File → Print**, new Outlook **⋯ → Print**), choose *Daily* or *Weekly* style, and set the date range.
`
}
  ],
  quiz: [
    { q: "What is the difference between an appointment and a meeting?", o: ["Meetings are longer", "A meeting invites other people; an appointment does not", "Appointments are only for personal items", "There is no difference"], a: 1, why: "Meetings send invitations; appointments only block time." },
    { q: "What does the Scheduling Assistant show?", o: ["Room prices", "Everyone’s free and busy time side by side", "The meeting agenda", "Traffic conditions"], a: 1, why: "It lets you find a common free slot instantly." },
    { q: "Why must a recurring meeting have an end date?", o: ["Outlook requires it", "Meetings without an end clutter calendars for years", "To save storage", "To allow Teams links"], a: 1, why: "Always set an end date and review it later." },
    { q: "To change a meeting time, what should you do?", o: ["Cancel it and create a new one", "Open it, change the time and send an update", "Email everyone separately", "Ask attendees to edit their calendars"], a: 1, why: "Updating keeps history and avoids confusion." },
    { q: "Which calendar permission lets an EA receive and respond to meeting invitations for the director?", o: ["Can view all details", "Can view when I’m busy", "Delegate", "Can view titles and locations"], a: 2, why: "Delegate includes editing plus handling invitations." }
  ]
}
]);
