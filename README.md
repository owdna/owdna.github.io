# Old West Durham Neighborhood Association


# Contributing

To contribute content to our website please fork this repository on Github, 
make whatever changes you think would be helpful, and issue a pull request
back to the maintainer of this repository.  When the maintainer has reviewed
the changes, they will be merged and deployed.

# Administration/Deployment

## Prerequisistes

* ruby
* aws-sdk gem

## Environment

This site is hosted on AWS S3.  To deploy, you will need an ACCESS_KEY_ID and 
SECRET_ACCESS_KEY for AWS. The webmaster (currently @JohnPKilleen) should be 
able to generate and provide these keys to you.  Export these values to your
environment as OWDNA_ACCESS_KEY_ID and OWDNA_SECRET_ACCESS_KEY and then run

```ruby deploy.rb```
