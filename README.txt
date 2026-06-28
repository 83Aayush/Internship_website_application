ARTIUS INTERIOR — WEBSITE PACKAGE
===================================
Pure HTML + CSS + JavaScript. No server, no Python, no backend required.

FILES
-----
index.html      Main website
css/style.css   All styling
js/main.js      Navigation, animations, and the contact form logic


HOW TO OPEN THE SITE
---------------------
Just double-click index.html to open it in any browser.
To put it online, upload these 3 files/folders to any web host
(GitHub Pages, Netlify, Hostinger, GoDaddy, etc.) exactly as they are.


ONE-TIME SETUP — MAKE THE CONTACT FORM EMAIL YOU
---------------------------------------------------
The "Send Enquiry" form on the Contact section is wired to deliver
straight to 77aayushkumar@gmail.com using a free service called
Web3Forms — no backend code needed, it works with plain JavaScript.

To activate it (takes under a minute):

1. Go to https://web3forms.com
2. Enter 77aayushkumar@gmail.com and click "Create Access Key"
3. Check that Gmail inbox — Web3Forms will email you a unique Access Key
   (a long code, looks like: a1b2c3d4-e5f6-...)
4. Open index.html in a text editor, find this line near the
   contact form (search for "YOUR_WEB3FORMS_ACCESS_KEY"):

      <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">

5. Replace YOUR_WEB3FORMS_ACCESS_KEY with the key you received, e.g.:

      <input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-abcd-ef1234567890">

6. Save the file. That's it — every enquiry submitted on the website
   will now land directly in 77aayushkumar@gmail.com.

This access key is safe to leave visible in the HTML — Web3Forms keys
are designed to be public (like a mailing address), they cannot be used
to read your email or send mail FROM your account, only TO it.

Free plan covers 250 form submissions per month, which is generous
for a business enquiry form.


WHAT WAS UPDATED IN THIS VERSION
-----------------------------------
- All email addresses changed to 77aayushkumar@gmail.com
- Company location updated to: Vill. Nahera, Pataudi, Haryana, India
- Added a team testimonial from Amit Kumar, HR Manager at Artius Interior
- Replaced the Staircases product photo with a more authentic action shot
- Added real photos of carpentry actions (measuring, drafting, sanding,
  finishing) to the "How We Work" process section, all verified
  free-to-use under the Unsplash License
- Contact form now actually sends email (via Web3Forms) instead of
  only showing a fake "sent" message
- Copyright year updated to 2026
