# Ailoitte-Assessment
Event Details API

**Scope of work - Only RESTful API:**
1. User can register with FullName, UserName, Password (6 digit, alphanumeric & 1 special char).
At the time of registration add 5000 coins to the users wallet, in your Model add key wallet and assign 5000 as default value.
2. User can login with UserName and Password.
3. Admin can Create an event (name, startDate, endDate, status, price)
4. Admin can Delete an event
5. Admin can Update an event
6. User can join an event as participants with coin, deducting coins from the wallet on join, validation.
7. User can see a list of participants in Event details API.

**Techstack:**<br />
**Node.js, Express, Postgres, Passport.js, SequelizeORM/TypeORM**