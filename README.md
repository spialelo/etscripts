At my current job, we use ExactTarget as our Email Service Provider (ESP). To pull in different components based on user data, we make use of AMPScript. AMPScript is a programming language loosely based off of JavaScript.

Here are a few that I have created.

1. monthly_mailings - pulls in either a single article template if there is only one row of data or multiple article template if there is more than one row, in the non-sendable data extension.

2. default_salutation - Pulls in the appropriate saluation if the we have the user's full name, parts of their name, or none at all.