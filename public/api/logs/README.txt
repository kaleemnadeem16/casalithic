Casa Lithic contact diagnostics

The PHP contact endpoint writes request and mail diagnostics to
contact-errors.jsonl and PHP runtime errors to php-errors.log in this directory.
The .htaccess file denies all public HTTP access to this directory.

Entries are JSON lines and contain request diagnostics only. Names, email
addresses, locations, project text, and message contents are never logged.
An event with code mail_accepted means PHP mail() accepted the message for
delivery; it does not guarantee delivery by the hosting mail server.
