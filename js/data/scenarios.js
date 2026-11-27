/* Scenario practice (Course 1) and travel desk missions (Course 3)
   Scoring per option: s = 2 (best), 1 (acceptable), 0 (risky) */

ACADEMY.scenarios.ea = [
{
  title: 'The 3 pm clash',
  tag: 'Calendar',
  brief: 'Wednesday, 11:00 am. Your director, Vikram Shah, has a meeting on Thursday at 3 pm with Rajesh Mehta of Horizon Retail, a top client, booked two weeks ago. Rajesh is driving in from Pune for it. The chairman’s EA calls: the chairman wants 30 minutes with Vikram on Thursday at 3 pm about a bank letter. She says it is important.',
  steps: [
    { q: 'What do you do first?', options: [
      { t: 'Accept the chairman’s request. The chairman always comes first.', s: 0, f: 'You would be moving a top client who is travelling from Pune, without asking anyone. The chairman is Tier 1, but this is a P1 clash: never decide it alone.' },
      { t: 'Tell the chairman’s EA the slot is taken, ask whether 4:30 or Friday morning would work for him, then check whether Rajesh can flex — and take the options to Vikram.', s: 2, f: 'Exactly. You gather options from both sides before going to the director, so he can decide in seconds.' },
      { t: 'Tell the chairman’s EA that Vikram is busy and close the conversation.', s: 0, f: 'The chairman is Tier 1. Refusing without offering alternatives damages an important relationship.' },
      { t: 'Email Vikram: “You have a clash at 3 pm Thursday. What should I do?”', s: 1, f: 'Escalating is right, but without options you are handing the director a problem instead of a decision.' }
    ]},
    { q: 'The chairman can do 4:30 pm. Rajesh could also move to Friday 11 am. How do you present this to Vikram?', options: [
      { t: '“Sir, clash at 3 pm Thursday — chairman wants 30 min on the bank letter. Option A: chairman at 4:30, his EA confirms it works. Option B: Rajesh to Friday 11. I suggest A, since Rajesh is driving from Pune. Shall I go ahead?”', s: 2, f: 'Clear, short, options plus a recommendation. This is the standard to aim for.' },
      { t: '“Sir, the chairman wants 3 pm Thursday. Shall I cancel Rajesh?”', s: 0, f: 'This offers only one option and suggests cancelling a top client. Always present at least two options.' },
      { t: 'Move Rajesh to Friday yourself — he said he is flexible.', s: 1, f: 'It may turn out fine, but moving a P1 external meeting is a “recommend and ask” decision unless the director has given you that authority.' }
    ]}
  ],
  debrief: 'For any clash between two important meetings: collect the facts and alternatives from both sides, then give the director two clear options and your recommendation. Never decide a P1 conflict alone, and never bring a problem without options.'
},
{
  title: 'The unannounced visitor',
  tag: 'Gatekeeping',
  brief: '12:15 pm. Mr. Desai, a senior partner of an important supplier, arrives at reception without an appointment. “I just need five minutes with Vikram — he knows me well.” Vikram is in a department review until 1 pm and fully booked afterwards until 4:30.',
  steps: [
    { q: 'What do you do?', options: [
      { t: 'Receive him warmly, seat him, offer tea, ask briefly what it is about, and pass Vikram a short written note.', s: 2, f: 'He is treated with respect, and the director decides with the facts in hand. You also learnt the purpose, which helps route him if Vikram can’t meet.' },
      { t: 'Walk him straight into the review meeting.', s: 0, f: 'Never bring a visitor into a meeting without the director’s agreement.' },
      { t: 'Tell him Vikram does not meet anyone without an appointment and he should email you.', s: 0, f: 'Too cold for an important supplier. The rule can be applied politely, with an alternative.' },
      { t: 'Ask him to wait until 1 pm without telling Vikram.', s: 1, f: 'He may wait 45 minutes only to be told no. Let the director decide early.' }
    ]},
    { q: 'Vikram’s note comes back: “Can’t today. If it’s urgent, Karan can meet him.” Mr. Desai says it is about the delayed stone delivery. What do you say?', options: [
      { t: '“Mr. Desai, Mr. Shah is tied up all day and asked me to apologise. Karan Malhotra is handling the stone deliveries and can see you in ten minutes. Or I can book thirty minutes with Mr. Shah on Monday. Which would you prefer?”', s: 2, f: 'Polite, uses the director’s authority, and offers two real options.' },
      { t: '“Sir said he can’t meet you today.”', s: 0, f: 'Blunt, and it offers nothing. The visitor leaves unhappy.' },
      { t: '“Please come back at 4:30, he might be free then.”', s: 1, f: 'Vague promises waste the visitor’s time and can embarrass the director.' }
    ]}
  ],
  debrief: 'Gatekeeping is a filter, not a wall. Treat every visitor with respect, let the director decide quickly with the facts, and always leave the visitor with a concrete alternative.'
},
{
  title: 'The angry client',
  tag: 'Communication',
  brief: 'Rajesh Mehta of Horizon Retail calls, very upset. His shipment has been delayed for the second time and his stores open a promotion on Monday. He demands to speak to Vikram right now. Vikram is on a flight and lands in two hours.',
  steps: [
    { q: 'How do you handle the call?', options: [
      { t: 'Let him speak, acknowledge his frustration, confirm the key facts back to him, and promise a call-back from Vikram at a specific time soon after landing.', s: 2, f: 'He feels heard, the facts are captured, and the promise is specific and realistic.' },
      { t: 'Explain that the delay is the production team’s fault, not Vikram’s.', s: 0, f: 'Never blame colleagues to a client. The company is one team to the customer.' },
      { t: 'Give him Vikram’s personal mobile number so he can call directly.', s: 0, f: 'Never share the director’s personal number without permission.' },
      { t: 'Transfer him straight to Karan in sales without listening.', s: 1, f: 'Karan may well be the right person, but transferring an angry client before listening makes him angrier.' }
    ]},
    { q: 'The call ends. What do you do next?', options: [
      { t: 'Ask Karan for the real status and a revised date right now, then send Vikram a short message to read on landing: the complaint, Karan’s update and the call-back time you promised.', s: 2, f: 'When Vikram lands, he has everything he needs to call Rajesh with answers, not apologies.' },
      { t: 'Wait until Vikram lands and tell him then.', s: 1, f: 'You lose two hours in which you could have gathered the facts.' },
      { t: 'Call Rajesh back and promise a 5% discount to calm him down.', s: 0, f: 'Never commit money or terms on the director’s behalf.' }
    ]}
  ],
  debrief: 'With an upset caller: listen, acknowledge, confirm facts and promise only what you control. Then use the time before the director is available to prepare the answer, so the director calls back with solutions.'
},
{
  title: 'The wrong recipient',
  tag: 'Mistakes',
  brief: 'Two minutes ago you sent the draft salary-revision sheet, meant for Sunita (HR head), to Sunil, a sales executive. Outlook’s autocomplete picked the wrong name.',
  steps: [
    { q: 'What do you do right now?', options: [
      { t: 'Try to recall the message immediately, call Sunil and politely ask him to delete it without opening it, then inform the director and Sunita.', s: 2, f: 'Speed matters. Recall may or may not work, so the phone call is essential. Then tell the people who need to know.' },
      { t: 'Do nothing and hope he doesn’t open it.', s: 0, f: 'If he opens it, a hidden mistake becomes a much bigger trust problem.' },
      { t: 'Send Sunil a second email: “Please ignore the previous email.”', s: 1, f: 'It acts quickly, but it draws attention to the first email. A call is better.' },
      { t: 'Delete it from your Sent Items so there is no trace.', s: 0, f: 'Deleting your copy does nothing about his copy and looks like hiding the mistake.' }
    ]},
    { q: 'How do you tell the director?', options: [
      { t: '“Sir, I sent the draft salary sheet to Sunil in sales instead of Sunita by mistake at 10:40. I tried a recall and called him; he confirmed he deleted it without opening. I’ve informed Sunita. From now on I check names on every confidential email before sending.”', s: 2, f: 'What happened, the impact, the fix and the prevention — brief and honest.' },
      { t: 'A long apology explaining that Outlook’s autocomplete is unreliable.', s: 0, f: 'Don’t blame the tool and don’t over-apologise. Own it and explain the fix.' },
      { t: 'Don’t mention it unless Sunil says something.', s: 0, f: 'The no-surprises rule applies to your own mistakes too.' }
    ]}
  ],
  debrief: 'Own mistakes quickly in four parts: what happened, the impact, the fix and the prevention. Act first, then inform — and add a check to your routine so it doesn’t repeat.'
},
{
  title: 'Two urgent requests',
  tag: 'Priorities',
  brief: '1:00 pm. Karan (sales head) asks you to format his client presentation by 3 pm. Anita (finance head) asks you to compile the board pack by 3 pm for Vikram’s board meeting tomorrow morning. Both say it’s urgent. You can only finish one by 3.',
  steps: [
    { q: 'What do you do?', options: [
      { t: 'Do the board pack first — it’s for your director’s board meeting. Tell Karan honestly when you can do his, and offer a quick alternative (a template he can use, or another assistant).', s: 2, f: 'Your director’s priorities come first, and Karan gets an honest answer and options instead of silence.' },
      { t: 'Do Karan’s first because he asked first.', s: 0, f: 'First-come-first-served is not how an EA prioritises. The director’s board meeting is the higher priority.' },
      { t: 'Do half of each so nobody is upset.', s: 0, f: 'Two half-finished jobs help nobody, and both people are let down at 3 pm.' },
      { t: 'Ask Vikram which to do first.', s: 1, f: 'Asking is never wrong when you are unsure, but this one is clear — save the director’s time for real decisions.' }
    ]}
  ],
  debrief: 'When requests compete, the director’s priorities decide. Tell everyone else honestly when you can help and offer alternatives. Escalate only real dilemmas.'
},
{
  title: 'The friendly fishing question',
  tag: 'Confidentiality',
  brief: 'At lunch, a manager you are friendly with says: “I heard there’s going to be a restructuring in sales. Is my team affected? You must know — you see everything.” You do know, from a board paper.',
  steps: [
    { q: 'What do you say?', options: [
      { t: '“I’m not able to talk about anything like that. If you’re worried, I can let Sir know you’d like a conversation with him.”', s: 2, f: 'Friendly, firm, neither confirms nor denies — and offers a proper route.' },
      { t: '“I can’t say anything, but don’t worry.”', s: 0, f: '“Don’t worry” is a hint. It reveals information.' },
      { t: '“Yes, but keep it to yourself.”', s: 0, f: 'A serious breach of confidentiality — this could cost you the director’s trust and your job.' },
      { t: '“I don’t know anything about it.”', s: 1, f: 'It keeps the secret, but it is a lie, and if it comes out later it damages your credibility. Decline to discuss instead.' }
    ]}
  ],
  debrief: 'Never confirm, deny or hint. Decline politely in the same way every time, so that silence itself doesn’t become a signal, and offer to route genuine concerns to the director.'
},
{
  title: 'The urgent payment email',
  tag: 'Security',
  brief: 'An email arrives from “Vikram Shah” while he is on a flight: “Neha, urgently arrange a transfer of ₹8.5 lakh to the new vendor for the Dubai stall booking — details attached. I’m in meetings and can’t talk. Keep this confidential.” The sender address is vikram.shah@yourcompany-mail.com.',
  steps: [
    { q: 'What do you do?', options: [
      { t: 'Don’t act on it. Notice the wrong domain, verify with Vikram by calling his known number (or when he lands), report the email to IT and alert finance.', s: 2, f: 'Urgency, secrecy, a payment and an odd sender address are the classic signs of director fraud. Verification on a known number is the rule.' },
      { t: 'Forward it to finance so the payment isn’t delayed.', s: 0, f: 'This is exactly what the fraudster wants.' },
      { t: 'Reply and ask: “Is this genuine?”', s: 0, f: 'Your reply goes to the fraudster, who will happily say yes.' },
      { t: 'Call the phone number in the email’s signature to verify.', s: 0, f: 'That number belongs to the fraudster. Only use numbers you already know.' }
    ]},
    { q: 'Vikram confirms he never sent it. What next?', options: [
      { t: 'Report it as phishing, inform IT security and finance so they can watch for similar emails, and keep the email as evidence.', s: 2, f: 'Others in the company may have received the same email. Reporting protects them.' },
      { t: 'Delete it and move on.', s: 0, f: 'Deleting loses the evidence and leaves colleagues exposed.' },
      { t: 'Reply to the fraudster to warn them you know.', s: 0, f: 'Never engage with attackers. It confirms your address is active.' }
    ]}
  ],
  debrief: 'Any request to pay money, change bank details or buy gift cards is verified by phone on a number you already know — even when it appears to come from the director. Report, don’t delete.'
},
{
  title: 'The director snaps',
  tag: 'Pressure',
  brief: 'In front of two managers, Vikram says sharply: “Why wasn’t I told the bank meeting moved to 2 pm?” You emailed him at 9 am about it, but he hadn’t read it.',
  steps: [
    { q: 'How do you respond?', options: [
      { t: 'Stay calm and give him what he needs now: “The bank RM moved it to 2 pm. You’re free then, and the papers are in your folder.” Later, privately, suggest same-day changes go by WhatsApp or a call as well as email.', s: 2, f: 'You solve the immediate need, protect his standing in front of others, and fix the process afterwards.' },
      { t: '“I emailed you at 9, Sir. You didn’t read it.”', s: 0, f: 'Correct, perhaps, but saying it in front of others embarrasses him and helps nobody.' },
      { t: 'Apologise repeatedly and say it was entirely your fault.', s: 1, f: 'Staying calm is good, but excessive apology isn’t needed. Focus on the solution and the process fix.' },
      { t: 'Say nothing and walk away upset.', s: 0, f: 'The director still doesn’t have the information he needs.' }
    ]}
  ],
  debrief: 'In tense moments, give the director what they need first. Fix the process privately afterwards: agree which channel to use for urgent, same-day changes.'
},
{
  title: 'Too much work',
  tag: 'Self-management',
  brief: '10:00 am. You have nine tasks with deadlines today and tomorrow: a board pack, two travel bookings, expense claims, minutes from yesterday, a client visit plan, gift list follow-ups, a presentation clean-up and filing.',
  steps: [
    { q: 'What is the best approach?', options: [
      { t: 'List everything with deadlines, ask the director in the huddle to confirm the top three, and tell the owners of the others about revised timelines.', s: 2, f: 'Clarity on priorities from the director, honest timelines for everyone else.' },
      { t: 'Work late every night until everything is done.', s: 1, f: 'Sometimes needed, but as a habit it leads to mistakes and burnout. Prioritise first.' },
      { t: 'Start with the quickest tasks so the list gets shorter.', s: 0, f: 'It feels productive, but important work slips. Do what matters first; use the 2-minute rule only for tiny tasks.' }
    ]}
  ],
  debrief: 'Capture everything, prioritise with the director, and re-negotiate timelines openly. Overload handled silently becomes missed deadlines.'
},
{
  title: 'A family call during the board meeting',
  tag: 'Crisis',
  brief: 'Vikram is chairing a board meeting with an important vote. His wife calls: his father has had a fall and has been admitted to hospital. It is not life-threatening, but she wants Vikram to come.',
  steps: [
    { q: 'What do you do?', options: [
      { t: 'Interrupt discreetly with a written note giving the facts, have the car and driver ready, and start clearing the afternoon calendar.', s: 2, f: 'Family emergencies are Tier 1. The director decides, and you’ve prepared everything for whatever he chooses.' },
      { t: 'Wait for the break in two hours.', s: 0, f: 'This is exactly the kind of matter the director would want to know immediately.' },
      { t: 'Call his mobile while he is in the meeting.', s: 1, f: 'It reaches him, but a written note is more discreet in a board meeting.' },
      { t: 'Ask his wife to call back after the meeting.', s: 0, f: 'Never decide for the director on family matters.' }
    ]},
    { q: 'Vikram leaves for the hospital. What next?', options: [
      { t: 'Inform the chairman’s office or the company secretary as Vikram directs, reschedule his afternoon with a brief message (“an urgent personal matter”), and check in with Vikram once, later, by message.', s: 2, f: 'Business continues smoothly and his privacy is protected.' },
      { t: 'Tell everyone that his father is in hospital.', s: 0, f: 'Family and health matters are private. “An urgent personal matter” is enough.' },
      { t: 'Keep calling Vikram for updates.', s: 0, f: 'He needs space. One check-in message is enough.' }
    ]}
  ],
  debrief: 'Family and safety come first. Interrupt discreetly, prepare logistics, protect privacy and keep the business running in the background.'
},
{
  title: 'The monthly card statement',
  tag: 'Finance',
  brief: 'It is 2 December. The November corporate card statement has arrived: 16 lines, ₹66,531.25, payment due on 20 December. You have matched most lines to receipts. Four need a decision.',
  steps: [
    { q: 'PAYU*KRV SERVICES, ₹4,720. No receipt anywhere, and the name means nothing to you. What do you do?', options: [
      { t: 'Ask the director once whether he recognises it. If not, dispute it with the bank today and tell finance.', s: 2, f: 'Right. Unknown charges are disputed quickly, because banks set time limits, and finance needs to know before paying.' },
      { t: 'Mark it Chase receipt and look again next month.', s: 0, f: 'By next month the bank’s dispute window may be closing. Unknown charges cannot wait.' },
      { t: 'Put it under Other and submit. It is a small amount.', s: 0, f: 'Small unknown charges are often how card fraud starts. Every line needs proof and a purpose.' },
      { t: 'Call the bank and block the card immediately.', s: 1, f: 'If fraud is likely, blocking can be right, but check with the director first: blocking also stops every genuine subscription on the card.' }
    ]},
    { q: 'AIR INDIA LTD, ₹9,200, appears twice on 21 November. You can find only one e-ticket.', options: [
      { t: 'Check the airline account for a second booking. If there is only one, dispute the second charge with the bank as a duplicate.', s: 2, f: 'Exactly. Confirm first, then dispute. Note it in your follow-up tracker until the bank reverses it.' },
      { t: 'Assume the director booked two tickets and match both lines to the e-ticket.', s: 0, f: 'Two charges cannot match one ticket. That hides a ₹9,200 error.' },
      { t: 'Email Air India customer care for a refund and wait for their reply.', s: 1, f: 'It might work, but a bank dispute protects the company within the time limit. You can do both.' }
    ]},
    { q: 'AMAZON PAY INDIA, ₹3,499. The director tells you it was his personal headphones.', options: [
      { t: 'Record it as personal, show it in the summary, and recover it as per company policy.', s: 2, f: 'Open and simple. Personal spends on a corporate card are common mistakes; hiding them is the real problem.' },
      { t: 'Put it under Office supplies so the director is not embarrassed.', s: 0, f: 'Recording a personal purchase as a business expense is a serious policy breach, for you and for him.' },
      { t: 'Leave it off the reconciliation sheet.', s: 0, f: 'Then the sheet won’t balance, and the charge is still hidden.' }
    ]},
    { q: 'Your sheet adds up to ₹69,731.25. The statement total is ₹66,531.25. What is the most likely cause?', options: [
      { t: 'The ₹3,200 IndiGo refund line is missing. Credits reduce the total.', s: 2, f: 'The difference is exactly ₹3,200, the refund. Always enter credits as minus amounts.' },
      { t: 'The bank has made an error. Ask finance to pay your total.', s: 0, f: 'An exact, round difference almost always points to a missing or mistyped line on your side.' },
      { t: 'Add a ₹3,200 adjustment under bank charges so it balances.', s: 0, f: 'Never force a reconciliation to balance. Find the line.' },
      { t: 'Download the statement again.', s: 1, f: 'It won’t hurt, but the size of the difference already tells you where to look.' }
    ]}
  ],
  debrief: 'Every line needs proof and a business purpose. Unknown and duplicate charges are disputed quickly, personal spends are recorded openly and recovered, refunds are minus amounts, and the sheet must balance exactly before it goes to finance.'
},
{
  title: 'The monthly renewals check',
  tag: 'Renewals',
  brief: 'First working day of December. You open the renewals register and filter for ACT NOW. Three items need you: Vikram’s passport (expires 14 August 2027; he flies to Dubai in February), the company domain yourcompany.in (the registrar emailed overnight: auto-renew failed), and the family health insurance (expires 10 December).',
  steps: [
    { q: 'Vikram’s passport is valid for 8 more months, and he travels to Dubai in February. What do you do?', options: [
      { t: 'Start the renewal now: fill the online form, book a Passport Seva appointment around his calendar, and check whether any visas in the old passport need attention.', s: 2, f: 'Right. By February he would have about 6 months left, which is the minimum many countries accept. Starting now keeps the trip safe.' },
      { t: 'Wait until after the Dubai trip. The passport is still valid.', s: 0, f: 'Risky. Many countries, including the UAE, need 6 months’ validity on arrival. He would be right at the edge.' },
      { t: 'Remind Vikram to renew it himself when he has time.', s: 1, f: 'It is his document, but driving the renewal is your job. Left to him, it usually slips until it is urgent.' }
    ]},
    { q: 'The registrar’s email says the saved card was declined, and the domain expires in 9 days.', options: [
      { t: 'Today: tell the IT head, update the payment card on the registrar account, renew manually, and confirm the new expiry date in writing.', s: 2, f: 'Exactly. An expired domain takes the company’s email and website down. Then update the register and the card expiry note.' },
      { t: 'Leave it. The registrar will try again automatically.', s: 0, f: 'It will try the same declined card. Domains lapse exactly like this.' },
      { t: 'Forward the email to IT and mark it done.', s: 1, f: 'Forwarding is a start, but it is only done when you see the new expiry date. Follow up until then.' }
    ]},
    { q: 'The health insurance expires on 10 December. Vikram is travelling all week and back on the 9th.', options: [
      { t: 'Send him a one-line summary by WhatsApp (same cover, premium ₹38,420), get his OK, pay, file the policy and update the register.', s: 2, f: 'A decision he can make in ten seconds from anywhere, and no risk of a lapse.' },
      { t: 'Wait until he is back on the 9th.', s: 0, f: 'One delayed flight and the policy lapses. Lapses can reset waiting periods.' },
      { t: 'Increase the cover while renewing, since medical costs keep rising.', s: 0, f: 'Changing cover and premium is his decision. Recommend it; don’t decide it.' }
    ]}
  ],
  debrief: 'Renewals are won by starting early. Act on everything marked ACT NOW the same day, get quick approvals in one line, and a renewal is only finished when you have seen the new expiry date and updated the register.'
}
];

