/* Course 2 — Outlook for Executive Assistants (modules 5–7) */
ACADEMY.addModules('outlook', [
/* ---------------------------------------------------------------- */
{
  title: 'Working as a delegate',
  summary: 'Delegate access to the director’s mailbox and calendar: permissions, sending on behalf, and daily management.',
  lessons: [
{
title: 'Delegate access and permissions',
minutes: 10,
body: `
## What delegate access means
Delegate access lets you work inside the director’s Outlook: read and file their email, manage their calendar, accept meetings and send emails on their behalf — all from your own Outlook, with your own login.

:::warn Never use the director’s password
You should never log in as the director. Delegate access exists so that every action is recorded as yours, with the director’s permission. If anyone suggests sharing the password, ask IT to set up delegate access instead.
:::

## The three ways to send for someone else
| Permission | How the recipient sees it | Who sets it up |
|---|---|---|
| Send on behalf | “Neha Joshi on behalf of Vikram Shah” | Director (classic Outlook delegate settings) or IT |
| Send as | “Vikram Shah” — no sign that you sent it | IT administrator only |
| Full access to mailbox | You can open and manage all folders | IT administrator |

Most companies give EAs **Full access** plus **Send on behalf**. Send as is used only when the director wants emails to appear as fully their own.

## Setting up delegate access in classic Outlook
The director does this on their computer:
1. **File → Account Settings → Delegate Access → Add**.
2. Choose the EA’s name.
3. Set permissions per folder:

| Level | Meaning |
|---|---|
| None | No access |
| Reviewer | Can read items |
| Author | Can read and create items |
| Editor | Can read, create and change items (needed to manage the calendar) |

4. Choose whether the delegate receives copies of meeting-related messages, and whether the delegate can see private items.

## New Outlook and the web
- **Calendar**: the director shares the calendar with you and chooses **Delegate** (or **Can edit**).
- **Mailbox**: Full access and Send as / Send on behalf are normally set up by the IT administrator. Ask IT for exactly what you need.

## Opening the director’s mailbox
- New Outlook: right-click **Shared with me** (or your account name) in the folder pane → **Add shared folder or mailbox** → type the director’s name.
- Classic: often appears automatically in the folder pane. If not: **File → Account Settings → Account Settings → Change → More Settings → Advanced → Add** the mailbox.

## Sending from the director’s mailbox
In a new email, show the **From** field (new Outlook: **⋯ → Show From**; classic: **Options → From**), then choose or type the director’s address. Check the From line on every message before sending.

:::tip Where do sent items go?
Emails you send on behalf of the director may be saved in **your** Sent Items rather than the director’s. Ask IT to change this setting so that the director’s Sent Items stay complete.
:::
`
},
{
title: 'Managing the director’s inbox and calendar day to day',
minutes: 10,
body: `
## Agree the rules first
Before you touch the director’s mailbox, agree in writing:
- Which emails you may reply to directly, and in whose name.
- Which emails you must never open (personal, HR, board) — set up folders or rules for them.
- How you will mark what you have handled.
- Who decides on meeting invitations: you, or the director after your recommendation.

## A system for the director’s inbox
Use categories that both of you understand:
| Category | Meaning for the director |
|---|---|
| Director — action | You need to read and decide |
| Director — FYI | Read when you have time |
| EA handled | I’ve dealt with it; no action needed |
| Waiting | We’re waiting for someone else |

:::example A morning routine with the director’s inbox
1. Open the director’s inbox and filter **Unread**.
2. Handle what you can (scheduling, logistics, routine replies) and categorise **EA handled**.
3. Categorise decisions **Director — action** and list them in the daily brief.
4. File newsletters and notifications.
5. Mark emails you opened but the director must still read as **unread** again ([[Ctrl+U]]), if the director relies on bold to know what’s new.
:::

## Handling meeting invitations for the director
- Check priority, conflicts and travel time before accepting.
- **Tentative** while you check with the director; then **Accept** or **Decline** with a note.
- When accepting, add the meeting category, check the location or Teams link, and attach documents to the calendar entry.
- When the invitation has no agenda, ask the organiser for one.

## Creating entries in the director’s calendar
Open the director’s calendar (tick it in the folder pane), then create the event **in that calendar**, not in yours. Check the calendar name shown in the event window before you send.

:::warn The most common delegate mistake
Creating a meeting in your own calendar instead of the director’s. Invitations then come from you, and the director’s calendar shows nothing. Always check which calendar is selected.
:::

## Weekly calendar audit
Every Friday:
- [ ] Every meeting next week has a location or link and a purpose.
- [ ] Travel time is blocked.
- [ ] Prep time is blocked before P1 meetings.
- [ ] No unanswered invitations.
- [ ] Recurring meetings still needed? Any to cancel or shorten?
- [ ] Out-of-office and holidays marked.
`
}
  ],
  quiz: [
    { q: "How does a recipient see an email sent with ‘Send on behalf’ permission?", o: ["As from the director only", "As ‘Neha Joshi on behalf of Vikram Shah’", "As from the IT department", "As anonymous"], a: 1, why: "Send on behalf shows both names; Send as shows only the director’s." },
    { q: "Which delegate level is needed to manage the director’s calendar in classic Outlook?", o: ["Reviewer", "Author", "Editor", "None"], a: 2, why: "Editor can read, create and change items." },
    { q: "Is it acceptable for the EA to log in with the director’s password to manage email?", o: ["Yes, if the director agrees", "No — delegate access should be used instead", "Only on weekends", "Only for calendar work"], a: 1, why: "Delegate access records every action as the EA’s, with permission." },
    { q: "What is the most common delegate mistake?", o: ["Using categories", "Creating the meeting in your own calendar instead of the director’s", "Accepting meetings", "Opening the shared mailbox"], a: 1, why: "Always check which calendar is selected before sending." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Contacts, tasks and To Do',
  summary: 'Keep a clean address book, use contact groups, and run your follow-ups through tasks and To Do.',
  lessons: [
{
title: 'Contacts and contact groups',
minutes: 7,
body: `
## A clean contact book saves time every day
Save every important external person as a contact, with complete details.

**Create a contact**
- From an email: hover over or right-click the sender’s name → **Add to contacts**.
- New: **People** ([[Ctrl+3]]) → **New contact**. Classic shortcut [[Ctrl+Shift+C]].

**What to fill in**
- Full name exactly as they write it, job title, company.
- Mobile and office phone, email.
- Assistant’s name and number (in the notes or assistant field).
- Address, with landmark for drivers.
- Notes: how you know them, preferences, birthday.
- Category: Client, Vendor, Banker, VIP.

:::tip Scan visiting cards immediately
After every meeting, add new visiting cards to contacts the same day. Write the date and occasion in the notes: “Met at Dubai expo, Oct 2026”.
:::

## Contact groups (distribution lists)
A contact group lets you email a fixed set of people by typing one name — “Board members”, “Department heads”, “Factory managers”.
- New Outlook: **People → New contact list**.
- Classic: **People → New Contact Group**, or [[Ctrl+Shift+L]].

Name groups clearly, and keep them up to date when people join or leave.

:::warn Groups and Reply All
When you send to a group, everyone in it may receive replies sent to all. For external groups, put the group in **Bcc**.
:::

## Company directory
For colleagues, use the global address list (company directory) rather than saving your own copies — it stays updated automatically. Search it in the To field or with [[Ctrl+Shift+B]] in classic.
`
},
{
title: 'Tasks, To Do and flagged items',
minutes: 8,
body: `
## One list for everything you must do
An EA receives work from email, meetings, calls and conversations. If these live in different places, things get missed. Bring them into one list.

## Microsoft To Do inside Outlook
- **Flagged emails** appear automatically in To Do under **Flagged email**.
- Create tasks directly: new Outlook — **To Do** in the app bar, or the **My Day** panel; classic — **Tasks** ([[Ctrl+4]]) or the To-Do bar, shortcut [[Ctrl+Shift+K]].
- Each task can have a due date, a reminder, notes, steps and a repeat schedule.

## Turn emails into tasks
- **Flag** an email with a date — the simplest way.
- **Drag** an email onto the To Do icon or the task list to create a task with the email attached.

## Block time for tasks
A task list tells you *what*; the calendar tells you *when*. Drag important tasks into the calendar to give them a time slot, for example “Prepare board pack — 2 pm to 4 pm”. In new Outlook, drag from **My Day** onto the calendar.

## Recurring tasks
Set repeats for routine work: “Reconcile corporate card — monthly on the 5th”, “Send open-items summary — every Friday”.

## Keep the list honest
- Mark tasks complete as soon as they are done.
- Review the list every morning and evening.
- If a task keeps moving, either schedule it properly, delegate it, or delete it.

:::tip Lists that work for an EA
**Today**, **Director requests**, **Waiting for**, **This week**, **Recurring**. Five lists are enough.
:::
`
}
  ],
  quiz: [
    { q: "Where do flagged emails appear automatically?", o: ["In the Deleted Items folder", "In Microsoft To Do under Flagged email", "In the calendar", "In the Sent Items"], a: 1, why: "Flags turn emails into to-do items." },
    { q: "Which is the best way to email a fixed list of all department heads?", o: ["Type each name every time", "Use a contact group", "Forward an old email", "Use Bcc only"], a: 1, why: "Contact groups (contact lists) save time and reduce errors." },
    { q: "Why drag a task into the calendar?", o: ["To delete it", "To give it a time slot so it actually gets done", "To share it with the director", "To set high importance"], a: 1, why: "A list says what; the calendar says when." }
  ]
},
/* ---------------------------------------------------------------- */
{
  title: 'Productivity, automation and security',
  summary: 'Keyboard shortcuts, automatic replies, voting and mail merge, and how to protect the mailbox from fraud.',
  lessons: [
{
title: 'Keyboard shortcuts: the master list',
minutes: 6,
body: `
## Learn five a week
Shortcuts are the fastest way to become quick in Outlook. Don’t try to learn all of them at once; pick five, use them for a week, then add five more.

## Windows — mail
| Action | Shortcut |
|---|---|
| New email (anywhere) | [[Ctrl+Shift+M]] |
| New item in current view | [[Ctrl+N]] |
| Reply | [[Ctrl+R]] |
| Reply all | [[Ctrl+Shift+R]] |
| Forward | [[Ctrl+F]] classic, [[Ctrl+Shift+F]] new Outlook |
| Send | [[Alt+S]] or [[Ctrl+Enter]] |
| Mark as read | [[Ctrl+Q]] |
| Mark as unread | [[Ctrl+U]] |
| Move to folder | [[Ctrl+Shift+V]] (classic) |
| Search | [[Ctrl+E]] or [[F3]] |
| Check names | [[Ctrl+K]] |
| Delete | [[Delete]] |
| Undo | [[Ctrl+Z]] |

## Windows — switching and creating
| Action | Shortcut |
|---|---|
| Go to Mail | [[Ctrl+1]] |
| Go to Calendar | [[Ctrl+2]] |
| Go to People | [[Ctrl+3]] |
| Go to Tasks / To Do | [[Ctrl+4]] |
| New appointment | [[Ctrl+Shift+A]] |
| New meeting | [[Ctrl+Shift+Q]] |
| New contact | [[Ctrl+Shift+C]] |
| New task | [[Ctrl+Shift+K]] |
| Address book | [[Ctrl+Shift+B]] (classic) |
| Go to a date in calendar | [[Ctrl+G]] (classic) |

## Mac
| Action | Shortcut |
|---|---|
| New email | [[Cmd+N]] |
| Reply | [[Cmd+R]] |
| Reply all | [[Cmd+Shift+R]] |
| Forward | [[Cmd+J]] |
| Send | [[Cmd+Return]] |
| Mail / Calendar / People / Tasks | [[Cmd+1]] / [[Cmd+2]] / [[Cmd+3]] / [[Cmd+4]] |
| Undo | [[Cmd+Z]] |

:::tip Check your shortcut set
In new Outlook and on the web you can choose which shortcut style to use: **Settings → General → Accessibility → Keyboard shortcuts**. Choose **Outlook** to match classic Outlook.
:::

## Week 1 set
[[Ctrl+Shift+M]], [[Ctrl+R]], [[Ctrl+Shift+R]], [[Ctrl+1]] / [[Ctrl+2]], [[Ctrl+E]]. Use only these for one week until they become automatic.
`
},
{
title: 'Automatic replies, voting and mail merge',
minutes: 9,
body: `
## Automatic replies (out of office)
Turn on automatic replies when you or the director are away, so that people know who to contact.

- New Outlook: **Settings → Accounts → Automatic replies**.
- Classic: **File → Automatic Replies**.

Set:
1. **Turn on automatic replies**.
2. **Send replies only during a time period** — set start and end, so you don’t have to remember to switch it off.
3. **Inside your organisation** — a short internal message.
4. **Outside your organisation** — a more formal message. Choose **Anyone outside** or **My contacts only**.

:::template Out-of-office message (external)
Thank you for your email. I am out of the office from Monday, 15 December, returning on Monday, 22 December, with limited access to email.

For urgent matters, please contact Rahul Verma at rahul.verma@yourcompany.in or +91 98XXX XXXXX.

Best regards,
Neha Joshi
:::

:::warn Don’t over-share
External replies should not say where you are or why. “Out of the office” is enough. Never publish the director’s travel details in an automatic reply.
:::

## Voting and polls
Need a quick decision from several people — “Which date works for the offsite?”
- Classic: in a new email, **Options → Use Voting Buttons** → *Approve;Reject*, *Yes;No* or *Custom* (for example *12 Dec;13 Dec;14 Dec*). Responses are tallied in the original message’s **Tracking** view.
- New Outlook and the web: use **Poll** (Microsoft Forms) from the message toolbar or apps menu, where your company has enabled it.

## Mail merge: personalised emails to many people
Use Word with Excel to send each person their own email — for example, invitations with each guest’s name.
1. Prepare an Excel sheet: columns *First name*, *Email*, and any other details.
2. In Word: **Mailings → Start Mail Merge → E-mail Messages**.
3. **Select Recipients → Use an Existing List** → choose the Excel file.
4. Write the email; use **Insert Merge Field** to add the name and other fields.
5. **Preview Results** to check several records.
6. **Finish & Merge → Send Email Messages** → choose the Email column, write the subject, and send.

Mail merge sends through the Outlook desktop app, so classic Outlook must be set up on that computer. Send a test to yourself first.

@lab 11 Practise: set up automatic replies
`
},
{
title: 'Email security and etiquette',
minutes: 10,
body: `
## EAs are prime targets for fraud
Attackers know that EAs can make payments happen, share documents and reach the director. The most dangerous attacks don’t contain viruses — they contain convincing words.

## Common attacks
| Attack | What it looks like |
|---|---|
| Phishing | “Your password expires today — click here to keep it.” Leads to a fake login page. |
| CEO / director fraud | An email “from the director”: “I’m in a meeting, urgently transfer ₹8 lakh to this vendor, keep it confidential.” |
| Invoice fraud | A known vendor’s email says their bank account has changed. |
| Fake delivery or document | “You have a secure document waiting” or “Courier failed — confirm address”. |
| Gift card scam | “Buy 10 gift cards for clients and send me the codes.” |

## Warning signs
- **Urgency or secrecy**: “immediately”, “confidential”, “don’t call me”.
- **Sender address doesn’t match**: the name says “IT Helpdesk” but the address is from an outside domain, or a letter is changed (m1crosoft, yourcompany-secure.net).
- **External tag** on an email that claims to be internal.
- **Links whose real address differs** from the text. Hover over a link to see where it goes — don’t click.
- **Requests for passwords, OTPs or payment changes.** No genuine IT team asks for your password.
- Unexpected attachments, especially .zip, .html or files that ask you to “enable content”.

:::warn The golden rule for payment requests
Any request to pay money, change bank details or buy gift cards must be **verified by phone on a number you already know** — never on a number given in the email. This rule has no exceptions, even if the email appears to come from the director.
:::

## What to do with a suspicious email
1. Don’t click links, don’t open attachments, don’t reply.
2. Use **Report → Report phishing** on the ribbon (or your company’s report button).
3. If you clicked or entered a password, tell IT **immediately** and change your password. Speed limits the damage.

## Protecting what you send
- Use **Encrypt** or a sensitivity label for confidential emails, if your company has them set up.
- Send passwords for protected files in a **separate message or by phone**, never in the same email.
- Double-check recipients before sending anything confidential.

## Etiquette that marks a professional
- Reply to business emails within one working day, even if only to say when you will answer fully.
- Keep subject lines accurate; change the subject when a thread changes topic.
- Don’t write anything you wouldn’t want forwarded.
- Use Reply All only when everyone needs your reply.
- Avoid sending emails late at night to junior colleagues — use Schedule send.
- No ALL CAPS — it reads as shouting.

@lab 7 Practise: spot and report the phishing email
`
}
  ],
  quiz: [
    { q: "An email that appears to be from the director asks you to urgently pay a new vendor and keep it confidential. What do you do?", o: ["Pay it — it’s from the director", "Reply to the email to confirm", "Verify by calling the director on a number you already know", "Forward it to the vendor"], a: 2, why: "Every payment or bank-change request is verified by phone on a known number." },
    { q: "How can you see where a link really goes without clicking it?", o: ["Right-click and open", "Hover over the link", "Reply to the sender", "Forward it to yourself"], a: 1, why: "Hovering shows the real address." },
    { q: "Which setting makes automatic replies switch off on their own?", o: ["Inside my organisation", "Send replies only during this time period", "My contacts only", "High importance"], a: 1, why: "A time range turns them on and off automatically." },
    { q: "Where should the password for a protected file be sent?", o: ["In the same email", "In the subject line", "Separately, by another message or phone", "In the file name"], a: 2, why: "Never send the key with the lock." },
    { q: "Which is a warning sign of phishing?", o: ["The email has your name in it", "Urgency, secrecy and a mismatched sender address", "It arrived in the morning", "It has a signature"], a: 1, why: "Urgency, secrecy and odd addresses are the classic signs." }
  ]
}
]);