/* ------------------------------------------------------------------ */
ACADEMY.scenarios.travel = [
{
  title: 'Day trip to Delhi',
  tag: 'Domestic',
  brief: 'Vikram must attend an 11:00 am meeting at DLF Cyber City, Gurgaon on Thursday, 12 December, and lunch with the client until about 2:30 pm. He has promised his family he’ll be home in Andheri for dinner at 9 pm. Preferences: aisle seat, non-stop flights, vegetarian meal. Policy allows flexible economy fares for him.',
  steps: [
    { q: 'Choose the outbound flight (Mumbai → Delhi).', options: [
      { t: 'IndiGo 6E 5021', d: '05:30 → 07:40, non-stop, Saver ₹6,900', s: 1, f: 'It works, but means leaving home around 3:15 am and waiting three hours in Delhi. Cheaper, but tiring before an important meeting.', it: 'Out: 6E 5021, BOM 05:30 → DEL 07:40' },
      { t: 'IndiGo 6E 2135', d: '07:15 → 09:25, non-stop, Flexi ₹8,450', s: 2, f: 'Lands with about 90 minutes for baggage and a 45–75 minute drive. Flexible fare for a director whose plans change. The right choice.', it: 'Out: 6E 2135, BOM T2 07:15 → DEL T1 09:25, Flexi' },
      { t: 'Air India AI 805', d: '08:00 → 10:10, non-stop, ₹9,200', s: 0, f: 'Only 50 minutes for baggage and a drive that can take 75 minutes in traffic. Any delay means missing the meeting.', it: 'Out: AI 805, BOM 08:00 → DEL 10:10' },
      { t: 'SpiceJet SG 8169', d: '06:40 → 10:55, 1 stop via Jaipur, ₹5,200', s: 0, f: 'A connection, a late arrival, and he prefers non-stop. It cannot get him to an 11 am meeting.', it: 'Out: SG 8169 via Jaipur, arr 10:55' }
    ]},
    { q: 'Choose the return flight (Delhi → Mumbai). He must be home by 9 pm.', options: [
      { t: 'Air India AI 2930', d: '14:30 → 16:40, ₹8,900', s: 0, f: 'He would have to leave Gurgaon around 1:15, in the middle of the client lunch.', it: 'Return: AI 2930, DEL 14:30 → BOM 16:40' },
      { t: 'Air India AI 2918', d: '16:10 → 18:20, ₹7,800, Delhi T3', s: 2, f: 'Comfortable after lunch, home by about 7:30, and later flights remain as backup if anything goes wrong.', it: 'Return: AI 2918, DEL T3 16:10 → BOM T2 18:20' },
      { t: 'IndiGo 6E 6201', d: '17:45 → 19:55, ₹6,800', s: 1, f: 'Works on paper, but with the drive home he arrives close to 9 pm. One delay and the family dinner is missed.', it: 'Return: 6E 6201, DEL 17:45 → BOM 19:55' },
      { t: 'IndiGo 6E 6814', d: '19:45 → 21:55, ₹6,100', s: 0, f: 'Lands after 9 pm. The promise to the family is broken.', it: 'Return: 6E 6814, DEL 19:45 → BOM 21:55' }
    ]},
    { q: 'How will he get around in Delhi?', options: [
      { t: 'Pre-booked car with driver for the day', d: 'Driver tracks the flight, waits at Gate 4 with a name board, stays on standby', s: 2, f: 'Reliable pickup, a car available between meetings, and you know exactly who to call.', it: 'Delhi: full-day car with driver, pickup Gate 4 with name board' },
      { t: 'Book an app cab after landing', d: 'Director books it himself on arrival', s: 1, f: 'Usually fine, but it puts work on the director, and there is no car on standby after the meeting.', it: 'Delhi: app cab booked on arrival' },
      { t: 'Ask Horizon to send their car', d: 'The client’s driver picks him up', s: 0, f: 'Don’t impose on the client unless they offer — and you lose control of timing.', it: 'Delhi: client’s car (requested)' },
      { t: 'Airport Express metro and an auto', d: 'Cheapest option', s: 0, f: 'Not appropriate for a director with a tight schedule and luggage.', it: 'Delhi: metro and auto' }
    ]},
    { q: 'What do you send the night before?', options: [
      { t: 'A day-of-travel message', d: 'Flights, terminals, seats, boarding passes, cab times, driver names and numbers, meeting address and contact, weather', s: 2, f: 'Everything on one screen. He can travel with just his phone.', it: 'Briefing: complete day-of-travel message sent the night before' },
      { t: 'Forward the airline’s e-ticket emails', d: 'He has all the bookings', s: 1, f: 'He has the tickets, but not the cars, the contacts or the meeting details. The itinerary is your job.', it: 'Briefing: e-tickets forwarded' },
      { t: 'Nothing — it’s all in his calendar', d: '', s: 0, f: 'Calendars rarely hold driver numbers, terminals and boarding passes. Always brief.', it: 'Briefing: none' }
    ]}
  ],
  debrief: 'Work backwards from the meetings and the promises. Choose flights that leave buffers and backups, arrange ground transport you control, and give the director the whole day on one screen.'
},
{
  title: 'Trade fair in Dubai',
  tag: 'International',
  brief: 'Today is 5 January. Vikram will attend a trade fair in Dubai from 10 to 12 February; his first booth meeting is 10 February at 10:00 am. He has an internal review in Mumbai on 9 February until 1 pm. His Indian passport expires on 20 May. He holds a valid US visa.',
  steps: [
    { q: 'What is your first action?', options: [
      { t: 'Check documents first: the passport will have only about three months’ validity after the trip — start an urgent passport renewal before booking anything.', s: 2, f: 'The UAE, like most countries, requires at least six months’ passport validity. Visas are tied to the passport number, so renew first.', it: 'Documents: passport renewal started first (validity under 6 months)' },
      { t: 'Book the flights now while fares are low; sort out documents later.', s: 0, f: 'Tickets are useless if he can’t board. Documents always come first.', it: 'Documents: not checked before booking' },
      { t: 'Apply for a UAE e-visa today with the current passport.', s: 0, f: 'The visa would be tied to a passport that doesn’t meet the six-month rule, and becomes useless when the passport is renewed.', it: 'Documents: e-visa on old passport' },
      { t: 'No visa needed — his US visa makes him eligible for a UAE visa on arrival.', s: 1, f: 'Good knowledge — Indian passport holders with a valid US visa may get a visa on arrival (check current rules) — but you missed the passport validity problem.', it: 'Documents: relying on visa on arrival; passport validity missed' }
    ]},
    { q: 'The new passport arrives in two weeks. Choose the flights (Mumbai ↔ Dubai).', options: [
      { t: 'Non-stop, 9 Feb 17:30 → 19:15 local; return 12 Feb 22:30 → 03:15', d: 'Business class, one ticket', s: 2, f: 'After his Mumbai review, arriving the evening before with time to rest. The return leaves after the fair closes.', it: 'Flights: non-stop BOM 9 Feb 17:30 → DXB 19:15; DXB 12 Feb 22:30 → BOM 03:15 (+1)' },
      { t: 'Non-stop, 10 Feb 04:00 → 05:45 local', d: 'Saves a hotel night', s: 0, f: 'No sleep before the first day of a trade fair, and any delay risks the 10 am meeting.', it: 'Flights: overnight 10 Feb 04:00 → 05:45' },
      { t: 'Non-stop, 9 Feb 08:00 → 09:45 local', d: 'Arrives with a full day to settle in', s: 0, f: 'It clashes with his Mumbai review until 1 pm on 9 February.', it: 'Flights: 9 Feb 08:00 departure (clashes with review)' },
      { t: 'Via Muscat on two separate tickets', d: '₹14,000 cheaper', s: 0, f: 'Separate tickets mean a missed connection is your problem, and he must re-check bags. Not for a director.', it: 'Flights: via Muscat, separate tickets' }
    ]},
    { q: 'Choose the hotel. The fair is at the Dubai World Trade Centre.', options: [
      { t: 'Business hotel 10 minutes from the venue', d: 'Club room, free cancellation, ₹22,000 per night with breakfast', s: 2, f: 'Close to the venue, club lounge for meetings, and flexible if plans change.', it: 'Hotel: business hotel 10 min from venue, club room, free cancellation' },
      { t: 'Beach resort on the Palm', d: '45–60 minutes in traffic, ₹18,000 per night', s: 0, f: 'Beautiful, but two hours a day in traffic during a working trip.', it: 'Hotel: beach resort, 45–60 min away' },
      { t: 'Budget hotel in Deira', d: '30+ minutes, non-refundable, ₹9,000 per night', s: 0, f: 'Far, non-refundable, and below what a director travelling to meet clients needs.', it: 'Hotel: budget, non-refundable, 30+ min away' },
      { t: 'Serviced apartment in Business Bay', d: '15 minutes, non-refundable, ₹16,000 per night', s: 1, f: 'A reasonable location, but non-refundable for a trip whose dates could still change.', it: 'Hotel: serviced apartment 15 min away, non-refundable' }
    ]},
    { q: 'Money, insurance and connectivity?', options: [
      { t: 'Forex card loaded in dirhams plus some cash, travel insurance with medical cover, bank informed of travel, roaming or eSIM activated and tested', d: '', s: 2, f: 'Safe spending, emergency cover and a phone that works on landing.', it: 'Money: AED forex card + some cash; insurance; roaming tested' },
      { t: 'Carry rupee cash and change it at the Dubai airport', d: '', s: 0, f: 'Poor rates, risk of loss, and no insurance cover.', it: 'Money: rupee cash only' },
      { t: 'Use only the corporate credit card', d: '', s: 1, f: 'Works for most payments, but no cash for taxis and tips, foreign transaction fees, and no insurance mentioned.', it: 'Money: corporate card only' }
    ]}
  ],
  debrief: 'For international trips, documents first: passport validity, then visa, then everything else. Choose flights around the director’s commitments, a hotel near the venue with flexible terms, and set up money, insurance and connectivity before departure.'
},
{
  title: 'The fog cancellation',
  tag: 'Disruption',
  brief: 'Vikram is at the Aerocity hotel in Delhi. He is booked on AI 2918, 08:00 to Mumbai, for a 1:00 pm board meeting the chairman is chairing (about one hour from Mumbai airport). At 5:30 am, an SMS: the flight is cancelled because of fog.',
  steps: [
    { q: 'What do you do first?', options: [
      { t: 'Check alternatives immediately and secure the best one, then call Vikram with the new plan.', s: 2, f: 'Hundreds of passengers are rebooking at the same moment. Act first, then bring the plan.', it: 'Response: alternatives checked and secured within minutes' },
      { t: 'Call Vikram to ask what he would like to do.', s: 1, f: 'He needs to know, but every minute spent before securing a seat lets others take the good options.', it: 'Response: called the director before checking options' },
      { t: 'Wait for Air India to rebook him automatically.', s: 0, f: 'Automatic rebooking may put him on a flight that lands too late.', it: 'Response: waited for the airline' },
      { t: 'Email the chairman’s office that Vikram will miss the meeting.', s: 0, f: 'Too early — there may well be a flight that gets him there on time.', it: 'Response: board informed of absence prematurely' }
    ]},
    { q: 'Choose the alternative.', options: [
      { t: 'Air India AI 2924', d: '09:00 → 11:10, free rebooking on the same airline, seat 3A (window)', s: 2, f: 'The earliest option, no extra cost, and lands with about two hours to spare. A window seat is a small compromise today.', it: 'New flight: AI 2924, DEL 09:00 → BOM 11:10, seat 3A' },
      { t: 'IndiGo 6E 2002', d: '09:40 → 11:50, ₹14,200 new ticket, aisle seat', s: 1, f: 'It works, but costs extra and lands later. Good as a refundable backup, not as the first choice.', it: 'New flight: 6E 2002, DEL 09:40 → BOM 11:50' },
      { t: 'Air India AI 2940', d: '10:30 → 12:40, free rebooking', s: 0, f: 'Lands at 12:40 — he cannot reach a 1 pm meeting an hour away.', it: 'New flight: AI 2940, DEL 10:30 → BOM 12:40' }
    ]},
    { q: 'Who do you inform now?', options: [
      { t: 'Vikram (new plan), the Delhi driver (new pickup time), the Mumbai driver (new arrival), and update the itinerary. Keep the chairman’s EA informed only if the plan is at risk.', s: 2, f: 'Everyone who must act is told. No false alarm to the board.', it: 'Updates: director, both drivers, itinerary v2' },
      { t: 'Only Vikram.', s: 1, f: 'The drivers will be at the wrong place at the wrong time.', it: 'Updates: director only' },
      { t: 'The chairman’s EA, to warn that Vikram will be late.', s: 0, f: 'He is not late yet. Don’t raise alarms the plan has already solved.', it: 'Updates: chairman’s office warned prematurely' }
    ]},
    { q: '8:20 am: AI 2924 is now delayed to 10:15 (landing about 12:25). What do you do?', options: [
      { t: 'Tell the chairman’s EA now: Vikram may arrive around 1:30. Offer that he joins the first 30 minutes by video from the car, and suggest moving his agenda items later.', s: 2, f: 'Early, honest notice with a practical solution. The meeting runs smoothly.', it: 'Delay plan: chairman’s EA informed early; video join + agenda reorder' },
      { t: 'Wait and see — the delay might reduce.', s: 0, f: 'If it doesn’t, the board finds out at 1 pm. Bad news early is a favour.', it: 'Delay plan: none' },
      { t: 'Ask the chairman’s office to cancel the board meeting.', s: 0, f: 'Never over-react. A late arrival is solved by video and agenda changes.', it: 'Delay plan: asked to cancel the meeting' }
    ]}
  ],
  debrief: 'In a disruption: secure the best alternative first, then inform the director with a plan, then update everyone who must act. If the plan is at risk, warn early and offer solutions such as video joining.'
}
];
